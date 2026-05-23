import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogFrontmatter = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

function readAllFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
}

function parseFile(file: string): BlogPost {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  return {
    slug,
    title: fm.title,
    date: fm.date,
    author: fm.author,
    excerpt: fm.excerpt,
    category: fm.category,
    readTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return readAllFiles()
    .map((f) => {
      const post = parseFile(f);
      const { content: _content, ...meta } = post;
      void _content;
      return meta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const files = readAllFiles();
  const match = files.find((f) => f.replace(/\.mdx$/, "") === slug);
  if (!match) return undefined;
  return parseFile(match);
}

export function getCategories(): string[] {
  const set = new Set<string>();
  for (const p of getAllPosts()) set.add(p.category);
  return Array.from(set).sort();
}

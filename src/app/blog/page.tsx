import type { Metadata } from "next";
import { BlogIndex } from "./blog-index";
import { getAllPosts, getCategories } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Tax Tips & Resources",
  description:
    "Tax tips, deadlines, and resources for Houston families and businesses from R & M Accounting.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  return <BlogIndex posts={posts} categories={categories} />;
}

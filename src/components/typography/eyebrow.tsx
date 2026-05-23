import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  withPeriod = true,
  className,
}: {
  children: React.ReactNode;
  withPeriod?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", className)}>
      {children}
      {withPeriod ? "." : ""}
    </p>
  );
}

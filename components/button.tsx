import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  const styles = variant === "primary"
    ? "bg-white text-black hover:bg-blue"
    : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]";

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-300 ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

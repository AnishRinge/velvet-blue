import { ArrowUpRight } from "@/components/icons";

export function SocialButton({ label, href, eyebrow }: { label: string; href: string; eyebrow: string }) {
  const unavailable = !href;

  return (
    <a
      href={href || undefined}
      target={unavailable ? undefined : "_blank"}
      rel={unavailable ? undefined : "noreferrer"}
      aria-disabled={unavailable}
      className={`group flex min-h-24 items-center justify-between border-b border-white/10 px-1 py-5 transition-all duration-300 ${unavailable ? "cursor-default opacity-55" : "hover:border-blue/50 hover:px-4"}`}
    >
      <div>
        <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-blue/75">{eyebrow}</p>
        <span className="font-display text-3xl text-white sm:text-4xl">{label}</span>
      </div>
      <ArrowUpRight className="h-6 w-6 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue" />
    </a>
  );
}

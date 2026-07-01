import type { Metadata } from "next";
import { Stagger, StaggerItem } from "@/components/animations";
import { SocialButton } from "@/components/social-button";
import { socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Links",
  description: "Listen, watch, and follow Velvet Blue.",
  alternates: { canonical: "/links" },
  openGraph: { title: "Links — Velvet Blue", description: "Listen, watch, and follow Velvet Blue.", url: "/links" },
  twitter: { title: "Links — Velvet Blue", description: "Listen, watch, and follow Velvet Blue." },
};

export default function LinksPage() {
  return (
    <div className="px-5 pb-28 pt-40 md:px-8 md:pb-40 md:pt-52">
      <div className="mx-auto max-w-4xl">
        <header className="mb-14 border-b border-white/10 pb-10 text-center md:mb-20 md:pb-14">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue">Find Velvet Blue</p>
          <h1 className="font-display text-7xl tracking-[-0.04em] text-white sm:text-8xl md:text-9xl">Everywhere</h1>
          <p className="mx-auto mt-6 max-w-sm text-sm font-light leading-relaxed text-white/40">Listen, watch, follow, or simply stay awhile.</p>
        </header>
        <Stagger className="grid gap-x-10 md:grid-cols-2">
          {socials.map((social) => <StaggerItem key={social.label}><SocialButton {...social} /></StaggerItem>)}
        </Stagger>
      </div>
    </div>
  );
}

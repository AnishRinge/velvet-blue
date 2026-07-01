import type { Metadata } from "next";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "About",
  description: "The story and sound of Velvet Blue.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About — Velvet Blue", description: "The story and sound of Velvet Blue.", url: "/about" },
  twitter: { title: "About — Velvet Blue", description: "The story and sound of Velvet Blue." },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-[90svh] overflow-hidden px-5 pb-28 pt-40 md:px-8 md:pb-40 md:pt-52">
      <div className="absolute left-[-10%] top-[25%] h-96 w-96 rounded-full bg-blue/[0.06] blur-[130px]" />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue">About the artist</p>
          <h1 className="font-display text-7xl tracking-[-0.045em] text-white sm:text-8xl md:text-9xl">Quiet feelings.<br /><span className="text-white/25">Loud enough.</span></h1>
        </Reveal>
        <div className="mt-20 grid border-t border-white/10 pt-10 md:mt-28 md:grid-cols-2 md:pt-14">
          <div className="hidden md:block"><span className="text-[10px] uppercase tracking-[0.22em] text-white/25">Velvet Blue · 2026</span></div>
          <Reveal delay={0.1}>
            <p className="max-w-2xl font-display text-3xl leading-[1.35] text-white sm:text-4xl md:text-5xl">
              Velvet Blue creates cinematic songs about <span className="text-blue">nostalgia</span>, loneliness, hope, memories, growing up, and the quiet emotions people carry every day.
            </p>
            <p className="mt-10 max-w-lg text-base font-light leading-relaxed text-white/40">Music for the words that arrive too late — and the moments that stay long after they are gone.</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

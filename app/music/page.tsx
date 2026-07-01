import type { Metadata } from "next";
import { Stagger } from "@/components/animations";
import { SongCard } from "@/components/song-card";
import { sortedSongs } from "@/data/songs";

export const metadata: Metadata = {
  title: "Music",
  description: "Listen to every release from Velvet Blue.",
  alternates: { canonical: "/music" },
  openGraph: { title: "Music — Velvet Blue", description: "Every Velvet Blue release, in one place.", url: "/music" },
  twitter: { title: "Music — Velvet Blue", description: "Every Velvet Blue release, in one place." },
};

export default function MusicPage() {
  return (
    <div className="px-5 pb-28 pt-40 md:px-8 md:pb-40 md:pt-52">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-16 grid gap-8 border-b border-white/10 pb-10 md:mb-24 md:grid-cols-2 md:items-end md:pb-14">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue">Discography</p>
            <h1 className="font-display text-7xl tracking-[-0.04em] text-white sm:text-8xl md:text-9xl">Music</h1>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-white/45 md:justify-self-end md:text-lg">Songs for late nights, long drives, and the parts of yourself that only speak when everything else goes quiet.</p>
        </header>

        <Stagger className="space-y-10 md:space-y-16">
          {sortedSongs.map((song) => <SongCard key={song.id} song={song} />)}
        </Stagger>
      </div>
    </div>
  );
}

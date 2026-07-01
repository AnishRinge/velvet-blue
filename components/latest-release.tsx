import Image from "next/image";
import Link from "next/link";
import type { Song } from "@/data/songs";
import { formatReleaseDate } from "@/lib/format-date";
import { ArrowUpRight, Play } from "@/components/icons";
import { Button } from "@/components/button";

export function LatestRelease({ song }: { song: Song }) {
  return (
    <div className="group grid overflow-hidden border border-white/10 bg-white/[0.025] md:grid-cols-2">
      <div className="relative aspect-[2/3] max-h-[700px] overflow-hidden">
        <Image src={song.cover} alt={`${song.title} cover artwork`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]" priority />
      </div>
      <div className="relative flex min-h-[420px] flex-col p-7 sm:p-10 md:p-12 lg:p-16">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue/[0.05] blur-[90px]" />
        <div className="relative pt-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">
            {song.status === "upcoming"
              ? `Releasing ${formatReleaseDate(song.releaseDate)}`
              : formatReleaseDate(song.releaseDate)}
          </p>  
          <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">{song.title}</h3>
          <p className="mt-6 max-w-md font-light leading-relaxed text-white/50">{song.about}</p>
          <div className="mt-8">
            <Button
              href={
                song.status === "upcoming"
                  ? song.links.hyperfollow
                  : song.links.spotify
              }
              external
            >
              {song.status === "upcoming" ? "Pre-save" : "Listen on Spotify"}
            </Button>
          </div>
        </div>
        </div>
    </div>
  );
}

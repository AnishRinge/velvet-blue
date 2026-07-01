import Image from "next/image";
import Link from "next/link";
import type { Song } from "@/data/songs";
import { formatReleaseDate } from "@/lib/format-date";
import { ArrowUpRight, Play } from "@/components/icons";
import { ShareButton } from "@/components/share-button";
import { StaggerItem } from "@/components/animations";
import { Button } from "@/components/button";

const platformLabels: Record<keyof Song["links"], string> = {
  spotify: "Spotify",
  apple: "Apple Music",
  youtube: "YouTube",
  youtubeMusic: "YouTube Music",
  itunes: "iTunes",
  amazon: "Amazon Music",
  deezer: "Deezer",
  tidal: "Tidal",
  pandora: "Pandora",
  soundcloud: "SoundCloud",
  hyperfollow: "Hyperfollow",
};

export function SongCard({ song, compact = false }: { song: Song; compact?: boolean }) {
  if (compact) {
    return (
      <StaggerItem>
        <article className="flex items-center gap-6 border-b border-white/10 py-6">

          <div className="relative h-40 w-[120px] flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={song.cover}
              alt={`${song.title} cover artwork`}
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center">

            {song.status === "released" ? (
              <Link
                href={`/music/${song.id}`}
                className="font-display text-3xl text-white transition-colors hover:text-blue"
              >
                {song.title}
              </Link>
            ) : (
              <h3 className="font-display text-3xl text-white">
                {song.title}
              </h3>
            )}

            <p className="mt-1 text-sm text-white/40">
              {formatReleaseDate(song.releaseDate)}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {song.status === "upcoming" ? (
                <Button
                  href={song.links.hyperfollow}
                  external
                >
                  Pre-save
                </Button>
              ) : (
                <>
                  <Button
                    href={song.links.spotify}
                    external
                  >
                    Spotify
                  </Button>

                  {song.links.apple && (
                    <Button
                      href={song.links.apple}
                      external
                    >
                      Apple Music
                    </Button>
                  )}

                  {song.links.amazon && (
                    <Button
                      href={song.links.amazon}
                      external
                    >
                      Amazon Music
                    </Button>
                  )}

                  {song.links.youtube && (
                    <Button
                      href={song.links.youtube}
                      external
                    >
                      YouTube
                    </Button>
                  )}
                </>
              )}

            </div>

          </div>

        </article>
      </StaggerItem>
    );
  }

  return (
    <StaggerItem>
      <article className="grid overflow-hidden border border-white/10 bg-white/[0.025] lg:grid-cols-[minmax(320px,0.85fr)_1.15fr]">
        <Link href={`/music/${song.id}`} className="group relative aspect-[2/3] overflow-hidden">
          <Image src={song.cover} alt={`${song.title} cover artwork`} fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" priority={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <span className="absolute bottom-6 left-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/70"><Play className="h-3.5 w-3.5" /> Open release</span>
        </Link>

        <div className="flex flex-col p-6 sm:p-9 lg:p-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-blue">Single · {formatReleaseDate(song.releaseDate)}</p>
            <h2 className="mt-5 font-display text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl">{song.title}</h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/50 sm:text-lg">{song.about}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 border-t border-white/10 sm:grid-cols-3 lg:mt-auto">
            {Object.entries(song.links).map(([key, href]) => (
              <a key={key} href={href || undefined} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined} aria-disabled={!href} className={`group flex min-h-14 items-center justify-between border-b border-white/10 text-xs transition-colors ${href ? "text-white/60 hover:text-white" : "cursor-default text-white/25"}`}>
                {platformLabels[key as keyof Song["links"]]}
                <ArrowUpRight className="h-3.5 w-3.5 text-white/20 transition-colors group-hover:text-blue" />
              </a>
            ))}
          </div>
          <div className="mt-6 flex justify-end"><ShareButton title={song.title} path={`/music/${song.id}`} /></div>
        </div>
      </article>
    </StaggerItem>
  );
}

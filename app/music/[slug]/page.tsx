import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { ShareButton } from "@/components/share-button";
import { Reveal } from "@/components/animations";
import { formatReleaseDate } from "@/lib/format-date";
import { getSong, songs, type Song } from "@/data/songs";

const labels: Record<keyof Song["links"], string> = {
  spotify: "Spotify", apple: "Apple Music", youtube: "YouTube", youtubeMusic: "YouTube Music", itunes: "iTunes",
  amazon: "Amazon Music", deezer: "Deezer", tidal: "Tidal",
  pandora: "Pandora", soundcloud: "SoundCloud", hyperfollow: "Hyperfollow",
};

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug);
  if (!song) return {};
  return {
    title: song.title,
    description: song.about,
    alternates: { canonical: `/music/${song.id}` },
    openGraph: { title: `${song.title} — Velvet Blue`, description: song.about, type: "music.song", url: `/music/${song.id}`, images: [{ url: song.cover, width: 1024, height: 1024 }] },
    twitter: { card: "summary_large_image", title: `${song.title} — Velvet Blue`, description: song.about, images: [song.cover] },
  };
}

export default async function SongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const song = getSong(slug);

  if (!song || song.status !== "released") {
    notFound();
  }

  const songLd = {
    "@context": "https://schema.org", "@type": "MusicRecording", name: song.title,
    byArtist: { "@type": "MusicGroup", name: "Velvet Blue" }, datePublished: song.releaseDate,
    image: song.cover, description: song.about,
  };

  return (
    <div className="px-5 pb-28 pt-36 md:px-8 md:pb-40 md:pt-44">
      <div className="mx-auto max-w-[1400px]">
        <Link href="/#discography" className="mb-8 inline-block text-[10px] uppercase tracking-[0.22em] text-white/35 transition-colors hover:text-white">← All music</Link>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <Reveal className="relative aspect-square overflow-hidden">
            <Image src={song.cover} alt={`${song.title} cover artwork`} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-blue">Single · {formatReleaseDate(song.releaseDate)}</p>
            <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-[-0.045em] text-white sm:text-8xl xl:text-9xl">{song.title}</h1>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-white/50">{song.about}</p>
            <div className="mt-12 grid grid-cols-2 border-t border-white/10">
              {Object.entries(song.links)
                .filter(([, href]) => href)
                .map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-16 items-center justify-between border-b border-white/10 pr-4 text-xs text-white/65 hover:text-white"
                  >
                    {labels[key as keyof Song["links"]]}
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/20 group-hover:text-blue" />
                  </a>
                ))}
            </div>
            <div className="mt-7 flex justify-end"><ShareButton title={song.title} path={`/music/${song.id}`} /></div>
          </Reveal>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(songLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}

import { Hero } from "@/components/hero";
import { LatestRelease } from "@/components/latest-release";
import { SectionTitle } from "@/components/section-title";
import { SongCard } from "@/components/song-card";
import { Reveal, Stagger } from "@/components/animations";
import { Button } from "@/components/button";
import { latestSong, sortedSongs } from "@/data/songs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="latest" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionTitle eyebrow="Now playing" title="Latest Release" /></Reveal>
          <Reveal delay={0.1}><LatestRelease song={latestSong} /></Reveal>
        </div>
      </section>

      <section
        id="discography"
        className="px-5 pb-28 md:px-8 md:pb-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionTitle eyebrow="The catalogue" title="All Releases" /></Reveal>
          <Stagger className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {sortedSongs.map((song) => <SongCard key={song.id} song={song} compact />)}
          </Stagger>
          {/* <Reveal className="mt-14 flex justify-center">
            <Button href="/music" variant="secondary">Explore all music</Button>
          </Reveal> */}
        </div>
      </section>
    </>
  );
}

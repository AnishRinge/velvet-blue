export type SongLinks = {
  spotify: string;
  apple: string;
  youtube: string;
  youtubeMusic: string;
  itunes: string;
  amazon: string;
  deezer: string;
  tidal: string;
  pandora: string;
  soundcloud?: string;
  hyperfollow: string;
};

export type Song = {
  id: string;
  title: string;
  releaseDate: string;
  status: "released" | "upcoming";

  cover: string;

  about: string;

  story?: string;
  lyrics?: string;
  genre?: string;
  duration?: string;
  youtubeVideo?: string;

  links: SongLinks;
};

export const songs: Song[] = [
{
  id: "nobody-knows",
  title: "Nobody Knows",
  releaseDate: "2026-07-01",
  status: "released",
  cover: "/covers/nobody-knows.jpg",
  about:
    "A song about wondering how everyone else seems to know something you don't.",
  genre: "Cinematic Pop",
  duration: "3:44",
  youtubeVideo: "https://youtu.be/gqHJq0U-fgM?si=0qu-RFh4e9Ptvd8N",
  story: "",
  lyrics: "",
  links: {
    spotify: "https://open.spotify.com/track/7tt9Mt6CjbqsTrIfWTnNpW?si=04ee2233c0654e86",
    apple: "",
    youtube: "https://youtu.be/gqHJq0U-fgM?si=0qu-RFh4e9Ptvd8N",
    youtubeMusic: "https://music.youtube.com/watch?v=gqHJq0U-fgM&si=2qCmNvaH7faTg1gB",
    itunes: "https://music.apple.com/us/album/nobody-knows-single/6783370305",
    amazon: "https://music.amazon.in/tracks/B0H68CMTQK?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_t8l2MzHGBFyI18emSmF4puy06",
    deezer: "",
    tidal: "",
    pandora: "",
    soundcloud: "",
    hyperfollow: "https://distrokid.com/hyperfollow/velvetblue3/nobody-knows",
  },
},

{
  id: "forever-lasts",
  title: "Forever Lasts",
  releaseDate: "2026-06-19",
  status: "released",
  cover: "/covers/forever-lasts.jpg",
  about:
    "A song about the ordinary moments we never realize will become our last.",
  genre: "Cinematic Pop",
  duration: "4:19",
  youtubeVideo: "https://youtu.be/vglaRtB4Kvk?si=J8KFlYSOMb9echzv",
  story: "",
  lyrics: "",
  links: {
    spotify: "https://open.spotify.com/track/6IDQpM2mTY0UTQxXxGE7tO?si=637c50c29e9a4d8e",
    apple: "https://music.apple.com/us/album/forever-lasts-single/6782731479",
    youtube: "https://youtu.be/vglaRtB4Kvk?si=J8KFlYSOMb9echzv",
    youtubeMusic: "https://music.youtube.com/watch?v=vglaRtB4Kvk&si=VzlvDG5mwcICobwI",
    itunes: "https://music.apple.com/us/album/forever-lasts-single/6782731479?uo=4",
    amazon: "https://music.amazon.in/tracks/B0H5ZXYN1K?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_CgMbAVfafG0k62DQw66BulPB3",
    deezer: "",
    tidal: "",
    pandora: "",
    soundcloud: "",
    hyperfollow: "https://distrokid.com/hyperfollow/velvetblue3/forever-lasts",
  },
},
];

export const sortedSongs = [...songs].sort(
  (a, b) =>
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
);

export const latestSong = sortedSongs[0];

export function getSong(id: string) {
  return songs.find((song) => song.id === id);
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-[10px] uppercase tracking-[0.3em] text-blue">404 · Lost in the blue</p>
      <h1 className="mt-5 font-display text-7xl text-white md:text-9xl">Nothing here.</h1>
      <Link href="/" className="mt-10 border-b border-white/30 pb-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white">Return home</Link>
    </div>
  );
}

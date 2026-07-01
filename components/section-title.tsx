export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-5 md:mb-14">
      <div>
        {eyebrow && <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue">{eyebrow}</p>}
        <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">{title}</h2>
      </div>
      <span className="mb-1 hidden text-[10px] uppercase tracking-[0.24em] text-white/30 sm:block">Velvet Blue</span>
    </div>
  );
}

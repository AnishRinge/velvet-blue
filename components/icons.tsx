import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7M7 7h10v10" /></svg>;
}

export function ArrowRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function Play(props: IconProps) {
  return <svg {...base} {...props}><path d="m8 5 11 7-11 7V5Z" /></svg>;
}

export function Share(props: IconProps) {
  return <svg {...base} {...props}><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" /></svg>;
}

export function Menu(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 8h16M4 16h16" /></svg>;
}

export function Close(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function Pause(props: IconProps) {
  return <svg {...base} {...props}><path d="M9 6v12M15 6v12" /></svg>;
}

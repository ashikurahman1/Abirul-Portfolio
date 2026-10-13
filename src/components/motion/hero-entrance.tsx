import type { ReactNode } from "react";

export function HeroEntrance({ children }: { children: ReactNode }) {
  return <div className="hero-composition">{children}</div>;
}

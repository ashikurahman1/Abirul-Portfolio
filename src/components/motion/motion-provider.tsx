"use client";
import { useMemo, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
export function MotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const options = useMemo(
    () => ({
      autoRaf: true,
      duration: 1.05,
      smoothWheel: !reducedMotion,
      anchors: !reducedMotion,
    }),
    [reducedMotion],
  );
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={options}>
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}

"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import gsap from "gsap";

export function useDisclosureMotion(
  ref: RefObject<HTMLDivElement | null>,
  open: boolean,
  variant: "accordion" | "menu",
) {
  const initialized = useRef(false);
  useLayoutEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    if (!initialized.current) {
      initialized.current = true;
      panel.hidden = !open;
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panel.hidden = false;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: reduced ? 0 : 0.38 },
        onComplete: () => {
          panel.hidden = !open;
          gsap.set(panel, { clearProps: "height,opacity,transform" });
        },
      });
      if (variant === "accordion") {
        timeline.fromTo(panel, { height: open ? 0 : panel.scrollHeight, opacity: open ? 0 : 1 },
          { height: open ? "auto" : 0, opacity: open ? 1 : 0 });
        if (open && !reduced) timeline.fromTo(panel.children, { y: 12 }, { y: 0, duration: 0.4, clearProps: "transform" }, 0.05);
      } else {
        timeline.fromTo(panel, { y: open ? -12 : 0, opacity: open ? 0 : 1 }, { y: open ? 0 : -8, opacity: open ? 1 : 0 });
        if (open && !reduced) timeline.fromTo(panel.children, { y: 14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.045, duration: 0.3, clearProps: "transform,opacity" }, 0.08);
      }
    }, panel);
    return () => context.revert();
  }, [ref, open, variant]);
}

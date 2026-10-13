"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- Native hash links are handled by Lenis. */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDisclosureMotion } from "@/components/motion/use-disclosure-motion";
import { navigation, portfolio } from "@/data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useDisclosureMotion(panel, open, "menu");
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      gsap.to(toggle.current?.querySelectorAll("span") ?? [], {
        y: (index) => open ? (index === 0 ? 3 : -3) : 0,
        rotate: (index) => open ? (index === 0 ? 45 : -45) : 0,
        duration: reduced ? 0 : 0.25,
        ease: "power2.out",
      });
    }, toggle);
    return () => context.revert();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <nav className="topbar" aria-label="Main navigation">
      <a className="wordmark" href="/#home">{portfolio.name}<span aria-hidden="true">®</span></a>
      <button ref={toggle} className={`menu-toggle ${open ? "is-open" : ""}`}
        aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}
        aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <div className="topbar-actions">
        <a className="hello-link" href="/#contact">Say hi — let’s create together</a>
      </div>
      <div ref={panel} className="navigation-panel" id="main-navigation" hidden={!open} aria-hidden={!open} inert={!open}>
        {navigation.slice(1).map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </div>
    </nav>
  );
}

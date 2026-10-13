"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

export function SceneMotion({
  children,
  sceneId,
}: {
  children: ReactNode;
  sceneId: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const scene = root.current;
    if (!scene) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const refresh = () => ScrollTrigger.refresh();
    const update = () => ScrollTrigger.update();
    lenis?.on("scroll", update);
    let refreshFrame = 0;
    let active = true;

    media.add(
      {
        animate: "(prefers-reduced-motion: no-preference)",
        reduced: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 701px) and (hover: hover) and (pointer: fine)",
      },
      (context) => {
        const { animate, desktop } = context.conditions!;
        scene.dataset.motion = animate ? "gsap" : "reduced";
        if (!animate) return;
        const select = gsap.utils.selector(scene);
        const cleanups: (() => void)[] = [];
        const reveal = (target: Element, index = 0) => {
          gsap.fromTo(target, { y: desktop ? 34 : 18, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: Math.min(index * 0.07, 0.21),
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: target, start: "top 93%", once: true },
          });
        };

        const hero = select(".hero")[0];
        if (hero) {
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .fromTo(select(".hero-name, .hero-outline"),
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", duration: 1.2, clearProps: "clipPath" })
            .fromTo(select("[data-hero-portrait]"),
              { y: 48, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.1, clearProps: "transform,opacity" }, 0.1)
            .fromTo(select("[data-hero-copy], .hero .topbar"),
              { y: 18, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.1, duration: 0.75, clearProps: "transform,opacity" }, 0.35);
          if (desktop) {
            gsap.to(select(".hero-portrait img"), {
              y: -32, ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.7 },
            });
          }
        }

        const caseStudy = select(".case-study")[0];
        if (caseStudy) {
          gsap.timeline({ defaults: { ease: "power3.out", clearProps: "transform,opacity,clipPath" } })
            .fromTo(select(".case-nav .topbar, .case-back, .case-study > .eyebrow"),
              { y: 14, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6 })
            .fromTo(select(".case-study > h1"),
              { y: 40, clipPath: "inset(0 0 100% 0)" },
              { y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.95 }, 0.12)
            .fromTo(select(".case-summary, .case-focus > span"),
              { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.06 }, 0.32);
        }

        select("[data-reveal]").forEach((element: Element) => {
          if (element.matches(".project-gallery, .about-principles")) return;
          reveal(element);
        });
        for (const selector of [
          ".about-poster, .about-copy", ".about-principles > h3, .principle",
          ".polaroid", ".service", ".project-thumbnail", ".projects-heading",
          ".project-description, .project-row", ".case-image", ".case-details > section",
          ".project-artwork", ".case-actions", ".footer-info > div",
        ]) {
          select(selector).forEach((element: Element, index: number) => reveal(element, index));
        }

        const footer = select(".footer")[0];
        if (footer) {
          gsap.fromTo(select(".footer-name, .footer-outline"), { y: 30 }, {
            y: -12, ease: "none",
            scrollTrigger: { trigger: footer, start: "top bottom", end: "bottom bottom", scrub: 0.8 },
          });
        }
        gsap.to(select("[data-scroll-progress]"), {
          scaleX: 1, ease: "none",
          scrollTrigger: { trigger: scene, start: "top top", end: "bottom bottom", scrub: 0.2 },
        });

        const tracks = select(".marquee-track");
        if (tracks.length) {
          const loop = gsap.timeline({ repeat: -1, paused: true });
          loop.to(tracks[0], { xPercent: -50, duration: 42, ease: "none" }, 0)
            .fromTo(tracks[1], { xPercent: -50 }, { xPercent: 0, duration: 42, ease: "none" }, 0);
          const trigger = ScrollTrigger.create({
            trigger: select(".marquee")[0], start: "top bottom", end: "bottom top",
            onToggle: (self) => self.isActive && !document.hidden ? loop.play() : loop.pause(),
          });
          const visibility = () => document.hidden || !trigger.isActive ? loop.pause() : loop.play();
          document.addEventListener("visibilitychange", visibility);
          cleanups.push(() => document.removeEventListener("visibilitychange", visibility));
        }

        const listen = (element: Element, event: string, callback: EventListener) => {
          element.addEventListener(event, callback);
          cleanups.push(() => element.removeEventListener(event, callback));
        };
        const safe = <T extends EventListener>(callback: T): T => context.add("interaction", callback) as T;
        select(".arrow-button, .project-thumbnail, .polaroid, .artwork-full-size, .contact-link, .case-back, .footer-links a").forEach((element: HTMLElement) => {
          const button = element.matches(".arrow-button");
          const card = element.matches(".project-thumbnail, .polaroid");
          const icon = element.querySelector(".button-icon");
          const enter = safe(() => {
            gsap.to(element, { y: card ? -6 : -2, duration: 0.35, ease: "power2.out", overwrite: "auto" });
            if (icon) gsap.to(icon, { rotate: 45, duration: 0.35, ease: "power2.out" });
          });
          const leave = safe(() => {
            gsap.to(element, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "power3.out", overwrite: "auto", clearProps: "transform" });
            if (icon) gsap.to(icon, { rotate: 0, duration: 0.4, clearProps: "transform" });
          });
          listen(element, "focus", enter);
          listen(element, "blur", leave);
          if (desktop) {
            listen(element, "pointerenter", enter);
            listen(element, "pointerleave", leave);
            if (button) {
              const move = context.add("move", (event: PointerEvent) => {
                const bounds = element.getBoundingClientRect();
                gsap.to(element, {
                  x: gsap.utils.clamp(-7, 7, (event.clientX - bounds.left - bounds.width / 2) * 0.08),
                  y: gsap.utils.clamp(-5, 5, (event.clientY - bounds.top - bounds.height / 2) * 0.12),
                  duration: 0.35, ease: "power3.out", overwrite: "auto",
                });
              });
              listen(element, "pointermove", move as EventListener);
            }
          }
          const press = safe(() => gsap.to(element, { scale: 0.97, duration: 0.12, overwrite: "auto" }));
          listen(element, "pointerdown", press);
          listen(element, "pointerup", leave);
          listen(element, "pointercancel", leave);
        });
        select(".accordion-trigger").forEach((element: HTMLElement) => {
          const icon = element.querySelector(".round-arrow");
          const enter = safe(() => gsap.to(icon, { rotate: 45, duration: 0.25, ease: "power2.out" }));
          const leave = safe(() => gsap.to(icon, { rotate: 0, duration: 0.3, clearProps: "transform" }));
          listen(element, "focus", enter);
          listen(element, "blur", leave);
          if (desktop) {
            listen(element, "pointerenter", enter);
            listen(element, "pointerleave", leave);
          }
        });
        select(".project-cover, .project-artwork > a, .case-image > a").forEach((element: HTMLElement) => {
          const image = element.querySelector("img");
          const enter = safe(() => gsap.to(image, { scale: 1.014, duration: 0.5, ease: "power2.out" }));
          const leave = safe(() => gsap.to(image, { scale: 1, duration: 0.6, clearProps: "transform" }));
          listen(element, "focus", enter);
          listen(element, "blur", leave);
          if (desktop) {
            listen(element, "pointerenter", enter);
            listen(element, "pointerleave", leave);
          }
        });
        return () => cleanups.forEach((cleanup) => cleanup());
      },
      scene,
    );

    // Fonts, lazy images, and disclosure height changes alter trigger positions.
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(refresh);
    });
    observer.observe(scene);
    scene.addEventListener("load", refresh, true);
    document.fonts.ready.then(() => { if (active) refresh(); });
    refresh();
    return () => {
      active = false;
      cancelAnimationFrame(refreshFrame);
      observer.disconnect();
      scene.removeEventListener("load", refresh, true);
      lenis?.off("scroll", update);
      media.revert();
      delete scene.dataset.motion;
    };
  }, [sceneId, lenis]);

  return (
    <div ref={root} className="motion-scene" data-motion-scene={sceneId}>
      <div className="scroll-progress" aria-hidden="true"><span data-scroll-progress /></div>
      {children}
    </div>
  );
}

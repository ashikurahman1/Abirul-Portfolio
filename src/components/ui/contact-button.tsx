"use client";
import { useLayoutEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { ArrowButton } from "./arrow-button";
import { ContactLinks } from "./contact-links";
import { sendContactInquiry } from "@/lib/contact";

export function ContactButton({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const animations = useRef<gsap.Context | null>(null);
  const lenis = useLenis();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [outcome, setOutcome] = useState<"submitted" | "error" | "activation" | "">("");
  const request = useRef<AbortController | null>(null);
  const busy = useRef(false);
  useLayoutEffect(() => {
    if (status && dialog.current?.open) {
      dialog.current.querySelector(".form-status")?.scrollIntoView({ block: "nearest" });
    }
  }, [status]);
  useLayoutEffect(() => {
    const element = dialog.current;
    return () => {
      animations.current?.revert();
      request.current?.abort();
      if (element?.open) {
        element.close();
        document.body.classList.remove("dialog-open");
        lenis?.start();
      }
    };
  }, [lenis]);
  const open = () => {
    const element = dialog.current;
    if (!element || element.open) return;
    animations.current?.revert();
    if (!busy.current) { setStatus(""); setOutcome(""); }
    element.showModal();
    lenis?.stop();
    document.body.classList.add("dialog-open");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    animations.current = gsap.context(() => {
      if (reduced) return;
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(element, { y: 24, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, clearProps: "transform,opacity" })
        .fromTo(element.querySelectorAll("h2, form > label, form > .arrow-button"),
          { y: 12, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.35, clearProps: "transform,opacity" }, 0.1);
    }, element);
  };
  const release = () => {
    animations.current?.revert();
    lenis?.start();
    document.body.classList.remove("dialog-open");
  };
  const close = () => {
    const element = dialog.current;
    if (!element?.open) return;
    animations.current?.revert();
    animations.current = gsap.context(() => {
      gsap.to(element, {
        y: 18, opacity: 0, scale: 0.98,
        duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.2,
        ease: "power2.in", onComplete: () => element.close(),
      });
    }, element);
  };
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const controller = new AbortController();
    request.current = controller;
    busy.current = true;
    setSending(true);
    setStatus("");
    setOutcome("");
    let timedOut = false;
    const timeout = window.setTimeout(() => { timedOut = true; controller.abort(); }, 20000);
    try {
      const result = await sendContactInquiry({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
        website: String(data.get("website") ?? ""),
        url: window.location.href,
      }, controller.signal);
      setOutcome(result);
      if (result === "activation") {
        setStatus("Email delivery is awaiting inbox confirmation. Please use the contact links above for now.");
      } else {
        setStatus("Your inquiry was submitted. Thank you for getting in touch!");
        form.reset();
        document.dispatchEvent(new Event("portfolio:contact-sent"));
      }
    } catch (error) {
      if (!controller.signal.aborted || timedOut) {
        setOutcome("error");
        setStatus(timedOut ? "The request timed out. Please try again or use the contact links above."
          : error instanceof Error && error.name !== "TypeError" ? error.message
          : "Unable to connect to the email service. Please try again or use the contact links above.");
      }
    } finally {
      window.clearTimeout(timeout);
      busy.current = false;
      request.current = null;
      setSending(false);
    }
  }
  return (
    <>
      <ArrowButton onClick={open}>{children}</ArrowButton>
      <dialog ref={dialog} className="contact-dialog" onClose={release} data-lenis-prevent
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => {
          if (event.target !== dialog.current) return;
          const bounds = dialog.current.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
        }}>
        <button className="dialog-close" aria-label="Close contact" onClick={close}>×</button>
        <p className="eyebrow">{"// "}Let’s collaborate</p>
        <h2>A GOOD IDEA<br />STARTS WITH <em>HELLO.</em></h2>
        <p>Have a project in mind? Send Abirul a message about your idea below.</p>
        <ContactLinks compact />
        <form onSubmit={submit} aria-busy={sending} onChange={() => { if (status && !sending) { setStatus(""); setOutcome(""); } }}>
          <label>Your name<input name="name" autoComplete="name" maxLength={100} placeholder="Your name" required disabled={sending} /></label>
          <label>Your email<input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required disabled={sending} /></label>
          <label>Tell me about your project<textarea name="message" rows={4} maxLength={5000} placeholder="The idea, the challenge, the possibilities…" required disabled={sending} /></label>
          <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <ArrowButton type="submit" disabled={sending}>{sending ? "Sending…" : "Send Message"}</ArrowButton>
          <p className={`form-status ${outcome ? `form-status--${outcome}` : ""}`} role="status">{status}</p>
          <small className="contact-delivery-note">Messages are processed by <a href="https://formsubmit.co/" target="_blank" rel="noopener noreferrer">FormSubmit</a>.</small>
        </form>
      </dialog>
    </>
  );
}

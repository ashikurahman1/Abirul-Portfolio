"use client";

import { useEffect, type ReactNode } from "react";

type Cue = "tap" | "open" | "close" | "ready";

// Interaction cues are generated locally, without audio files or a loading step.
function sound(context: AudioContext, cue: Cue, voices: Set<OscillatorNode>) {
  const start = context.currentTime;
  const notes = cue === "ready"
    ? [{ frequency: 784, end: 784, delay: 0, duration: 0.18 }, { frequency: 1047, end: 1047, delay: 0.08, duration: 0.22 }]
    : [{ frequency: cue === "open" ? 440 : cue === "close" ? 480 : 620,
        end: cue === "open" ? 660 : cue === "close" ? 320 : 500,
        delay: 0, duration: cue === "tap" ? 0.095 : 0.15 }];
  for (const note of notes) {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    const at = start + note.delay;
    oscillator.type = cue === "tap" ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(note.frequency, at);
    oscillator.frequency.exponentialRampToValueAtTime(note.end, at + note.duration);
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(cue === "tap" ? 0.12 : 0.1, at + 0.006);
    envelope.gain.exponentialRampToValueAtTime(0.0001, at + note.duration);
    envelope.gain.setValueAtTime(0, at + note.duration + 0.005);
    oscillator.connect(envelope);
    envelope.connect(context.destination);
    voices.add(oscillator);
    oscillator.start(at);
    oscillator.stop(at + note.duration + 0.01);
    oscillator.onended = () => { voices.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
  }
}

export function SoundProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let audio: AudioContext | null = null;
    let active = true;
    let lastCue = -Infinity;
    const voices = new Set<OscillatorNode>();
    const silence = () => {
      for (const oscillator of voices) { oscillator.stop(); oscillator.disconnect(); }
      voices.clear();
    };
    const play = (cue: Cue) => {
      if (!active || document.hidden || (cue !== "ready" && performance.now() - lastCue < 45)) return;
      try {
        const AudioConstructor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioConstructor) return;
        // Lazily unlock audio on a real click/key gesture, including the first one.
        audio ??= new AudioConstructor();
        lastCue = performance.now();
        const context = audio;
        if (context.state === "suspended") {
          void context.resume().then(() => {
            if (active && !document.hidden && context.state === "running") sound(context, cue, voices);
          }).catch(() => {});
        } else if (context.state === "running") sound(context, cue, voices);
      } catch {
        // Unsupported or blocked audio must not interrupt navigation or forms.
      }
    };
    const click = (event: MouseEvent) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const control = event.target.closest("a, button");
      if (!control) {
        if (!audio && !event.target.closest("input, textarea, select")) play("tap");
        return;
      }
      if (control.closest("[inert]")) return;
      if (control instanceof HTMLButtonElement && (control.disabled || control.type === "submit" && control.form)) return;
      if (control.matches(".menu-toggle, .accordion-trigger")) play(control.getAttribute("aria-expanded") === "true" ? "close" : "open");
      else if (control.matches(".dialog-close")) play("close");
      else if (control.matches(".project-thumbnail, .project-cover, .case-back, .navigation-panel a")) play("open");
      else play("tap");
    };
    const submit = (event: SubmitEvent) => {
      if (event.isTrusted && event.target instanceof Element && event.target.closest(".contact-dialog")) play("tap");
    };
    const sent = () => { if (audio?.state === "running") play("ready"); };
    const key = (event: KeyboardEvent) => {
      if (event.isTrusted && event.key === "Escape" && document.querySelector("dialog[open], .menu-toggle[aria-expanded='true']")) play("close");
    };
    const visibility = () => {
      if (document.hidden) { silence(); void audio?.suspend().catch(() => {}); }
    };
    document.addEventListener("click", click, true);
    document.addEventListener("submit", submit, true);
    document.addEventListener("portfolio:contact-sent", sent);
    document.addEventListener("keydown", key, true);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      active = false;
      silence();
      document.removeEventListener("click", click, true);
      document.removeEventListener("submit", submit, true);
      document.removeEventListener("portfolio:contact-sent", sent);
      document.removeEventListener("keydown", key, true);
      document.removeEventListener("visibilitychange", visibility);
      void audio?.close().catch(() => {});
    };
  }, []);
  return children;
}

"use client";
import { useId, useRef, useState, type ReactNode } from "react";
import { useDisclosureMotion } from "@/components/motion/use-disclosure-motion";
import { RoundArrow } from "./arrow-button";
export function AccordionItem({
  title,
  number,
  defaultOpen = false,
  children,
  className = "",
}: {
  title: string;
  number?: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panel = useRef<HTMLDivElement>(null);
  useDisclosureMotion(panel, open, "accordion");
  return (
    <article className={`accordion-item ${open ? "is-open" : ""} ${className}`}>
      <h3>
        <button
          className="accordion-trigger"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
        >
          {number && (
            <span className="service-number" aria-hidden="true">
              {number}
            </span>
          )}
          <span className="accordion-title">{title}</span>
          <RoundArrow />
        </button>
      </h3>
      <div ref={panel} id={id} className="accordion-content" hidden={!open} aria-hidden={!open} inert={!open}>
        <div className="accordion-content-inner">{children}</div>
      </div>
    </article>
  );
}

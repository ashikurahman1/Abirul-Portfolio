import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
type Appearance = "orange" | "dark" | "outline";
function ButtonContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="button-icon" aria-hidden="true">
        ↗
      </span>
      <span>{children}</span>
    </>
  );
}
export function ArrowLink({
  children,
  href,
  appearance = "orange",
  className = "",
}: {
  children: ReactNode;
  href: string;
  appearance?: Appearance;
  className?: string;
}) {
  const LinkElement = href.includes("#") ? "a" : Link;
  return (
    <LinkElement
      href={href}
      className={`arrow-button arrow-button--${appearance} ${className}`}
    >
      <ButtonContent>{children}</ButtonContent>
    </LinkElement>
  );
}
export function ArrowButton({
  children,
  appearance = "orange",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { appearance?: Appearance }) {
  return (
    <button
      className={`arrow-button arrow-button--${appearance} ${className}`}
      {...props}
    >
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}
export function RoundArrow() {
  return (
    <span className="round-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

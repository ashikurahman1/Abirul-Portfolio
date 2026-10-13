import { portfolio } from "@/data/portfolio";

export function ContactLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-links${compact ? " contact-links--compact" : ""}`} aria-label="Contact Abirul Islam">
      <a className="contact-link" href={`mailto:${portfolio.email}`}>
        {!compact && <span>Email</span>}
        <strong>{portfolio.email}</strong><i aria-hidden="true">↗</i>
      </a>
      <a className="contact-link" href={portfolio.phoneHref}>
        {!compact && <span>Phone</span>}
        <strong>{portfolio.phone}</strong><i aria-hidden="true">↗</i>
      </a>
      <a className="contact-link" href={portfolio.facebook} target="_blank" rel="noopener noreferrer">
        {!compact && <span>Facebook</span>}
        <strong>Graphixo</strong><i aria-hidden="true">↗</i>
      </a>
    </div>
  );
}

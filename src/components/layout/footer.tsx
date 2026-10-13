import { ContactButton } from "@/components/ui/contact-button";
import { ContactLinks } from "@/components/ui/contact-links";
import { navigation, portfolio } from "@/data/portfolio";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name" aria-hidden="true">
        {portfolio.displayName}
      </div>
      <div className="footer-outline" aria-hidden="true">
        {portfolio.displayName}
      </div>
      <div className="footer-info section-container">
        <div>
          <p className="footer-label">Connect with me</p>
          <ContactButton>Let’s Talk</ContactButton>
          <ContactLinks compact />
          <p className="footer-manifesto">
            I turn ideas into distinctive brands
            <br />
            through graphic design, thoughtful detail,
            <br />
            and clear visual stories.
          </p>
        </div>
        <div className="footer-links">
          <nav aria-label="Footer navigation">
            {navigation.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="copyright">Copyright © {portfolio.name} 2026</p>
          <p className="developer-credit">Developed by <a href={portfolio.developer.linkedin} target="_blank" rel="noopener noreferrer">{portfolio.developer.name}<span aria-hidden="true"> ↗</span></a></p>
        </div>
      </div>
    </footer>
  );
}

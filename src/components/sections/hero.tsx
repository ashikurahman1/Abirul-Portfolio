import Image from "next/image";
import { Navigation } from "@/components/layout/navigation";
import { HeroEntrance } from "@/components/motion/hero-entrance";
import { ArrowLink } from "@/components/ui/arrow-button";
import { portfolio } from "@/data/portfolio";
export function Hero() {
  return (
    <header className="hero" id="home">
      <Navigation />
      <HeroEntrance>
        <div className="hero-art">
          <h1 className="hero-name" aria-label={portfolio.name}>
            {portfolio.displayName}
          </h1>
          <div className="hero-portrait" data-hero-portrait>
            <Image
              src={portfolio.heroPortrait}
              alt="Abirul Islam in a left-facing profile with warm orange rim lighting"
              fill
              sizes="(max-width: 700px) 100vw, 65vw"
              preload
            />
          </div>
          <div className="hero-outline" aria-hidden="true">
            {portfolio.displayName}
          </div>
        </div>
        <div className="hero-copy">
          <p className="hero-intro" data-hero-copy>
            <span className="hero-role">{portfolio.role}</span>
            Designing Brands
            <br />
            That Tell
            <br />
            Your Story
          </p>
          <div className="hero-description" data-hero-copy>
            <p>
              From concept to creation, I craft brand identities, packaging,
              and campaign visuals—turning ideas into graphic design that
              connects with people.
            </p>
            <ArrowLink href="/#projects" appearance="dark">
              See My Work
            </ArrowLink>
          </div>
        </div>
      </HeroEntrance>
    </header>
  );
}

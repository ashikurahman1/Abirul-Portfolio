import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { designHighlights, portfolio, principles } from "@/data/portfolio";
import { ArrowLink } from "@/components/ui/arrow-button";
export function About() {
  return (
    <section
      className="about section-container"
      id="about"
      aria-labelledby="about-title"
    >
      <Reveal>
        <h2 className="about-statement" id="about-title">
          <span>
            CRAFTING <em>DESIGNS</em>
          </span>
          <span>
            <em>THAT</em> CONNECT PEOPLE
          </span>
        </h2>
      </Reveal>
      <div className="about-introduction">
        <figure className={`about-poster ${portfolio.aboutPoster ? "" : "about-poster--portrait"}`}>
          <Image
            src={portfolio.aboutPoster || portfolio.portrait}
            alt={portfolio.aboutPoster
              ? "Abirul Islam’s personal branding poster: Design With Purpose, Creative Mind, Visuals That Speak"
              : "Portrait of graphic designer Abirul Islam"}
            width={portfolio.aboutPoster ? 1122 : 1024}
            height={portfolio.aboutPoster ? 1402 : 1536}
            sizes="(max-width: 700px) 320px, (max-width: 1000px) 38vw, 480px"
          />
        </figure>
        <div className="about-copy">
          <p className="eyebrow">{"// "}Meet Abirul Islam</p>
          <h3>
            GRAPHIC DESIGNER.
            <br />
            <em>VISUAL STORYTELLER.</em>
          </h3>
          <p>
            I’m Abirul Islam. I turn ideas into visual stories through brand
            identities, packaging, campaign graphics, and print design.
            Typography, color, and composition help me give each brand a voice
            of its own.
          </p>
          <p>
            My process starts with the message: what should this design say,
            and who should it reach? From the first concept to the final artwork,
            I bring purpose to the idea and personality to every detail.
          </p>
          <div className="about-experience">
            <p className="eyebrow">{"// "}Experience</p>
            <div>
              <strong>{portfolio.experience.company}</strong>
              <span>{portfolio.experience.role}</span>
              <small>{portfolio.experience.dates}</small>
            </div>
          </div>
          <ArrowLink href="/#projects" appearance="outline">
            Explore My Work
          </ArrowLink>
        </div>
      </div>
      <Reveal className="about-principles">
        <h3>
          Designing with Purpose,
          <br />
          Creating Visual Stories
          <br />
          Measured by Meaningful
          <br />
          Impact
        </h3>
        <div className="principles">
          {principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span>{principle}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <small aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </small>
            </div>
          ))}
        </div>
      </Reveal>
      <div
        className="polaroid-gallery"
        aria-label="Selected work across graphic design disciplines"
      >
        {designHighlights.map((highlight, index) => (
          <figure
            className={`polaroid polaroid--${index + 1}`}
            key={highlight.name}
          >
            <Link
              className="polaroid-image"
              href={`/projects/${highlight.project.slug}`}
              aria-label={`Explore ${highlight.project.title}: ${highlight.name}`}
            >
              <Image
                src={highlight.image}
                alt={highlight.alt}
                fill
                sizes="(max-width: 700px) 174px, 24vw"
              />
            </Link>
            <figcaption>{highlight.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

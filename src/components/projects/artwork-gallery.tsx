import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import type { ProjectArtworkSection } from "@/data/projects/types";

export function ArtworkGallery({
  sections,
}: {
  sections: ProjectArtworkSection[];
}) {
  return (
    <div className="artwork-gallery">
      {sections.map((section, index) => (
        <section
          className="artwork-section"
          key={section.id}
          aria-labelledby={`artwork-${section.id}`}
        >
          <Reveal className="artwork-heading">
            <p className="eyebrow">
              {"// "}{String(index + 1).padStart(2, "0")} / Selected artwork
            </p>
            <h2 id={`artwork-${section.id}`}>{section.title}</h2>
            <p>{section.description}</p>
          </Reveal>
          <div className="artwork-grid">
            {section.items.map((item) => (
              <figure
                className={`project-artwork project-artwork--${item.layout ?? "standard"}`}
                key={item.image}
              >
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title} full size in a new tab`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes={
                      item.layout === "portrait"
                        ? "(max-width: 700px) 100vw, 520px"
                        : item.layout === "centered"
                          ? "(max-width: 700px) 100vw, 680px"
                          : item.layout === "wide"
                            ? "100vw"
                            : "(max-width: 700px) 100vw, 50vw"
                    }
                  />
                </a>
                <figcaption>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artwork-full-size"
                  >
                    View full size <span aria-hidden="true">↗</span>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccordionItem } from "@/components/ui/accordion-item";
import { ArrowLink } from "@/components/ui/arrow-button";
import { Reveal } from "@/components/motion/reveal";
import { gallery, projects } from "@/data/portfolio";
export function Projects() {
  const featured = projects[0];
  return (
    <section
      className="projects section-container"
      id="projects"
      aria-labelledby="projects-title"
    >
      <Reveal className="project-gallery">
        {gallery.map((item) => (
          <Link
            href={`/projects/${item.project.slug}`}
            className="project-thumbnail"
            key={item.image}
          >
            <span className="project-thumbnail-art">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 82vw, 32vw"
              />
            </span>
            <span className="project-thumbnail-title">{item.project.title}</span>
            <span className="project-thumbnail-category">{item.project.category}</span>
          </Link>
        ))}
      </Reveal>
      <SectionHeading
        id="projects-title"
        eyebrow="Featured Work"
        className="projects-heading"
        description={
          <>
            <p>
              Selected work in brand identity, packaging, Bengali label design,
              and advertising posters. Each project brings together typography,
              color, and imagery to tell a distinct visual story.
            </p>
            <ArrowLink href="#project-list">View All Projects</ArrowLink>
          </>
        }
      >
        SHOWCASING PROJECTS
        <br />
        THAT DEFINE MY
        <br />
        <em>DESIGN APPROACH</em>
      </SectionHeading>
      <div className="featured-project" id="project-list">
        <div className="project-description">
          <p className="project-category">{featured.category}</p>
          <p>{featured.summary}</p>
          <p className="content-note">
            {featured.focus.slice(0, 3).join(" · ")}
          </p>
          <ArrowLink href={`/projects/${featured.slug}`} appearance="outline">
            View Project
          </ArrowLink>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <AccordionItem
              key={project.slug}
              title={project.title}
              defaultOpen={index === 0}
              className="project-row"
            >
              <Link
                className="project-cover"
                href={`/projects/${project.slug}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(max-width: 700px) 90vw, 50vw"
                />
              </Link>
              <ArrowLink
                href={`/projects/${project.slug}`}
                appearance="outline"
              >
                Explore Project
              </ArrowLink>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

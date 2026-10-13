import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { projects } from "@/data/portfolio";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ArrowLink } from "@/components/ui/arrow-button";
import { ContactButton } from "@/components/ui/contact-button";
import { ArtworkGallery } from "@/components/projects/artwork-gallery";
import { SceneMotion } from "@/components/motion/scene-motion";
import { ProjectLoading } from "@/components/projects/project-loading";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.summary,
  };
}
export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

async function ProjectDetails({
  params,
}: Pick<PageProps<"/projects/[slug]">, "params">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const overview = project.overview ?? {
    label: "The Identity",
    title: "A MARK WITH",
    emphasis: "MEANING.",
  };
  return (
    <SceneMotion sceneId={slug}>
      <div className="case-nav">
        <Navigation />
      </div>
      <main className="case-study section-container" id="main-content">
        <Link href="/#projects" className="case-back">
          ← Back to selected work
        </Link>
        <p className="eyebrow">
          {"// "}{project.category} · Selected project
        </p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-focus">
          {project.focus.map((focus) => (
            <span key={focus}>{focus}</span>
          ))}
        </div>
        <div
          className={`case-image case-image--artwork ${project.coverLayout ? `case-image--${project.coverLayout}` : ""}`}
        >
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} cover full size in a new tab`}
          >
            <Image
              src={project.image}
              alt={project.alt}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="100vw"
              preload
            />
          </a>
        </div>
        <div className="case-details">
          <section>
            <p className="eyebrow">
              01 / {overview.label}
            </p>
            <h2>
              {overview.title}
              <br />
              <em>{overview.emphasis}</em>
            </h2>
            <p>{project.challenge}</p>
          </section>
          <section>
            <p className="eyebrow">02 / The Approach</p>
            <h2>
              CLARITY IN
              <br />
              <em>EVERY DECISION.</em>
            </h2>
            <p>{project.approach}</p>
          </section>
        </div>
        {project.artworkSections && (
          <ArtworkGallery sections={project.artworkSections} />
        )}
        <div className="case-actions">
          <ContactButton>Discuss a Similar Project</ContactButton>
          <ArrowLink href={`/projects/${next.slug}`} appearance="outline">
            Next Project
          </ArrowLink>
        </div>
      </main>
      <Footer />
    </SceneMotion>
  );
}

import Link from "next/link";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export function ProjectLoading() {
  return (
    <div className="project-shell">
      <div className="case-nav"><Navigation /></div>
      <main className="case-study project-loading section-container" id="main-content" aria-busy="true">
        <Link className="case-back" href="/#projects">← Back to selected work</Link>
        <p className="eyebrow">{"// "}Selected project</p>
        <h1>SELECTED WORK</h1>
        <p className="project-loading-status" role="status">Opening the project…</p>
        <div className="project-placeholder" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}

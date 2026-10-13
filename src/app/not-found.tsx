import { ArrowLink } from "@/components/ui/arrow-button";
export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <p className="eyebrow">404 / A little off the canvas</p>
      <h1>
        LET’S GET YOU
        <br />
        <em>BACK HOME.</em>
      </h1>
      <ArrowLink href="/">Back to the Portfolio</ArrowLink>
    </main>
  );
}

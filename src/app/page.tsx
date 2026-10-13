import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { SceneMotion } from "@/components/motion/scene-motion";

export default function Home() {
  return (
    <SceneMotion sceneId="home">
      <Hero />
      <main id="main-content">
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </SceneMotion>
  );
}

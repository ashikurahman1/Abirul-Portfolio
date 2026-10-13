import { ContactButton } from "@/components/ui/contact-button";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { ContactLinks } from "@/components/ui/contact-links";
export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <h2 id="contact-title">
          LET’S BUILD SOMETHING
          <br />
          EXTRAORDINARY TOGETHER
        </h2>
        <ContactButton>Work with Me</ContactButton>
        <ContactLinks />
      </Reveal>
      <Marquee />
    </section>
  );
}

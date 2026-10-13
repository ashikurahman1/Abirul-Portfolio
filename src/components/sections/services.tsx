import { SectionHeading } from "@/components/ui/section-heading";
import { AccordionItem } from "@/components/ui/accordion-item";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/data/portfolio";
export function Services() {
  return (
    <section
      className="services section-container"
      id="services"
      aria-labelledby="services-title"
    >
      <Reveal>
        <SectionHeading
          id="services-title"
          eyebrow="Core Skills & Creative Services"
          description={
            <p>
              From the first idea to the final artwork, I create a consistent
              visual language across branding, campaigns, packaging, and print.
              Typography, color, and composition turn your message into design
              that leaves a lasting impression.
            </p>
          }
        >
          <em>DESIGN EXPERTISE</em> TO
          <br />
          TRANSFORM IDEAS INTO
          <br />
          IMPACTFUL VISUALS
        </SectionHeading>
      </Reveal>
      <div className="service-list">
        {services.map((service, index) => (
          <AccordionItem
            key={service.id}
            title={service.title}
            number={String(index + 1).padStart(2, "0")}
            defaultOpen={index === 0}
            className="service"
          >
            <p>{service.description}</p>
            <span className="service-skills">{service.skills}</span>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}

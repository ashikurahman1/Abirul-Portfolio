import { khamarikoArtwork, khamarikoProject } from "./projects/khamariko";
import { nutrition360Artwork, nutrition360Project } from "./projects/nutrition-360";
import { krishokBariArtwork, krishokBariProject } from "./projects/krishok-bari";
import { ghorerBazarProject } from "./projects/ghorer-bazar";
import { mashrafiArtwork, mashrafiProject } from "./projects/mashrafi";
import { pushtiArtwork, pushtiProject } from "./projects/pushti";
import type { Project } from "./projects/types";
export type { Project } from "./projects/types";

export const portfolio = {
  name: "Abirul Islam",
  displayName: "ABIRUL",
  role: "Graphic Designer",
  description:
    "Abirul Islam is a graphic designer creating distinctive brand identities, packaging, campaign visuals, and print design.",
  email: "islamabirul170@gmail.com",
  phone: "01905096794",
  phoneHref: "tel:+8801905096794",
  facebook: "https://www.facebook.com/people/Graphixo/61582719271124",
  experience: {
    company: "Art Focus",
    role: "Graphic Designer",
    // Keep the supplied dates verbatim; their date format was not specified.
    dates: "02/01/2025 — 01/04/2026",
  },
  developer: {
    name: "Ashikur Rahman",
    linkedin: "https://www.linkedin.com/in/ashikur-dev/",
  },
  portrait: "/images/abirul-portrait.png",
  heroPortrait: "/images/abirul-hero-v2.png",
  // Set this to the supplied personal-branding poster once its local file is available.
  aboutPoster: "",
};
export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
export const principles = [
  "A Clear Visual Story",
  "Ideas before Decoration",
  "Consistency across Formats",
  "Every Detail Matters",
];
export const marqueeMessages = [
  { row: "one", text: "Distinctive Brands Begin With Thoughtful Graphic Design" },
  { row: "two", text: "Typography, Color & Composition Bring Your Story To Life" },
];
export const designHighlights = [
  {
    name: "Brand Identity",
    project: khamarikoProject,
    image: khamarikoArtwork.overview.image,
    alt: khamarikoArtwork.overview.alt,
  },
  {
    name: "Packaging Design",
    project: nutrition360Project,
    image: nutrition360Artwork.product.image,
    alt: nutrition360Artwork.product.alt,
  },
  {
    name: "Label Design",
    project: krishokBariProject,
    image: krishokBariArtwork.product.image,
    alt: krishokBariArtwork.product.alt,
  },
  {
    name: "Logo Design",
    project: mashrafiProject,
    image: mashrafiArtwork.variations.image,
    alt: mashrafiArtwork.variations.alt,
  },
  {
    name: "Campaign Posters",
    project: pushtiProject,
    image: pushtiArtwork.teaGarden.image,
    alt: pushtiArtwork.teaGarden.alt,
  },
];
export const services = [
  {
    id: "brand-identity",
    title: "BRAND IDENTITY",
    description:
      "Building a distinctive visual language for your brand, from the logo and typography to the color palette and guidelines. Every element works together to make your brand recognizable wherever it appears.",
    skills: "Logo design · Visual identity · Brand guidelines",
  },
  {
    id: "social-campaign",
    title: "SOCIAL MEDIA DESIGN",
    description:
      "Creating campaign visuals that make a clear statement. Cohesive social posts, advertising graphics, and promotional layouts bring your message to life across channels.",
    skills: "Social graphics · Advertising · Campaign art direction",
  },
  {
    id: "packaging",
    title: "PACKAGING DESIGN",
    description:
      "Designing packaging and labels that tell your brand story on the shelf. Considered typography, color, and composition balance personality with clear product information.",
    skills: "Packaging · Label design · Print artwork",
  },
  {
    id: "print-editorial",
    title: "PRINT & EDITORIAL",
    description:
      "Bringing stories to the page through expressive typography and thoughtful layouts. From posters and brochures to publications, every piece combines visual impact with comfortable reading.",
    skills: "Poster design · Publication layout · Print preparation",
  },
];
export const projects: Project[] = [
  khamarikoProject,
  nutrition360Project,
  krishokBariProject,
  ghorerBazarProject,
  mashrafiProject,
  pushtiProject,
];
export const gallery = projects.map((project) => ({
  project,
  image: project.image,
  alt: project.alt,
}));

import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/logos/Fineman/${encodeURIComponent(filename)}`;
}

export const finemanArtwork = {
  lockup: {
    image: asset("fineman-logo-lockup.png"),
    alt: "Fineman Lifestyle Brand logo lockup on deep burgundy background with geometric diamond star emblem",
    title: "Fineman / Brand lockup",
    caption:
      "The geometric diamond star emblem and custom typography presented on the signature deep burgundy background.",
    width: 1024,
    height: 635,
  },
  ecommerceUi: {
    image: asset("fineman-ecommerce-ui.png"),
    alt: "Fineman Lifestyle Brand e-commerce website design showcasing men's and women's apparel collections and new arrivals",
    title: "Digital storefront & e-commerce experience",
    caption:
      "A complete online shopping interface highlighting category lookbooks, new arrivals, and key brand pillars.",
    width: 1024,
    height: 682,
    layout: "wide",
  },
  collateral: {
    image: asset("fineman-brand-collateral.jpg"),
    alt: "Fineman brand packaging and apparel collateral including rigid boxes, shopping bags, clothing hangtags, and hoodies",
    title: "Brand collateral, packaging & apparel",
    caption:
      "Premium packaging suite including rigid apparel boxes, luxury shopping bags, hangtags, woven labels, and embroidered streetwear.",
    width: 1024,
    height: 682,
    layout: "wide",
  },
} satisfies Record<string, ProjectArtwork>;

export const finemanProject: Project = {
  slug: "fineman",
  title: "FINEMAN",
  category: "Logo & Brand Identity / Premium Lifestyle Apparel",
  image: finemanArtwork.lockup.image,
  alt: finemanArtwork.lockup.alt,
  imageWidth: finemanArtwork.lockup.width,
  imageHeight: finemanArtwork.lockup.height,
  summary:
    "A luxury visual identity and digital commerce experience for Fineman, a modern lifestyle and premium apparel brand. Featuring a sharp diamond star emblem with swooping architectural curves, the brand pairs rich deep burgundy and warm champagne tones to project modern sophistication across apparel, packaging, and e-commerce.",
  overview: {
    label: "The Brand Direction",
    title: "ELEVATE YOUR",
    emphasis: "EVERYDAY STYLE.",
  },
  challenge:
    "Design a distinguished lifestyle brand identity that feels both contemporary and enduring. The emblem needed to work as a subtle metal badge, woven label, and chest embroidery on garments, while communicating premium craftsmanship across packaging boxes, shopping bags, and a complete online retail store.",
  approach:
    "Construct a symmetrical diamond star monogram encased by fluid, tapered silhouettes, balanced with bespoke modern lettering. Deep burgundy anchors the primary brand palette with champagne beige for warmth and elegance. The identity scales from high-end apparel packaging (rigid boxes, debossed hangtags, luxury paper bags) to a responsive e-commerce storefront.",
  focus: ["Logo design", "Visual identity", "Fashion branding", "Packaging & E-commerce"],
  artworkSections: [
    {
      id: "ecommerce",
      title: "E-COMMERCE & DIGITAL STOREFRONT",
      description:
        "The digital brand experience: clean responsive navigation, seasonal lookbooks, and multi-category lifestyle shopping.",
      items: [finemanArtwork.ecommerceUi],
    },
    {
      id: "packaging",
      title: "PACKAGING & BRAND COLLATERAL",
      description:
        "Comprehensive collateral suite spanning rigid gift boxes, woven labels, apparel embroidery, shopping bags, and luxury business cards.",
      items: [finemanArtwork.collateral],
    },
  ],
};

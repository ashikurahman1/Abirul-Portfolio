import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/images/Nutrition-360/${encodeURIComponent(filename)}`;
}

export const nutrition360Artwork = {
  product: {
    image: asset("WhatsApp Image 2026-10-13 at 12.08.37 AM (1).jpeg"),
    alt: "Nutrition 360 Mass Fuel jar mockup with a red, black, and silver label against a gym background",
    title: "Mass Fuel / Packaging mockup",
    caption: "The wraparound label applied to a black jar, showing the front design and side information panel.",
    width: 1172,
    height: 672,
  },
  label: {
    image: asset("WhatsApp Image 2026-10-13 at 12.08.35 AM.jpeg"),
    alt: "Complete Nutrition 360 Mass Fuel wraparound label with fitness photography, bold product lettering, information panels, and a barcode",
    title: "The complete wraparound label",
    caption: "Red accents, metallic lettering, and fitness photography connect the front panel with the product information across the full label.",
    width: 1280,
    height: 572,
    layout: "wide",
  },
  promotion: {
    image: asset("WhatsApp Image 2026-10-13 at 12.08.37 AM.jpeg"),
    alt: "Nutrition 360 product advertisement featuring a Mass Fuel jar, shaker, weights, and a bold headline on a dark red background",
    title: "Product-led campaign visual",
    caption: "The jar takes center stage, supported by training accessories, a bold headline, and a contrasting call to action.",
    width: 892,
    height: 672,
  },
  social: {
    image: asset("WhatsApp Image 2026-10-13 at 12.08.36 AM.jpeg"),
    alt: "Square Nutrition 360 exercise campaign artwork with an athlete in a gym, the product jar, and oversized purple headline typography",
    title: "Exercise-led social artwork",
    caption: "A square campaign composition combines an athlete, gym imagery, the product, and oversized typography.",
    width: 1600,
    height: 1600,
  },
} satisfies Record<string, ProjectArtwork>;

export const nutrition360Project: Project = {
  slug: "nutrition-360",
  title: "NUTRITION 360",
  category: "Packaging & Campaign Design / Sports Nutrition",
  image: nutrition360Artwork.product.image,
  alt: nutrition360Artwork.product.alt,
  imageWidth: nutrition360Artwork.product.width,
  imageHeight: nutrition360Artwork.product.height,
  summary:
    "Packaging and campaign artwork for Nutrition 360’s Mass Fuel. A red, black, and metallic label carries a bold fitness aesthetic from the product jar into promotional and social media visuals.",
  overview: {
    label: "The Visual Direction",
    title: "BUILT FOR",
    emphasis: "VISUAL IMPACT.",
  },
  challenge:
    "The wraparound composition balances prominent product lettering and fitness imagery with supporting information panels. The campaign layouts carry the product into different formats while keeping the jar recognizable.",
  approach:
    "The label uses a dark foundation, red accents, and metallic typography. A jar mockup shows the packaging in context; the campaign artwork pairs it with training imagery, contrasting headlines, and strong focal points.",
  focus: ["Packaging design", "Label design", "Campaign graphics", "Social media design"],
  artworkSections: [
    {
      id: "packaging",
      title: "THE PACKAGING, UNWRAPPED",
      description: "The complete label shown flat, with every panel visible in its original proportions.",
      items: [nutrition360Artwork.label],
    },
    {
      id: "campaign",
      title: "FROM PRODUCT TO CAMPAIGN",
      description: "Two advertising compositions extend the packaging into product-led and exercise-led visuals.",
      items: [nutrition360Artwork.promotion, nutrition360Artwork.social],
    },
  ],
};

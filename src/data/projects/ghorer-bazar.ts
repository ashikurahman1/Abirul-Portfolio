import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/images/posters/Ghorerbazar/${encodeURIComponent(filename)}`;
}

export const ghorerBazarArtwork = {
  honey: {
    image: asset("WhatsApp Image 2026-10-13 at 12.13.32 AM.jpeg"),
    alt: "Ghorer Bazar honey poster with a honey bottle, honeycomb, bees, Bengali headline, and a warm golden landscape",
    title: "Honey / A golden visual story",
    caption: "Golden light, honeycomb, and a prominent product bottle build a warm composition around the Bengali headline.",
    width: 1080,
    height: 1080,
  },
  gheeNature: {
    image: asset("WhatsApp Image 2026-10-13 at 12.13.32 AM (1).jpeg"),
    alt: "Ghorer Bazar ghee poster showing a product tin on a green leaf above flowing water with Bengali typography",
    title: "Ghee / A natural setting",
    caption: "The product sits on a green leaf over flowing water, with generous space for the Bengali message.",
    width: 1080,
    height: 1080,
  },
  gheeKitchen: {
    image: asset("WhatsApp Image 2026-10-13 at 12.13.33 AM.jpeg"),
    alt: "Ghorer Bazar ghee poster with a product tin, bowls of ghee, Bengali headline, and orange kitchen setting",
    title: "Ghee / An everyday kitchen story",
    caption: "A warm kitchen scene connects the product with food styling, expressive typography, and a clear ordering footer.",
    width: 1080,
    height: 1080,
  },
  mustardOil: {
    image: asset("WhatsApp Image 2026-10-13 at 12.13.33 AM (1).jpeg"),
    alt: "Ghorer Bazar mustard-oil poster featuring a bottle, mustard seeds and flowers, a spoon pouring oil, and Bengali lettering",
    title: "Mustard oil / Familiar flavor",
    caption: "Mustard seeds, flowers, and a pouring detail surround the bottle, extending the warm visual language to another product.",
    width: 1080,
    height: 1080,
    layout: "centered",
  },
} satisfies Record<string, ProjectArtwork>;

export const ghorerBazarProject: Project = {
  slug: "ghorer-bazar",
  title: "GHORER BAZAR",
  category: "Product Posters / Food & Retail",
  image: ghorerBazarArtwork.honey.image,
  alt: ghorerBazarArtwork.honey.alt,
  imageWidth: 1080,
  imageHeight: 1080,
  coverLayout: "square",
  summary:
    "Four Bengali product posters for ঘরের বাজার, featuring honey, ghee, and mustard oil. Expressive headlines, carefully composed product imagery, and warm settings give each product a distinct visual story.",
  overview: {
    label: "The Campaign Direction",
    title: "EVERY PRODUCT,",
    emphasis: "ITS OWN STORY.",
  },
  challenge:
    "Give three everyday food products their own focal point while keeping the brand recognizable across the series. Each composition brings together the product, Bengali messaging, supporting ingredients, and an ordering footer.",
  approach:
    "Warm gold and orange tones connect the honey, kitchen-ghee, and mustard-oil posters. A green leaf and flowing-water setting give the second ghee visual a different mood, while the brand mark and product-led hierarchy tie the four pieces together.",
  focus: ["Poster design", "Product composition", "Bengali typography", "Campaign graphics"],
  artworkSections: [
    {
      id: "ghee",
      title: "ONE PRODUCT, TWO SETTINGS",
      description: "Two ghee compositions explore a natural setting and a familiar kitchen scene.",
      items: [ghorerBazarArtwork.gheeNature, ghorerBazarArtwork.gheeKitchen],
    },
    {
      id: "mustard-oil",
      title: "A FAMILIAR FLAVOR, IN FRAME",
      description: "The mustard-oil poster continues the series through ingredient details and a warm product composition.",
      items: [ghorerBazarArtwork.mustardOil],
    },
  ],
};

import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/images/posters/Pushti/${encodeURIComponent(filename)}`;
}

export const pushtiArtwork = {
  teaGarden: {
    image: asset("WhatsApp Image 2026-10-13 at 12.15.41 AM.jpeg"),
    alt: "Pushti Family Blend tea poster with a red and yellow tea pack, cup, tea garden, and bold Bengali headline",
    title: "Tea garden / The product at the center",
    caption: "The tea pack, cup, and garden imagery sit beneath expressive Bengali typography in a portrait composition.",
    width: 1356,
    height: 1600,
  },
  character: {
    image: asset("WhatsApp Image 2026-10-13 at 12.15.39 AM.jpeg"),
    alt: "A playful Pushti tea poster with a personified red tea pack carrying a basket and tea leaves in a green tea garden",
    title: "A playful product character",
    caption: "Hands, boots, a basket, and a tea sprig give the pack a character of its own within the garden setting.",
    width: 1356,
    height: 1600,
  },
  lifestyle: {
    image: asset("WhatsApp Image 2026-10-13 at 12.15.41 AM (1).jpeg"),
    alt: "Pushti tea campaign poster featuring a woman in a red and white sari presenting the tea pack with Bengali lettering and a bright garden background",
    title: "An everyday tea story",
    caption: "A person-led composition adds an everyday connection, keeping the pack prominent and the campaign colors consistent.",
    width: 1356,
    height: 1600,
  },
} satisfies Record<string, ProjectArtwork>;

export const pushtiProject: Project = {
  slug: "pushti",
  title: "PUSHTI",
  category: "Advertising Posters / Tea",
  image: pushtiArtwork.teaGarden.image,
  alt: pushtiArtwork.teaGarden.alt,
  imageWidth: 1356,
  imageHeight: 1600,
  coverLayout: "portrait",
  summary:
    "Three advertising posters for Pushti Family Blend tea. Bold Bengali typography, the recognizable red-and-yellow pack, and tea-garden imagery connect product, playful character, and everyday storytelling across the series.",
  overview: {
    label: "The Poster Direction",
    title: "A DAILY MOMENT,",
    emphasis: "BROUGHT TO LIFE.",
  },
  challenge:
    "Keep the tea pack recognizable while giving each poster a different focal point. The three compositions balance the product, Bengali headline, supporting imagery, and a consistent call-to-action strip.",
  approach:
    "Red and yellow from the pack anchor the series against fresh green garden settings. One poster focuses on the product, another turns the pack into a playful character, and the third introduces a person-led tea story.",
  focus: ["Advertising design", "Bengali typography", "Image composition", "Campaign posters"],
  artworkSections: [
    {
      id: "posters",
      title: "ONE PRODUCT, DIFFERENT STORIES",
      description: "The playful and person-led posters extend the product-centered cover into two distinct compositions.",
      items: [pushtiArtwork.character, pushtiArtwork.lifestyle],
    },
  ],
};

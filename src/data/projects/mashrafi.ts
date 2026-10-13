import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/logos/Mashrafi/${encodeURIComponent(filename)}`;
}

export const mashrafiArtwork = {
  variations: {
    image: asset("WhatsApp Image 2026-10-13 at 12.10.55 AM (1).jpeg"),
    alt: "Mashrafi Furniture logo in four color combinations, with an M-shaped sofa symbol and serif wordmark",
    title: "Mashrafi Furniture / Logo variations",
    caption: "The sofa-shaped M and serif wordmark presented across four background and color combinations.",
    width: 2048,
    height: 1241,
  },
  identity: {
    image: asset("WhatsApp Image 2026-10-13 at 12.10.55 AM.jpeg"),
    alt: "Mashrafi Furniture identity board showing the logo, wordmark, peach and deep-green color palette, sofa and M symbol explanation, and application mockups",
    title: "The mark, palette, and visual identity",
    caption: "The presentation explains how the letter M combines with a sofa silhouette, alongside the wordmark, palette, and supporting applications.",
    width: 1137,
    height: 2048,
    layout: "portrait",
  },
  cushion: {
    image: asset("WhatsApp Image 2026-10-13 at 12.10.56 AM (1).jpeg"),
    alt: "Mashrafi Furniture logo and wordmark applied to a cream cushion on a gray sofa",
    title: "Soft furnishings",
    caption: "A cushion mockup places the identity directly within a furniture setting.",
    width: 1152,
    height: 896,
  },
  wood: {
    image: asset("WhatsApp Image 2026-10-13 at 12.10.56 AM (2).jpeg"),
    alt: "Mashrafi Furniture sofa monogram and serif wordmark engraved into a wooden panel",
    title: "A material-led application",
    caption: "A wooden-panel mockup shows how the mark and wordmark translate to a textured physical surface.",
    width: 1152,
    height: 896,
  },
  tote: {
    image: asset("WhatsApp Image 2026-10-13 at 12.10.56 AM.jpeg"),
    alt: "A cream tote-bag mockup with the Mashrafi Furniture logo against a deep-green interior",
    title: "Branded tote bag",
    caption: "A cream tote and deep-green setting bring the logo and palette together in a portable application.",
    width: 673,
    height: 1024,
    layout: "portrait",
  },
} satisfies Record<string, ProjectArtwork>;

export const mashrafiProject: Project = {
  slug: "mashrafi",
  title: "MASHRAFI FURNITURE",
  category: "Logo & Visual Identity / Furniture",
  image: mashrafiArtwork.variations.image,
  alt: mashrafiArtwork.variations.alt,
  imageWidth: mashrafiArtwork.variations.width,
  imageHeight: mashrafiArtwork.variations.height,
  summary:
    "A visual identity for Mashrafi Furniture, built around an M-shaped sofa symbol and an elegant serif wordmark. Deep green, peach, and muted neutral tones carry the identity into fabric, wood, and tote-bag mockups.",
  overview: {
    label: "The Logo Direction",
    title: "A LETTER WITH",
    emphasis: "A SENSE OF HOME.",
  },
  challenge:
    "Connect the Mashrafi name with its furniture business through a compact, recognizable symbol. The paired arches form the letter M while the lower frame and feet suggest a sofa.",
  approach:
    "Pair the curved sofa monogram with a serif wordmark and spaced supporting typography. Color variations demonstrate the identity across backgrounds, while cushion, wood, and tote-bag mockups explore how it appears on different materials.",
  focus: ["Logo design", "Visual identity", "Color palette", "Brand applications"],
  artworkSections: [
    {
      id: "identity",
      title: "THE MARK & ITS FOUNDATIONS",
      description: "The complete identity presentation, including the symbol construction and color palette.",
      items: [mashrafiArtwork.identity],
    },
    {
      id: "applications",
      title: "FROM MARK TO MATERIAL",
      description: "Application mockups explore the identity on soft furnishings, wood, and a tote bag.",
      items: [mashrafiArtwork.cushion, mashrafiArtwork.wood, mashrafiArtwork.tote],
    },
  ],
};

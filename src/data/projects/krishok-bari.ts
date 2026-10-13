import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/images/label-design/KrishokBari/${encodeURIComponent(filename)}`;
}

export const krishokBariArtwork = {
  product: {
    image: asset("WhatsApp Image 2026-10-13 at 12.09.09 AM.jpeg"),
    alt: "Krishok Bari কৃষক বাড়ি date-palm jaggery jar mockup with a cream and burgundy Bengali label on a wooden surface",
    title: "Krishok Bari / Label application",
    caption:
      "The label applied to a glass jar, with the Bengali brand mark, product name, and date-palm imagery clearly visible.",
    width: 1040,
    height: 672,
  },
  label: {
    image: asset("WhatsApp Image 2026-10-13 at 12.09.08 AM (1).jpeg"),
    alt: "Complete Krishok Bari Bengali jaggery label with a cream ornamental background, burgundy panels, palm trees, dates, storage information, and a QR code",
    title: "The complete Bengali label",
    caption:
      "The full wraparound composition brings the product story, storage instructions, producer details, QR code, and weight information together around the central brand panel.",
    width: 1728,
    height: 729,
    layout: "wide",
  },
  landscape: {
    image: asset("WhatsApp Image 2026-10-13 at 12.09.08 AM.jpeg"),
    alt: "Landscape Krishok Bari promotional artwork showing a labelled jaggery jar beside a date-palm grove and a farmer carrying collection pots",
    title: "A story of place",
    caption:
      "A landscape promotional composition places the jar within a palm grove, pairing rural imagery with a prominent Bengali headline.",
    width: 1536,
    height: 672,
  },
  promotion: {
    image: asset("WhatsApp Image 2026-10-13 at 12.09.09 AM (1).jpeg"),
    alt: "Krishok Bari promotional artwork with an open jaggery jar, Bengali brand messaging, and a farmer in a warm palm-grove background",
    title: "The product, up close",
    caption:
      "A closer jar presentation carries the same warm palette, rural setting, and Bengali visual identity into a more compact promotional format.",
    width: 748,
    height: 672,
  },
} satisfies Record<string, ProjectArtwork>;

export const krishokBariProject: Project = {
  slug: "krishok-bari",
  title: "KRISHOK BARI",
  category: "Label & Packaging Design / Date-Palm Jaggery",
  image: krishokBariArtwork.product.image,
  alt: krishokBariArtwork.product.alt,
  imageWidth: krishokBariArtwork.product.width,
  imageHeight: krishokBariArtwork.product.height,
  summary:
    "A Bengali label design for কৃষক বাড়ি’s date-palm jaggery. Warm cream, burgundy, and botanical imagery give the packaging a familiar rural character, carried through a jar mockup and promotional artwork.",
  overview: {
    label: "The Label Direction",
    title: "ROOTED IN",
    emphasis: "A VISUAL STORY.",
  },
  challenge:
    "The label brings a Bengali product story and practical packaging information into one wraparound layout. The central brand and product panel sits between the story and storage guidance on one side and producer details and a QR code on the other.",
  approach:
    "A cream ornamental background and burgundy accents frame the Bengali typography. Date palms and dates give the central panel its character, while glass-jar mockups and palm-grove imagery carry that visual story into the promotional compositions.",
  focus: ["Label design", "Bengali typography", "Packaging graphics", "Promotional artwork"],
  artworkSections: [
    {
      id: "label",
      title: "THE LABEL, PANEL BY PANEL",
      description:
        "The complete wraparound artwork, with the central product panel and both information panels visible at their original proportions.",
      items: [krishokBariArtwork.label],
    },
    {
      id: "promotion",
      title: "THE STORY BEYOND THE JAR",
      description:
        "Two promotional layouts connect the packaged product with the palm-grove setting and Bengali brand messaging.",
      items: [krishokBariArtwork.landscape, krishokBariArtwork.promotion],
    },
  ],
};

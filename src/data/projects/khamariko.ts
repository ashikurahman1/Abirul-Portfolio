import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/logos/Khamariko/${encodeURIComponent(filename)}`;
}

export const khamarikoArtwork = {
  overview: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.39 AM.jpeg"),
    alt: "Khamariko’s Bengali wordmark and red rooster monogram presented on a tablet",
    title: "Khamariko / Brand identity",
    caption: "The Bengali wordmark and poultry symbol presented together.",
    width: 2048,
    height: 1230,
  },
  meaning: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.36 AM.jpeg"),
    alt: "Logo analysis explaining how the Bengali letter খ combines with a rooster silhouette",
    title: "The meaning behind the mark",
    caption: "The Bengali letter খ, taken from খামারিকো, meets a rooster silhouette to express the poultry business.",
    width: 2048,
    height: 2048,
  },
  symbol: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.36 AM (1).jpeg"),
    alt: "A red Khamariko logo symbol alongside a close-up of a white rooster",
    title: "A symbol rooted in poultry",
    caption: "A recognizable rooster form connects the identity with the brand’s field of work.",
    width: 1600,
    height: 1600,
  },
  campaign: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.37 AM.jpeg"),
    alt: "Khamariko promotional artwork with chicks, a green background, and Bengali messaging",
    title: "Campaign graphic",
    caption: "Bengali messaging and poultry imagery carry the identity into a promotional layout.",
    width: 2048,
    height: 1152,
  },
  standee: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.38 AM (1).jpeg"),
    alt: "A Khamariko roll-up banner mockup displaying the logo, Bengali service information, and chicks",
    title: "Roll-up banner",
    caption: "The logo, service information, and campaign imagery adapted to a vertical display.",
    width: 1600,
    height: 960,
  },
  truck: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.38 AM (2).jpeg"),
    alt: "Khamariko vehicle branding mockup on a delivery truck, featuring the logo, chicken, and eggs",
    title: "Vehicle branding",
    caption: "A large-format application showing the identity and promotional artwork on a delivery vehicle.",
    width: 2048,
    height: 1148,
    layout: "wide",
  },
  poster: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.38 AM.jpeg"),
    alt: "A hanging Khamariko poster mockup with the brand logo, eggs, poultry photography, and Bengali copy",
    title: "Promotional print",
    caption: "A hanging poster brings the wordmark, poultry imagery, and service details into print.",
    width: 2048,
    height: 1543,
  },
  packaging: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.39 AM (1).jpeg"),
    alt: "A tissue box mockup carrying Khamariko’s Bengali wordmark and red poultry symbol",
    title: "Branded collateral",
    caption: "The identity applied to a tissue-box mockup to demonstrate a smaller physical format.",
    width: 2048,
    height: 1170,
  },
  delivery: {
    image: asset("WhatsApp Image 2026-10-13 at 12.06.37 AM (1).jpeg"),
    alt: "A cycle delivery rider carrying a bag with Khamariko’s logo and Bengali wordmark",
    title: "Delivery bag",
    caption: "The combined logo and wordmark remain visible on a delivery-bag mockup.",
    width: 1519,
    height: 2048,
    layout: "portrait",
  },
} satisfies Record<string, ProjectArtwork>;

export const khamarikoProject: Project = {
  slug: "khamariko",
  title: "KHAMARIKO",
  category: "Brand Identity / Poultry Services",
  image: khamarikoArtwork.overview.image,
  alt: khamarikoArtwork.overview.alt,
  imageWidth: khamarikoArtwork.overview.width,
  imageHeight: khamarikoArtwork.overview.height,
  summary: "A Bengali visual identity for Khamariko Poultry Services, built around the letter খ and a rooster silhouette. The identity extends across campaign graphics, promotional print, and brand application mockups.",
  challenge: "The mark connects the brand’s name with its poultry business. Combining the Bengali letter খ with a rooster creates a symbol that can sit beside the full wordmark or appear on its own.",
  approach: "The red logo and Bengali wordmark anchor the presentation. Poultry photography and green campaign backgrounds extend the visual language across banners, print materials, a vehicle, and a delivery bag.",
  focus: ["Logo design", "Bengali wordmark", "Campaign graphics", "Brand applications"],
  artworkSections: [
    {
      id: "logo",
      title: "THE MARK & ITS MEANING",
      description: "A name and a field of work, brought together in one symbol.",
      items: [khamarikoArtwork.meaning, khamarikoArtwork.symbol],
    },
    {
      id: "campaign",
      title: "CAMPAIGN & COMMUNICATION",
      description: "The identity carried into Bengali promotional graphics and display formats.",
      items: [khamarikoArtwork.campaign, khamarikoArtwork.standee],
    },
    {
      id: "applications",
      title: "THE IDENTITY IN CONTEXT",
      description: "Application mockups show how the brand appears across different scales and materials.",
      items: [khamarikoArtwork.truck, khamarikoArtwork.poster, khamarikoArtwork.packaging, khamarikoArtwork.delivery],
    },
  ],
};

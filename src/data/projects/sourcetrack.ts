import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/logos/SourceTrack/${encodeURIComponent(filename)}`;
}

export const sourcetrackArtwork = {
  variations: {
    image: asset("sourcetrack-logo-variations.png"),
    alt: "SourceTrack logo variations in dark and light modes alongside the circular app icon and wordmark",
    title: "SourceTrack / Logo & icon variations",
    caption:
      "The stylized S monogram and modern wordmark presented across dark and light backgrounds with the circular app icon.",
    width: 1024,
    height: 449,
    layout: "wide",
  },
  concept: {
    image: asset("sourcetrack-symbol-concept.png"),
    alt: "SourceTrack logo concept breakdown explaining the S shape, multiple sources, connected flow, and one clear result",
    title: "The S Shape / Symbol concept & journey",
    caption:
      "The S shape represents data flow, customer journeys, and the connection between multiple sources and one clear outcome.",
    width: 1024,
    height: 1024,
  },
  horizontal: {
    image: asset("sourcetrack-horizontal.png"),
    alt: "SourceTrack horizontal logo lockup with circular monogram icon and wordmark on a clean white background",
    title: "Primary horizontal lockup",
    caption:
      "The circular monogram mark and modern wordmark combined on a clean background with the signature green focal point.",
    width: 1024,
    height: 593,
  },
  softwareUi: {
    image: asset("sourcetrack-software-ui.png"),
    alt: "SourceTrack software analytics dashboard interface, mobile app icon on smartphone screen, and website browser mockup",
    title: "Software application & digital touchpoints",
    caption:
      "The brand identity applied across the SaaS marketing dashboard, smartphone application icon, and website browser favicon.",
    width: 1024,
    height: 935,
    layout: "wide",
  },
  collateral: {
    image: asset("sourcetrack-brand-collateral.jpg"),
    alt: "SourceTrack brand collateral mockup showing branded T-shirt, social media post, marketing poster, business cards, and laptop",
    title: "Brand identity & marketing collateral",
    caption:
      "The identity extended across branded apparel, social media profile and campaign post, digital marketing poster, and business cards.",
    width: 1024,
    height: 1024,
    layout: "wide",
  },
} satisfies Record<string, ProjectArtwork>;

export const sourcetrackProject: Project = {
  slug: "sourcetrack",
  title: "SOURCETRACK",
  category: "Logo & Brand Identity / SaaS Analytics",
  image: sourcetrackArtwork.variations.image,
  alt: sourcetrackArtwork.variations.alt,
  imageWidth: sourcetrackArtwork.variations.width,
  imageHeight: sourcetrackArtwork.variations.height,
  summary:
    "A visual identity and digital product branding for SourceTrack, an all-in-one marketing analytics and attribution platform. Built around a dynamic S-shaped monogram and vibrant lime green accents, the system unifies multi-channel data sources into a clear journey across dashboard software, mobile apps, marketing posters, and brand collateral.",
  overview: {
    label: "The Identity Direction",
    title: "FROM MULTIPLE SOURCES TO",
    emphasis: "ONE CLEAR OUTCOME.",
  },
  challenge:
    "Translate complex multi-channel data tracking—spanning Google Ads, Meta, TikTok, and YouTube—into a unified, intuitive visual mark. The identity needed to feel sleek and data-driven while remaining immediately recognizable across mobile app icons, software interfaces, social feeds, and physical collateral.",
  approach:
    "Design an S monogram that visually maps data flowing from distinct source bars into a single, high-impact focal point accented with bright chartreuse. High-contrast dark backgrounds anchor the digital product experience, while clean horizontal lockups, iOS app icons, digital campaign graphics, business cards, and branded apparel extend the identity into every brand touchpoint.",
  focus: ["Logo design", "Visual identity", "Product UI design", "Brand applications"],
  artworkSections: [
    {
      id: "concept",
      title: "THE S SHAPE & CONCEPT",
      description:
        "A simple letter representing a powerful data journey from multiple sources to conversion.",
      items: [sourcetrackArtwork.concept, sourcetrackArtwork.horizontal],
    },
    {
      id: "software",
      title: "SOFTWARE & DIGITAL PRODUCT",
      description:
        "The visual language translated into the SaaS analytics dashboard, mobile application icon, and web browser touchpoints.",
      items: [sourcetrackArtwork.softwareUi],
    },
    {
      id: "collateral",
      title: "BRAND IDENTITY IN CONTEXT",
      description:
        "Extending the brand across physical collateral, social media communication, digital marketing materials, and apparel.",
      items: [sourcetrackArtwork.collateral],
    },
  ],
};

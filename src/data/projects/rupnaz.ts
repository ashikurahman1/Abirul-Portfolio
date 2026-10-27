import type { Project, ProjectArtwork } from "./types";

function asset(filename: string) {
  return `/logos/Rupnaz/${encodeURIComponent(filename)}`;
}

export const rupnazArtwork = {
  bengaliWordmark: {
    image: asset("rupnaz-bengali-wordmark.png"),
    alt: "Rupnaz Bengali wordmark রূপনাজ and purple circular rose-inspired emblem with tagline রূপে নাজ, দামে স্বস্তি",
    title: "Rupnaz / Bengali wordmark & emblem",
    caption:
      "The primary Bengali wordmark accompanied by the circular floral monogram and tagline 'রূপে নাজ, দামে স্বস্তি'.",
    width: 1024,
    height: 684,
  },
  meaning: {
    image: asset("rupnaz-logo-meaning.png"),
    alt: "Rupnaz logo meaning presentation explaining the R letterform, floral rose motif, and flowing fabric drape curves",
    title: "The meaning behind the mark",
    caption:
      "The mark weaves together the letter R, a blooming rose element, and sweeping curves that evoke fluid fabric drape.",
    width: 1024,
    height: 697,
  },
  englishLockup: {
    image: asset("rupnaz-english-lockup.png"),
    alt: "Rupnaz English logo lockup with serif typography, floral monogram, and tagline Grace in every look",
    title: "English brand lockup",
    caption:
      "The circular emblem paired with high-contrast fashion typography and the tagline 'Grace in every look'.",
    width: 1024,
    height: 697,
  },
  appIcon: {
    image: asset("rupnaz-app-icon.jpg"),
    alt: "Rupnaz purple mobile application icon on smartphone home screen",
    title: "Mobile application icon",
    caption:
      "The plum and white floral monogram adapted to a clean iOS app icon on a mobile home screen.",
    width: 1024,
    height: 1024,
    layout: "portrait",
  },
  ecommerceUi: {
    image: asset("rupnaz-ecommerce-ui.png"),
    alt: "Rupnaz e-commerce website design for women and kids fashion, featuring category collections and branded clothing hangtag",
    title: "E-commerce storefront & apparel packaging",
    caption:
      "A complete online retail experience for women and kids fashion, accompanied by branded apparel hangtags.",
    width: 1024,
    height: 682,
    layout: "wide",
  },
} satisfies Record<string, ProjectArtwork>;

export const rupnazProject: Project = {
  slug: "rupnaz",
  title: "RUPNAZ",
  category: "Logo & Brand Identity / Women & Kids Fashion",
  image: rupnazArtwork.bengaliWordmark.image,
  alt: rupnazArtwork.bengaliWordmark.alt,
  imageWidth: rupnazArtwork.bengaliWordmark.width,
  imageHeight: rupnazArtwork.bengaliWordmark.height,
  summary:
    "A visual identity and e-commerce brand experience for Rupnaz (রূপনাজ), a premium women and kids fashion brand. Built around a circular emblem combining the letter R with a blooming rose motif and fabric drape curves, the identity carries traditional grace and modern fashion aesthetics across dual-language typography, mobile apps, and digital commerce.",
  overview: {
    label: "The Fashion Direction",
    title: "GRACE IN",
    emphasis: "EVERY LOOK.",
  },
  challenge:
    "Create an elegant fashion identity that bridges Bengali and English brand representations while capturing the delicate charm of women’s and children’s apparel. The mark needed to convey the graceful drape of a saree and feminine softness, yet remain bold and recognizable as a smartphone app icon and product label.",
  approach:
    "Craft a circular monogram where the letter R blooms into a stylized rose and delicate leaves, with flowing curves reminiscent of draped fabric. A regal deep plum and soft lilac palette provides warmth and luxury. The system extends into dual-language typography (Bengali ‘রূপনাজ’ and English ‘Rupnaz’), iOS application icons, e-commerce storefronts, and branded apparel hangtags.",
  focus: ["Logo design", "Bengali wordmark", "Fashion branding", "E-commerce UI"],
  artworkSections: [
    {
      id: "meaning",
      title: "THE EMBLEM & ITS MEANING",
      description:
        "Anatomy of the mark: combining the initial R with a blooming rose, delicate foliage, and flowing fabric curves.",
      items: [rupnazArtwork.meaning, rupnazArtwork.englishLockup],
    },
    {
      id: "digital",
      title: "DIGITAL APPS & E-COMMERCE",
      description:
        "The visual language translated into the mobile application icon and the complete multi-category online shopping experience.",
      items: [rupnazArtwork.appIcon, rupnazArtwork.ecommerceUi],
    },
  ],
};

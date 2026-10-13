export type ProjectArtwork = {
  image: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  layout?: "wide" | "portrait" | "centered";
};

export type ProjectArtworkSection = {
  id: string;
  title: string;
  description: string;
  items: ProjectArtwork[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  coverLayout?: "square" | "portrait";
  summary: string;
  overview?: {
    label: string;
    title: string;
    emphasis: string;
  };
  challenge: string;
  approach: string;
  focus: string[];
  artworkSections?: ProjectArtworkSection[];
};

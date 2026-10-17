export type StockPhoto = {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const media = {
  hero: {
    src: u("photo-1439066615861-d1af74d74000", 1400),
    alt: "Embalse y cuerpo de agua en entorno natural",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-on-brown-rock-formation-near-body-of-water-during-daytime-1DkWWQz1u84",
  },
  problem: {
    src: u("photo-1472214103451-9374bd1c798e", 1000),
    alt: "Vegetación densa sobre superficie de agua",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
  },
  solution: {
    src: u("photo-1607083206869-4c6672b72c2d", 1000),
    alt: "Productos desechables de material natural sobre mesa",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
  },
  process: {
    src: u("photo-1581092160562-40aa08e78837", 1000),
    alt: "Entorno de producción industrial limpia",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
  },
  industrialHero: {
    src: u("photo-1565043666747-69f1076ccbaa", 1400),
    alt: "Interior de planta de manufactura",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
  },
} as const satisfies Record<string, StockPhoto>;

export const photoCreditsLine =
  "Imágenes de referencia vía Unsplash (ilustrativas; no representan instalaciones reales del proyecto).";

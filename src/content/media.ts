export type StockPhoto = {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

// Usar solo photo-IDs comprobados (404 en Unsplash = imagen rota en producción).
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
    src: u("photo-1604719312566-8912e9227c6a", 1000),
    alt: "Envases y productos sobre mesa (referencia ilustrativa)",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/1604719312566-8912e9227c6a",
  },
  process: {
    src: u("photo-1581092160562-40aa08e78837", 1000),
    alt: "Entorno de producción industrial limpia",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
  },
  industrialHero: {
    src: u("photo-1586528116311-ad8dd3c8310d", 1400),
    alt: "Interior de planta de manufactura",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/1586528116311-ad8dd3c8310d",
  },
} as const satisfies Record<string, StockPhoto>;

export const photoCreditsLine =
  "Imágenes de referencia vía Unsplash (ilustrativas; no representan instalaciones reales del proyecto).";

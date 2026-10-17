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
    src: "/illustrations/solucion-dual-agua-industria.jpg",
    alt: "Ilustración conceptual: embalse con lechuguín y valorización industrial en productos compostables",
    credit: "Ilustración IA (referencia conceptual)",
    creditUrl: "#solucion",
  },
  process: {
    src: "/illustrations/cadena-valor-resumen.jpg",
    alt: "Ilustración conceptual de la cadena de valor: cosecha, secado, molienda y producto",
    credit: "Ilustración IA (referencia conceptual)",
    creditUrl: "#proceso",
  },
  industrialHero: {
    src: u("photo-1586528116311-ad8dd3c8310d", 1400),
    alt: "Interior de planta de manufactura",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/1586528116311-ad8dd3c8310d",
  },
} as const satisfies Record<string, StockPhoto>;

export const photoCreditsLine =
  "Ilustraciones de solución y proceso generadas con IA; otras imágenes vía Unsplash. Referencia conceptual; no representan instalaciones reales del proyecto.";

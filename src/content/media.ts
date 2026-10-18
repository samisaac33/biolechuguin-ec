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
    src: "/photos/hero-embalse.webp",
    alt: "Vista aérea de embalse con cobertura de lechuguín y montañas alrededor",
    credit: "Archivo del proyecto",
    creditUrl: "#",
  },
  problem: {
    src: "/photos/problema-lechuguin.webp",
    alt: "Cobertura densa de lechuguín sobre la superficie del agua",
    credit: "Archivo del proyecto",
    creditUrl: "#problema",
  },
  solution: {
    src: "/illustrations/solucion-dual-agua-industria.jpg",
    alt: "Ilustración conceptual: embalse con lechuguín y valorización industrial en productos compostables",
    credit: "Ilustración IA (referencia conceptual)",
    creditUrl: "#solucion",
  },
  process: {
    src: "/illustrations/cadena-valor-resumen.jpg",
    alt: "Infografía de la cadena de valor del envase biodegradable: cosecha en embalse, secado de biomasa, molienda y conformado de envases compostables",
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
  "Fotografías del proyecto en hero y problema hídrico; ilustraciones de solución y proceso generadas con IA (referencia conceptual).";

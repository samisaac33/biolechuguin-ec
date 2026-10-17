export const site = {
  name: "BioLechuguín EC",
  tagline: "Bioeconomía circular y gestión hídrica en Ecuador",
  copyrightYear: 2026,
  publicPartnerName: "Empresa Pública del Agua",
} as const;

export type NavLink =
  | { type: "route"; href: string; label: string }
  | { type: "anchor"; href: string; label: string };

/** Barra desktop (lg+): sin overflow horizontal */
export const navLinksHomePrimary: NavLink[] = [
  { type: "anchor", href: "#vision", label: "Visión" },
  { type: "anchor", href: "#solucion", label: "Solución" },
  { type: "anchor", href: "#proceso", label: "Proceso" },
  { type: "anchor", href: "#impacto", label: "Impacto" },
  { type: "route", href: "/modelo-industrial", label: "Modelo industrial" },
];

/** Menú móvil: acceso a todas las secciones */
export const navLinksHomeFull: NavLink[] = [
  { type: "anchor", href: "#vision", label: "Visión" },
  { type: "anchor", href: "#problema", label: "Problema" },
  { type: "anchor", href: "#solucion", label: "Solución" },
  { type: "anchor", href: "#proceso", label: "Proceso" },
  { type: "anchor", href: "#impacto", label: "Impacto ESG" },
  { type: "anchor", href: "#modelo", label: "Modelo de negocio" },
  { type: "route", href: "/modelo-industrial", label: "Modelo industrial" },
  { type: "anchor", href: "#alianzas", label: "Alianzas" },
];

export const navLinksInner: NavLink[] = [
  { type: "route", href: "/", label: "Inicio" },
  { type: "route", href: "/modelo-industrial", label: "Modelo industrial" },
];

export const hero = {
  title: "De invasora en el embalse a envase que vuelve a la tierra",
  subtitle:
    "Valorizamos el lechuguín retirado de embalses y represas donde opera la gestión pública del agua, para producir envases y cubiertos biodegradables que sustituyen plástico de un solo uso.",
  elevator:
    "La gestión hídrica ya invierte en retirar toneladas de lechuguín; proponemos convertir esa biomasa en materia prima de bioplástico, con impacto ambiental, social y de gobernanza medible.",
  ctaPrimary: { href: "#alianzas", label: "Marco de alianza" },
  ctaSecondary: { href: "/modelo-industrial", label: "Modelo industrial" },
} as const;

export const publicPrivateVision = {
  id: "vision",
  title: "Visión público-privada",
  disclaimer:
    "Modelo de colaboración propuesto; no implica convenio vigente ni compromiso comercial hasta acuerdos formales.",
  public: {
    title: "Sector público",
    entity: site.publicPartnerName,
    roles: [
      "Operación y mantenimiento de embalses, represas y sistemas de abastecimiento.",
      "Programación del retiro de lechuguín y control de macrofitas invasoras.",
      "Suministro coordinado de biomasa retirada con trazabilidad por punto de origen.",
      "Alineación con política ambiental y continuidad del servicio de agua.",
    ],
  },
  private: {
    title: "Sector privado",
    entity: site.name,
    roles: [
      "Inversión y operación de planta de valorización (piloto y escala modular).",
      "Desarrollo de formulación, producción de pellets y conformado de productos.",
      "Comercialización B2B y narrativa de impacto (ESG, economía circular).",
      "Calidad, inocuidad alimentaria y certificaciones según mercado objetivo.",
    ],
  },
} as const;

export const problem = {
  id: "problema",
  title: "El problema hídrico",
  intro:
    "En embalses y represas del país, el lechuguín reduce capacidad útil, complica plantas de tratamiento y tomas de agua, y obliga a cosechas periódicas con alto costo.",
  bullets: [
    "Cobertura densa que encarece la limpieza recurrente del recurso hídrico.",
    "Biomasa retirada a menudo tratada como residuo: acopio, transporte y riesgos sanitarios.",
    "Costo operativo sin retorno claro sobre el volumen extraído del agua.",
  ],
} as const;

export const solution = {
  id: "solucion",
  title: "Solución dual: agua + industria",
  intro:
    "Un eje hídrico (cosecha coordinada con la Empresa Pública del Agua) y un eje industrial (procesamiento y producto) en zonas acordes a la logística de biomasa.",
  pillars: [
    {
      title: "Gestión hídrica",
      description:
        "Cosecha mecánica en zonas acordadas, alineada con planes de limpieza existentes: mejoramos el destino de la biomasa sin añadir riesgo operativo.",
    },
    {
      title: "Valorización",
      description:
        "Prensado, secado y molienda convierten planta acuosa en fibra seca rica en celulosa, base para formulaciones compostables.",
    },
    {
      title: "Producto B2B",
      description:
        "Platos, bandejas y cubiertos para restauración, catering y retail con trazabilidad hasta el cuerpo de agua de origen.",
    },
  ],
} as const;

export const process = {
  id: "proceso",
  title: "Cadena de valor (resumen)",
  intro:
    "Flujo de referencia para lechuguín valorizado; detalle de equipos y áreas en el modelo industrial.",
  steps: [
    "Cosecha mecánica en lagos y represas.",
    "Prensado y secado de biomasa.",
    "Molienda y obtención de fibra/celulosa.",
    "Formulación, extrusión a pellets y conformado de productos.",
  ],
  note: "Objetivo: productos firmes, degradables en condiciones de compost según formulación y certificación.",
  detailLink: {
    href: "/modelo-industrial",
    label: "Ver equipamiento y áreas de planta",
  },
} as const;

export const esg = {
  id: "impacto",
  title: "Impacto ESG y economía regenerativa",
  intro:
    "Soluciones basadas en la naturaleza, aprovechamiento de macrofitas invasoras y valorización de biomasa.",
  dimensions: [
    {
      letter: "E",
      name: "Ambiental",
      items: [
        "Reducción de cobertura invasora en embalses priorizados.",
        "Sustitución de plástico petroquímico de un solo uso.",
        "Métricas por tonelada retirada y procesada.",
      ],
    },
    {
      letter: "S",
      name: "Social",
      items: [
        "Empleo local en cosecha, planta piloto y logística.",
        "Proveedores regionales de insumos agroindustriales (almidón, aceites).",
      ],
    },
    {
      letter: "G",
      name: "Gobernanza",
      items: [
        "Convenios marco con el gestor del agua y protocolos de calidad.",
        "Trazabilidad: origen → lote → producto.",
      ],
    },
  ],
} as const;

export const business = {
  id: "modelo",
  title: "Modelo de negocio (fase idea)",
  revenue: [
    "Venta B2B de envases y cubiertos compostables.",
    "Fee de valorización por tonelada de biomasa procesada.",
    "Servicios de cosecha coordinada donde aplique.",
  ],
  roadmap: [
    { phase: "0–6 meses", text: "Piloto de laboratorio: celulosa, formulación, inocuidad." },
    { phase: "6–18 meses", text: "Planta piloto modular (5–20 t/día equivalente seco)." },
    { phase: "18+ meses", text: "Escala según contrato de suministro y clientes ancla." },
  ],
} as const;

export const cta = {
  id: "alianzas",
  title: "Marco de alianza",
  intro:
    "Interés en articular roles público-privados con la Empresa Pública del Agua, espacio para piloto y clientes ancla para financiamiento de impacto.",
  ask: [
    "Acceso coordinado a biomasa retirada en embalses y represas.",
    "Acompañamiento técnico y espacio para piloto.",
    "Introducción a cadenas de restauración, municipalidades y retail verde.",
  ],
  closing:
    "La coordinación se realizará por canales institucionales formales cuando exista mandato y acuerdo de las partes.",
} as const;

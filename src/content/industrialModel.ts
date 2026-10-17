export const industrialModel = {
  title: "Modelo industrial (referencia)",
  subtitle:
    "Representación conceptual del negocio: flujo de proceso, áreas de planta y equipamiento típico para valorizar lechuguín en productos compostables.",
  disclaimer:
    "Documento referencial para pitch e ingeniería conceptual. Capacidades, layout definitivo, marcas de equipo y costos se definirán en estudios de factibilidad y diseño de detalle.",
  layoutNote:
    "La implementación puede iniciar como línea piloto modular y expandirse por etapas (pretratamiento → fibra → extrusión → conformado) según volumen de biomasa contratado.",
} as const;

export const plantAreas = [
  {
    id: "recepcion",
    name: "Recepción y acopio",
    description:
      "Pesaje, registro de lote por origen (embalse/represa) y staging de biomasa húmeda recién cosechada.",
  },
  {
    id: "pretratamiento",
    name: "Pretratamiento",
    description:
      "Desagua mecánica y secado térmico para reducir humedad antes de molienda.",
  },
  {
    id: "fibra",
    name: "Fibra y celulosa",
    description:
      "Molienda, clasificación de partículas y lavado/extracción de celulosa.",
  },
  {
    id: "extrusion",
    name: "Formulación y extrusión",
    description:
      "Mezcla con almidón y plastificantes naturales; extrusión a pellets de biopolímero.",
  },
  {
    id: "conformado",
    name: "Conformado",
    description:
      "Termoformado de platos/bandejas e inyección de cubiertos a partir de pellets.",
  },
  {
    id: "expedicion",
    name: "Almacén y expedición",
    description:
      "Control de calidad, empaque y despacho de producto terminado.",
  },
  {
    id: "servicios",
    name: "Servicios auxiliares",
    description:
      "Utilidades (vapor/aire comprimido), tratamiento de efluentes, taller y oficinas técnicas.",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Cosecha en cuerpo de agua",
    description:
      "Retiro mecánico de lechuguín en zonas operativas acordadas con la gestión del embalse o represa.",
    inputs: ["Lechuguín en planta (húmedo)"],
    outputs: ["Biomasa húmeda en barcaza o acopio flotante/ribereño"],
    equipment: [
      "Barcazas o embarcaciones de trabajo",
      "Cosechadoras mecánicas acuáticas",
      "Sistemas de amarre, cubierta y transporte fluvial",
      "Equipos de seguridad y señalización acuática",
    ],
    areaId: "recepcion",
  },
  {
    step: 2,
    title: "Desagua (prensado)",
    description:
      "Expresión mecánica continua para eliminar gran parte del agua libre de la biomasa.",
    inputs: ["Biomasa húmeda"],
    outputs: ["Biomasa prensada", "Agua de prensado (efluente a tratar)"],
    equipment: [
      "Prensa de rodillos o banda con rodillos",
      "Bandeja o canal de recolección de líquido",
      "Transportador de tornillo o banda hacia secado",
    ],
    areaId: "pretratamiento",
  },
  {
    step: 3,
    title: "Secado",
    description:
      "Reducción de humedad hasta material seco, frágil y apto para molienda.",
    inputs: ["Biomasa prensada"],
    outputs: ["Biomasa seca"],
    equipment: [
      "Secador de túnel o banda",
      "Sistema de ventilación y recirculación de aire caliente",
      "Intercambiador / generación térmica (según diseño energético)",
      "Sensores de humedad y temperatura",
    ],
    areaId: "pretratamiento",
  },
  {
    step: 4,
    title: "Molienda",
    description:
      "Trituración a harina vegetal fina para procesos downstream de fibra.",
    inputs: ["Biomasa seca"],
    outputs: ["Polvo vegetal (harina)"],
    equipment: [
      "Molino de martillos",
      "Ciclón o sistema de captación de polvo",
      "Silo de almacenamiento de polvo",
      "Filtros de aire / extracción industrial",
    ],
    areaId: "fibra",
  },
  {
    step: 5,
    title: "Extracción y lavado de celulosa",
    description:
      "Separación y limpieza de la fracción fibrosa (celulosa) en medios acuosos con sales.",
    inputs: ["Polvo vegetal", "Agua", "Sales de proceso"],
    outputs: ["Suspensión de celulosa purificada", "Corrientes de rechazo"],
    equipment: [
      "Tanques de lavado con agitación",
      "Bombas de circulación",
      "Tamices o equipos de filtrado/decantación",
      "Línea de tratamiento de efluentes acoplada",
    ],
    areaId: "fibra",
  },
  {
    step: 6,
    title: "Formulación",
    description:
      "Mezcla homogénea de celulosa con almidón de yuca, agua y aceites vegetales como aglutinantes y plastificantes naturales.",
    inputs: ["Celulosa purificada", "Almidón", "Aceites vegetales", "Agua"],
    outputs: ["Masa plastificada lista para extrusión"],
    equipment: [
      "Mezcladora de carga pesada o amasadora industrial",
      "Dosificadores de sólidos y líquidos",
      "Balanza industrial / control de receta",
    ],
    areaId: "extrusion",
  },
  {
    step: 7,
    title: "Extrusión a pellets",
    description:
      "Fusión a presión y granulado en pellets que funcionan como materia prima de conformado.",
    inputs: ["Masa formulada"],
    outputs: ["Pellets de biopolímero"],
    equipment: [
      "Extrusora de tornillo (single o twin-screw según formulación)",
      "Placa de filtro y cabezal de extrusión",
      "Cortadora de pellets",
      "Tanque o cinta de enfriamiento",
      "Silo de pellets",
    ],
    areaId: "extrusion",
  },
  {
    step: 8,
    title: "Conformado de producto",
    description:
      "Fabricación de platos, bandejas (termoformado) y cubiertos (inyección) con resistencia al uso previsto.",
    inputs: ["Pellets"],
    outputs: ["Envases y cubiertos terminados"],
    equipment: [
      "Termoformadora con moldes metálicos (platos/bandejas)",
      "Inyectora con moldes de acero (cubiertos)",
      "Unidad de calentamiento y control de ciclo",
      "Mesa de recorte y control dimensional",
    ],
    areaId: "conformado",
  },
] as const;

export const flowSummary = [
  "Cosecha",
  "Prensado",
  "Secado",
  "Molienda",
  "Celulosa",
  "Formulación",
  "Extrusión",
  "Conformado",
] as const;

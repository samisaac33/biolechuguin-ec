import type { ReactNode } from "react";

type GraphicProps = {
  className?: string;
};

function GraphicFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 136"
      role="img"
      aria-hidden
      className={`h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

/** Paso 1: barcaza cosechadora en embalse. */
export function HarvestBargeGraphic({ className }: GraphicProps) {
  return (
    <GraphicFrame className={className}>
      <defs>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="hullGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>
      </defs>
      <rect width="200" height="136" fill="#f0f9ff" rx="8" />
      <path
        d="M0 78 Q50 72 100 76 T200 74 V136 H0 Z"
        fill="url(#waterGrad)"
      />
      <path
        d="M8 74 Q40 68 72 72"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
        fill="none"
      />
      {/* Montañas al fondo */}
      <path
        d="M120 58 L148 34 L172 52 L200 38 V74 H120 Z"
        fill="#bae6fd"
        opacity="0.55"
      />
      <path
        d="M0 62 L36 40 L68 58 L96 44 L120 58 V74 H0 Z"
        fill="#7dd3fc"
        opacity="0.35"
      />
      {/* Lechuguín flotante */}
      <ellipse cx="42" cy="82" rx="22" ry="7" fill="#22c55e" opacity="0.85" />
      <ellipse cx="58" cy="86" rx="18" ry="6" fill="#16a34a" opacity="0.9" />
      <ellipse cx="28" cy="86" rx="14" ry="5" fill="#4ade80" />
      <path
        d="M34 78 Q36 70 38 78 M46 76 Q48 68 50 76 M54 79 Q56 71 58 79"
        stroke="#15803d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Barcaza */}
      <path
        d="M72 68 L168 68 L182 82 L62 82 Z"
        fill="url(#hullGrad)"
      />
      <path d="M62 82 L182 82 L176 88 H68 Z" fill="#0d9488" />
      {/* Cabina */}
      <rect x="138" y="48" width="34" height="22" rx="3" fill="#e2e8f0" />
      <rect x="142" y="52" width="12" height="10" rx="1" fill="#bae6fd" />
      <rect x="156" y="52" width="12" height="10" rx="1" fill="#bae6fd" />
      {/* Brazo cosechador y cinta */}
      <path d="M72 68 L48 64 L38 72 L72 74 Z" fill="#64748b" />
      <path d="M38 72 L28 78 L48 80 L72 74 Z" fill="#475569" />
      <rect x="24" y="76" width="28" height="5" rx="2" fill="#334155" />
      {/* Planta en cinta */}
      <circle cx="32" cy="74" r="4" fill="#4ade80" />
      <circle cx="42" cy="73" r="3.5" fill="#22c55e" />
      <circle cx="52" cy="75" r="3" fill="#16a34a" />
      {/* Chimenea / motor */}
      <rect x="128" y="58" width="6" height="10" rx="1" fill="#94a3b8" />
    </GraphicFrame>
  );
}

/** Paso 2: prensado y secado. */
export function PressDryGraphic({ className }: GraphicProps) {
  return (
    <GraphicFrame className={className}>
      <rect width="200" height="136" fill="#f8fafc" rx="8" />
      <rect x="16" y="24" width="168" height="88" rx="10" fill="#e2e8f0" />
      <circle cx="68" cy="68" r="26" fill="#64748b" />
      <circle cx="68" cy="68" r="18" fill="#94a3b8" />
      <circle cx="132" cy="68" r="26" fill="#64748b" />
      <circle cx="132" cy="68" r="18" fill="#94a3b8" />
      <path
        d="M56 68 H144"
        stroke="#bbf7d0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M56 68 H144"
        stroke="#22c55e"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M78 92 Q100 102 122 92"
        stroke="#0ea5e9"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <ellipse cx="100" cy="104" rx="28" ry="5" fill="#bae6fd" opacity="0.7" />
      <path
        d="M92 98 V108 M100 96 V110 M108 98 V108"
        stroke="#0284c7"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </GraphicFrame>
  );
}

/** Paso 3: molienda y fibra. */
export function MillingGraphic({ className }: GraphicProps) {
  return (
    <GraphicFrame className={className}>
      <rect width="200" height="136" fill="#f0fdf4" rx="8" />
      <path d="M78 28 L122 28 L112 48 H88 Z" fill="#64748b" />
      <rect x="84" y="48" width="32" height="44" rx="4" fill="#475569" />
      <rect x="90" y="54" width="20" height="8" rx="2" fill="#94a3b8" />
      <circle cx="100" cy="72" r="8" fill="#334155" />
      <path
        d="M92 72 H108 M100 64 V80"
        stroke="#cbd5e1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 92 Q100 98 104 92 Q108 86 112 92"
        stroke="#bbf7d0"
        strokeWidth="3"
        fill="none"
      />
      <ellipse cx="100" cy="108" rx="36" ry="10" fill="#dcfce7" />
      <ellipse cx="100" cy="106" rx="30" ry="7" fill="#86efac" />
      <circle cx="88" cy="104" r="2" fill="#16a34a" opacity="0.7" />
      <circle cx="96" cy="106" r="1.8" fill="#22c55e" />
      <circle cx="104" cy="105" r="2" fill="#15803d" opacity="0.8" />
      <circle cx="112" cy="107" r="1.6" fill="#16a34a" />
    </GraphicFrame>
  );
}

/** Paso 4: extrusión, pellets y conformado. */
export function MoldingGraphic({ className }: GraphicProps) {
  return (
    <GraphicFrame className={className}>
      <rect width="200" height="136" fill="#f8fafc" rx="8" />
      <rect x="20" y="44" width="72" height="48" rx="6" fill="#64748b" />
      <rect x="28" y="52" width="56" height="16" rx="3" fill="#94a3b8" />
      <path
        d="M92 68 H108"
        stroke="#475569"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="114" cy="68" r="3" fill="#22c55e" />
      <circle cx="120" cy="70" r="2.5" fill="#16a34a" />
      <circle cx="126" cy="67" r="2.5" fill="#4ade80" />
      <rect x="132" y="36" width="48" height="56" rx="6" fill="#cbd5e1" />
      <rect x="138" y="42" width="36" height="44" rx="4" fill="#f1f5f9" />
      <rect x="144" y="48" width="24" height="8" rx="2" fill="#d97706" opacity="0.35" />
      <rect x="144" y="60" width="24" height="8" rx="2" fill="#d97706" opacity="0.35" />
      {/* Productos finales */}
      <rect x="36" y="98" width="36" height="10" rx="3" fill="#ecfccb" stroke="#84cc16" strokeWidth="1.5" />
      <rect x="78" y="96" width="32" height="14" rx="4" fill="#ecfccb" stroke="#65a30d" strokeWidth="1.5" />
      <ellipse cx="134" cy="104" rx="16" ry="5" fill="#ecfccb" stroke="#84cc16" strokeWidth="1.5" />
    </GraphicFrame>
  );
}

const graphics = [
  HarvestBargeGraphic,
  PressDryGraphic,
  MillingGraphic,
  MoldingGraphic,
] as const;

export function ProcessStepGraphic({
  stepIndex,
  className = "",
}: {
  stepIndex: number;
  className?: string;
}) {
  const Graphic = graphics[stepIndex] ?? HarvestBargeGraphic;
  return <Graphic className={className} />;
}

export const processStepGraphicLabels = [
  "Barcaza cosechadora",
  "Prensa y secado",
  "Molienda",
  "Conformado",
] as const;

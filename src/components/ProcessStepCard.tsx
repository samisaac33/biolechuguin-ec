import {
  ProcessStepGraphic,
  processStepGraphicLabels,
} from "./process/ProcessStepGraphics";

type ProcessStepCardProps = {
  step: number;
  stepIndex: number;
  children: string;
};

export function ProcessStepCard({
  step,
  stepIndex,
  children,
}: ProcessStepCardProps) {
  const graphicLabel = processStepGraphicLabels[stepIndex] ?? "Proceso";

  return (
    <li className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative border-b border-slate-100 bg-gradient-to-br from-sky-50/90 to-emerald-50/50 p-3 sm:p-4">
        <div className="aspect-[200/136] w-full">
          <ProcessStepGraphic stepIndex={stepIndex} />
        </div>
        <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-900/70">
          {graphicLabel}
        </p>
      </div>
      <div className="flex flex-1 items-start gap-3 p-4">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-700 text-xs font-bold text-white shadow-sm"
          aria-hidden
        >
          {step}
        </span>
        <p className="min-w-0 flex-1 pt-0.5 text-sm leading-relaxed text-slate-800">
          <span className="sr-only">{graphicLabel}. </span>
          {children}
        </p>
      </div>
    </li>
  );
}

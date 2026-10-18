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
    <li className="card-hover flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
      <div className="flex w-1/4 max-w-[5.75rem] shrink-0 grow-0 flex-col items-center sm:max-w-[6.5rem]">
        <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-sky-50 to-emerald-50/80 p-1.5 ring-1 ring-sky-100 sm:p-2">
          <ProcessStepGraphic stepIndex={stepIndex} className="h-full w-full" />
        </div>
        <span className="sr-only">{graphicLabel}</span>
      </div>

      <div className="flex min-w-0 flex-1 basis-3/4 items-start gap-2.5 sm:gap-3">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-700 text-[11px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs"
          aria-hidden
        >
          {step}
        </span>
        <p className="min-w-0 flex-1 pt-0.5 text-sm leading-snug text-slate-800 sm:leading-relaxed">
          {children}
        </p>
      </div>
    </li>
  );
}

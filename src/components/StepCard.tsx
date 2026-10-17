type StepCardProps = {
  step: number;
  children: string;
};

export function StepCard({ step, children }: StepCardProps) {
  return (
    <li className="card-hover flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-700 text-xs font-bold text-white"
        aria-hidden
      >
        {step}
      </span>
      <p className="min-w-0 flex-1 pt-0.5 text-sm leading-relaxed text-slate-800">
        {children}
      </p>
    </li>
  );
}

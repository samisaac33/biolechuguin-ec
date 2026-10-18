/** Separador visual entre logos de alianza (sin símbolo ×). */
export function HeaderAllianceMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative mx-0.5 flex h-8 shrink-0 flex-col items-center justify-center sm:mx-1 sm:h-9 ${className}`}
      aria-hidden
    >
      <span className="hidden min-w-[2.25rem] text-center text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">
        Alianza
      </span>
      <span className="mt-0 hidden h-px w-full min-w-[2.25rem] bg-gradient-to-r from-sky-500 via-slate-300 to-emerald-500 sm:block" />
      <span className="h-7 w-0.5 rounded-full bg-gradient-to-b from-sky-500 via-slate-300 to-emerald-500 sm:hidden" />
    </span>
  );
}

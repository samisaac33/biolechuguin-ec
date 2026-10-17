import { flowSummary } from "@/content/industrialModel";

export function FlowSummary() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Flujo lineal del proceso
        </h2>
        <ol className="mt-8 flex flex-wrap items-center gap-2">
          {flowSummary.map((label, index) => (
            <li key={label} className="flex items-center gap-2">
              <span className="rounded-full bg-sky-700 px-3 py-1.5 text-xs font-semibold text-white">
                {index + 1}. {label}
              </span>
              {index < flowSummary.length - 1 ? (
                <span className="text-slate-400" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

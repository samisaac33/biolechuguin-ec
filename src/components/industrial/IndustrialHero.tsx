import { industrialModel } from "@/content/industrialModel";

export function IndustrialHero() {
  return (
    <section className="border-b border-sky-900/10 bg-gradient-to-b from-sky-50/80 to-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-wider text-sky-800">
          Referencia conceptual
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {industrialModel.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          {industrialModel.subtitle}
        </p>
        <p className="mt-4 max-w-3xl rounded-lg border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm leading-relaxed text-amber-950">
          {industrialModel.disclaimer}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-slate-600">
          {industrialModel.layoutNote}
        </p>
      </div>
    </section>
  );
}

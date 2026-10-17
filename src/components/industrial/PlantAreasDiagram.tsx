import { plantAreas } from "@/content/industrialModel";
import { Reveal } from "@/components/Reveal";

export function PlantAreasDiagram() {
  return (
    <section className="bg-slate-50/80 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Áreas de la planta
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Distribución lógica sugerida; el layout físico depende de terreno,
          logística de biomasa y normativa ambiental local.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plantAreas.map((area, index) => (
            <Reveal key={area.id} delayMs={index * 40}>
            <article
              className="card-hover h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-sky-700">
                Área {index + 1}
              </span>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {area.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {area.description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { plantAreas, processSteps } from "@/content/industrialModel";
import { Reveal } from "@/components/Reveal";

const areaNameById = Object.fromEntries(
  plantAreas.map((a) => [a.id, a.name]),
) as Record<string, string>;

export function ProcessTimeline() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Proceso paso a paso y equipamiento
        </h2>
        <ol className="mt-10 space-y-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 30}>
            <li
              className="card-hover relative list-none rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">
                  {step.step}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-sky-800">
                    Área: {areaNameById[step.areaId] ?? step.areaId}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {step.description}
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Entradas
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        {step.inputs.map((item) => (
                          <li key={item}>· {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Salidas
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        {step.outputs.map((item) => (
                          <li key={item}>· {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Equipos (referencia)
                    </h4>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {step.equipment.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-800"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

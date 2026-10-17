import Link from "next/link";
import {
  business,
  cta,
  esg,
  problem,
  process,
  publicPrivateVision,
  solution,
} from "@/content/pitch";
import { SectionShell } from "./SectionShell";

export function PublicPrivateSection() {
  const { public: pub, private: priv, disclaimer } = publicPrivateVision;
  return (
    <SectionShell
      id={publicPrivateVision.id}
      title={publicPrivateVision.title}
      intro={disclaimer}
      alt
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
            {pub.title}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {pub.entity}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {pub.roles.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-sky-600">·</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {priv.title}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {priv.entity}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {priv.roles.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600">·</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}

export function ProblemSection() {
  return (
    <SectionShell id={problem.id} title={problem.title} intro={problem.intro}>
      <ul className="grid gap-3 sm:grid-cols-1">
        {problem.bullets.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-800 shadow-sm"
          >
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-600"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function SolutionSection() {
  return (
    <SectionShell
      id={solution.id}
      title={solution.title}
      intro={solution.intro}
      alt
    >
      <div className="grid gap-6 md:grid-cols-3">
        {solution.pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function ProcessSection() {
  return (
    <SectionShell id={process.id} title={process.title} intro={process.intro}>
      <ol className="grid gap-4 sm:grid-cols-2">
        {process.steps.map((step, index) => (
          <li
            key={step}
            className="relative rounded-xl border border-slate-200 bg-white p-4 pt-8 shadow-sm"
          >
            <span className="absolute left-4 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-xs font-bold text-white">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-slate-800">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-slate-600 italic">{process.note}</p>
      <Link
        href={process.detailLink.href}
        className="mt-4 inline-flex text-sm font-semibold text-sky-800 hover:text-sky-950"
      >
        {process.detailLink.label} →
      </Link>
    </SectionShell>
  );
}

export function EsgSection() {
  return (
    <SectionShell id={esg.id} title={esg.title} intro={esg.intro} alt>
      <div className="grid gap-6 md:grid-cols-3">
        {esg.dimensions.map((dim) => (
          <article
            key={dim.letter}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3 bg-sky-800 px-5 py-4 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-lg font-bold">
                {dim.letter}
              </span>
              <h3 className="font-semibold">{dim.name}</h3>
            </div>
            <ul className="space-y-2 p-5 text-sm text-slate-700">
              {dim.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-sky-600">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function BusinessSection() {
  return (
    <SectionShell id={business.id} title={business.title}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            Fuentes de ingreso
          </h3>
          <ul className="mt-4 space-y-2">
            {business.revenue.map((line) => (
              <li
                key={line}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            Roadmap
          </h3>
          <ul className="mt-4 space-y-4">
            {business.roadmap.map((item) => (
              <li key={item.phase} className="flex gap-4">
                <span className="shrink-0 rounded-md bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-950">
                  {item.phase}
                </span>
                <p className="text-sm text-slate-700">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

export function CtaSection() {
  return (
    <SectionShell id={cta.id} title={cta.title} intro={cta.intro} alt>
      <div className="rounded-2xl border border-sky-800/20 bg-gradient-to-br from-sky-800 to-slate-900 p-8 text-slate-50 shadow-lg sm:p-10">
        <h3 className="text-lg font-semibold">Qué buscamos</h3>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-100">
          {cta.ask.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-sky-100/95">
          {cta.closing}
        </p>
      </div>
    </SectionShell>
  );
}

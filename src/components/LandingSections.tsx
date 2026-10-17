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
import { media } from "@/content/media";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import { StepCard } from "./StepCard";
import { StockImage } from "./StockImage";

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
        <Reveal>
          <article className="card-hover h-full rounded-2xl border border-sky-200 bg-white p-6 shadow-sm">
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
        </Reveal>
        <Reveal delayMs={80}>
          <article className="card-hover h-full rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
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
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function ProblemSection() {
  return (
    <SectionShell id={problem.id} title={problem.title} intro={problem.intro}>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <StockImage
            photo={media.problem}
            className="aspect-[16/10] w-full rounded-2xl shadow-lg ring-1 ring-slate-200"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </Reveal>
        <ul className="grid gap-3">
          {problem.bullets.map((item, i) => (
            <Reveal key={item} delayMs={i * 60}>
              <li className="card-hover flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-800 shadow-sm">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-600"
                  aria-hidden
                />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
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
      <Reveal>
        <StockImage
          photo={media.solution}
          className="mb-8 aspect-[21/9] w-full rounded-2xl shadow-md ring-1 ring-slate-200"
          sizes="100vw"
          overlay
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {solution.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delayMs={i * 70}>
            <article className="card-hover h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function ProcessSection() {
  return (
    <SectionShell id={process.id} title={process.title} intro={process.intro}>
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <StockImage
            photo={media.process}
            className="aspect-[4/3] w-full rounded-2xl shadow-md ring-1 ring-slate-200"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </Reveal>
        <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {process.steps.map((step, index) => (
            <Reveal key={step} delayMs={index * 50}>
              <StepCard step={index + 1}>{step}</StepCard>
            </Reveal>
          ))}
        </ol>
      </div>
      <Reveal>
        <p className="mt-6 text-sm text-slate-600 italic">{process.note}</p>
        <Link
          href={process.detailLink.href}
          className="mt-4 inline-flex text-sm font-semibold text-sky-800 hover:text-sky-950"
        >
          {process.detailLink.label} →
        </Link>
      </Reveal>
    </SectionShell>
  );
}

export function EsgSection() {
  return (
    <SectionShell id={esg.id} title={esg.title} intro={esg.intro} alt>
      <div className="grid gap-6 md:grid-cols-3">
        {esg.dimensions.map((dim, i) => (
          <Reveal key={dim.letter} delayMs={i * 80}>
            <article className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function BusinessSection() {
  return (
    <SectionShell id={business.id} title={business.title}>
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
              Fuentes de ingreso
            </h3>
            <ul className="mt-4 space-y-2">
              {business.revenue.map((line) => (
                <li
                  key={line}
                  className="card-hover rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delayMs={100}>
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
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function CtaSection() {
  return (
    <SectionShell id={cta.id} title={cta.title} intro={cta.intro} alt>
      <Reveal>
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
      </Reveal>
    </SectionShell>
  );
}

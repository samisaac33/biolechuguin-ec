import Link from "next/link";
import { hero } from "@/content/pitch";
import { media } from "@/content/media";
import { StockImage } from "./StockImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-sky-900/10 bg-gradient-to-b from-sky-50/60 to-[var(--background)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(14 165 233 / 0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgb(16 185 129 / 0.15), transparent 40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28">
        <div className="hero-fade-in">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-800">
            Lechuguín · Ecuador
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            {hero.subtitle}
          </p>
          <p className="mt-4 rounded-lg border border-sky-200/60 bg-white/70 px-4 py-3 text-sm leading-relaxed text-slate-800 backdrop-blur-sm">
            {hero.elevator}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-sky-800 hover:shadow-lg"
            >
              {hero.ctaPrimary.label}
            </a>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-sky-800/20 bg-white/80 px-6 py-3 text-sm font-medium text-sky-950 transition hover:bg-sky-50"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <StockImage
          photo={media.hero}
          priority
          className="aspect-[4/3] w-full rounded-2xl shadow-xl ring-1 ring-sky-900/10 lg:aspect-square"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
    </section>
  );
}

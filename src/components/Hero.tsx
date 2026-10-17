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
      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-28">
        <div className="hero-fade-in order-2 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-800">
            Lechuguín · Ecuador
          </p>
          <h1 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl sm:leading-tight lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-3 rounded-lg border border-sky-200/60 bg-white/70 px-3 py-2.5 text-sm leading-snug text-slate-800 backdrop-blur-sm sm:mt-4 sm:px-4 sm:py-3 sm:leading-relaxed">
            <p className="lg:hidden">{hero.elevatorMobile}</p>
            <p className="hidden lg:block">{hero.elevator}</p>
          </div>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-sky-800 hover:shadow-lg sm:w-auto"
            >
              {hero.ctaPrimary.label}
            </a>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-sky-800/20 bg-white/80 px-6 py-3 text-sm font-medium text-sky-950 transition hover:bg-sky-50 sm:w-auto"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <StockImage
          photo={media.hero}
          priority
          className="order-1 aspect-[4/3] w-full rounded-2xl shadow-xl ring-1 ring-sky-900/10 lg:order-2 lg:aspect-square"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
    </section>
  );
}

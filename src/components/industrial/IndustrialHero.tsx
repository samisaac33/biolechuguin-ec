import { industrialModel } from "@/content/industrialModel";
import { media } from "@/content/media";
import { StockImage } from "@/components/StockImage";

export function IndustrialHero() {
  return (
    <section className="relative min-h-[28rem] overflow-hidden border-b border-sky-900/10">
      <StockImage
        photo={media.industrialHero}
        priority
        className="absolute inset-0 min-h-[28rem] w-full"
        imageClassName="object-cover"
        sizes="100vw"
        overlay
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="hero-fade-in max-w-3xl rounded-2xl border border-white/20 bg-slate-900/75 p-6 text-white backdrop-blur-md sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-200">
            Referencia conceptual
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {industrialModel.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-100">
            {industrialModel.subtitle}
          </p>
          <p className="mt-4 rounded-lg border border-amber-300/40 bg-amber-950/40 px-4 py-3 text-sm leading-relaxed text-amber-50">
            {industrialModel.disclaimer}
          </p>
          <p className="mt-4 text-sm text-slate-200">
            {industrialModel.layoutNote}
          </p>
        </div>
      </div>
    </section>
  );
}

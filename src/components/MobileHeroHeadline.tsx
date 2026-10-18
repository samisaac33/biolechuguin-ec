import { hero } from "@/content/pitch";

export function MobileHeroHeadline() {
  return (
    <div className="hero-fade-in mb-6 min-w-0 lg:hidden">
      <h1 className="max-w-full text-balance">
        <span className="block font-bold leading-[1.05] tracking-tight text-slate-900 [font-size:clamp(2rem,9vw,2.875rem)]">
          {hero.titleMobileBrand}{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 bg-clip-text text-transparent">
              {hero.titleMobileSuffix}
            </span>
            <span
              className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-emerald-500/80 to-sky-600/80"
              aria-hidden
            />
          </span>
        </span>
      </h1>

      <p
        className="hero-tagline-rise mt-4 max-w-full text-balance"
        aria-label={hero.taglineMobile}
      >
        <span className="flex flex-col gap-0 sm:gap-0.5">
          <span className="text-[clamp(1.0625rem,4.2vw,1.3125rem)] font-medium tracking-wide text-slate-500">
            {hero.taglineMobileLead}
          </span>
          <span className="flex items-center gap-2.5">
            <span
              className="text-emerald-500/85 sm:hidden"
              aria-hidden
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="opacity-75"
              >
                <path
                  d="M10 3v14M10 14l-4-4m4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[clamp(1.625rem,7vw,2.125rem)] font-bold leading-none tracking-tight">
              <span className="bg-gradient-to-r from-sky-800 via-sky-700 to-emerald-700 bg-clip-text text-transparent">
                {hero.taglineMobileAccent}
              </span>
            </span>
          </span>
        </span>
      </p>

      <div
        className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 shadow-sm shadow-emerald-500/20"
        aria-hidden
      />
    </div>
  );
}

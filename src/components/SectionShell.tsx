import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  alt?: boolean;
};

export function SectionShell({
  id,
  title,
  intro,
  children,
  alt = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 ${alt ? "bg-slate-50/70" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {intro}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

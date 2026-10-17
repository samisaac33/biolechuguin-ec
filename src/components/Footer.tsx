import { site } from "@/content/pitch";

export function Footer() {
  return (
    <footer className="border-t border-sky-900/10 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-sm">
          © {site.copyrightYear} {site.name}.
        </p>
      </div>
    </footer>
  );
}

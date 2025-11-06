export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} EM Tech Design. Tous droits réservés.</p>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="https://emma-tech-design.lovable.app" target="_blank" rel="noreferrer" className="hover:text-white">emma-tech-design.lovable.app</a>
            <a href="mailto:hello@emma-tech.design" className="hover:text-white">hello@emma-tech.design</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

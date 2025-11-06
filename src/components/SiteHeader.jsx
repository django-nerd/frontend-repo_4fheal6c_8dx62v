import { Link, useLocation } from 'react-router-dom';

export default function SiteHeader() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = params.get('page') || 'home';
  const linkBase = 'text-sm text-white/80 hover:text-white';
  const active = 'text-white';

  const isActive = (key) => (page === key ? active : '');

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-7xl px-6 py-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
        <Link to="/" className="text-sm font-semibold tracking-wider text-white">EM Tech Design</Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link to="/?page=a-propos" className={`${linkBase} ${isActive('a-propos')}`}>À propos</Link>
          <Link to="/?page=projets" className={`${linkBase} ${isActive('projets')}`}>Projets</Link>
          <Link to="/?page=contact" className={`${linkBase} ${isActive('contact')}`}>Contact</Link>
        </nav>
        <a href="mailto:hello@emma-tech.design" className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-900 hover:opacity-90">
          Me contacter
        </a>
      </div>
    </header>
  );
}

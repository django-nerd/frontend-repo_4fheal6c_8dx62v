import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HeroConsultant from './components/HeroConsultant';
import AboutSection from './components/AboutSection';
import ExpertiseGrid from './components/ExpertiseGrid';
import ProjectsGallery from './components/ProjectsGallery';

function usePage() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get('page') || 'home', [search]);
}

export default function App() {
  const page = usePage();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SiteHeader />

      {page === 'home' && (
        <main>
          <HeroConsultant />
          <ExpertiseGrid />
        </main>
      )}

      {page === 'a-propos' && (
        <main>
          <section className="pt-20" />
          <AboutSection />
        </main>
      )}

      {page === 'projets' && (
        <main>
          <section className="pt-20" />
          <ProjectsGallery />
        </main>
      )}

      {page === 'contact' && (
        <main className="bg-white py-20 text-slate-900">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-3xl font-semibold sm:text-4xl">Contact</h1>
            <p className="mt-3 text-slate-600">Parlez-moi de votre projet, réponse sous 24h.</p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <form action="mailto:hello@emma-tech.design" method="post" encType="text/plain" className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-700">Nom</span>
                  <input required className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-slate-300 focus:ring" name="nom" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-700">Email</span>
                  <input type="email" required className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-slate-300 focus:ring" name="email" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-700">Message</span>
                  <textarea rows={5} className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-slate-300 focus:ring" name="message" />
                </label>
                <button className="mt-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:opacity-90" type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </main>
      )}

      <SiteFooter />
    </div>
  );
}

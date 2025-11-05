import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ExpertiseGrid from './components/ExpertiseGrid';
import ProjectsGallery from './components/ProjectsGallery';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <a href="#" className="text-sm font-semibold tracking-wider text-white">Emma Tech Design</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#a-propos" className="hover:text-white">À propos</a>
            <a href="#projets" className="hover:text-white">Projets</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="mailto:hello@emma-tech.design" className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-900 hover:opacity-90">
            Me contacter
          </a>
        </div>
      </header>

      <main>
        <Hero3D />
        <AboutSection />
        <ExpertiseGrid />
        <ProjectsGallery />

        <section id="contact" className="relative bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Parlons de votre prochain projet</h3>
                <p className="mt-2 text-slate-600">Design, web et agents IA réunis pour créer des produits remarquables.</p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:hello@emma-tech.design" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:opacity-90">Écrire un message</a>
                <a href="#projets" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 hover:bg-slate-100">Voir les projets</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Emma Tech Design. Tous droits réservés.</p>
            <div className="flex gap-4 text-sm text-white/70">
              <a href="https://emma-tech-design.lovable.app" target="_blank" rel="noreferrer" className="hover:text-white">emma-tech-design.lovable.app</a>
              <a href="mailto:hello@emma-tech.design" className="hover:text-white">hello@emma-tech.design</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

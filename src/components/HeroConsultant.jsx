import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroConsultant() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            EM TECH DESIGN • Consultant
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Consultant Tech, Designer Produit & Ingénieur IA
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            J’aide les équipes à livrer plus vite: design systems, interfaces réactives, intégrations 3D et agents IA opérationnels.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/projets" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-900 transition hover:opacity-90">
              Voir les projets <ArrowRight size={16} />
            </Link>
            <a href="mailto:hello@emma-tech.design" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10">
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            EMMA TECH DESIGN
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Designer, Développeuse Web & Ingénieure en Agents IA
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Je conçois des expériences numériques immersives, des interfaces élégantes et des agents IA qui transforment les produits en assistants intelligents.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-900 transition hover:opacity-90"
            >
              Découvrir les projets <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@emma-tech.design"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10"
            >
              <Mail size={16} /> Contact
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

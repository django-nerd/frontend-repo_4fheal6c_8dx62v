export default function AboutSection() {
  return (
    <section id="a-propos" className="relative bg-slate-50 py-20">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-slate-900 to-slate-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              À propos d'Emma
            </h2>
            <p className="mt-4 text-slate-600">
              Je suis une créative technophile qui marie design, code et intelligence artificielle.
              J'aide les marques et les startups à passer de l'idée au produit grâce à des interfaces
              raffinées, des architectures front-end modernes et des agents IA fiables.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">UX/UI Design • Design Systems</li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Front-end React • Animations 3D</li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Prototypage IA • Agents autonomes</li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Audit d'interface • Accessibilité</li>
            </ul>
          </div>
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-6 shadow-sm">
              <div className="grid h-full grid-rows-3 gap-4">
                <div className="rounded-xl bg-slate-900/90 p-4 text-white">
                  <p className="text-sm uppercase tracking-wide text-white/70">Mission</p>
                  <p className="mt-2 text-lg font-medium">Créer des expériences qui inspirent et performent.</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-inner">
                  <p className="text-sm uppercase tracking-wide text-slate-500">Stack</p>
                  <p className="mt-2 text-slate-800">React, Tailwind, Framer Motion, Three/Spline, Python, FastAPI, LangChain, OpenAI.</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-inner">
                  <p className="text-sm uppercase tracking-wide text-slate-500">Clients</p>
                  <p className="mt-2 text-slate-800">Startups SaaS, studios créatifs, e-commerce, éducation et santé.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

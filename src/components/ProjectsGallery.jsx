const projects = [
  {
    title: 'Assistant IA – Studio Créatif',
    tag: 'Agents IA',
    desc: "Agent conversationnel multi-outils pour la gestion de projets et la génération d'idées.",
  },
  {
    title: 'Dashboard SaaS – Analytics UX',
    tag: 'Design + Web',
    desc: 'Refonte data-viz, design system et intégration front ultra fluide.',
  },
  {
    title: 'E-commerce – Luxe Responsable',
    tag: 'Web 3D',
    desc: 'Expérience 3D immersive avec Spline et animations haute performance.',
  },
  {
    title: 'Plateforme Éducation – IA Tutoring',
    tag: 'Produit',
    desc: 'Parcours personnalisé avec IA, évaluation et feedback en temps réel.',
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projets" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Sélection de projets</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Un aperçu de missions récentes mêlant design, web et intelligence artificielle.
            </p>
          </div>
          <a href="mailto:hello@emma-tech.design" className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 sm:inline-block">
            Discuter d'un projet
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="p-5">
                <span className="inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

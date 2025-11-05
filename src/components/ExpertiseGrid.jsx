import { Code, Palette, Cpu, Rocket } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Design & Identité',
    desc: "UX/UI, design systems, micro-interactions et direction artistique pour des interfaces mémorables.",
  },
  {
    icon: Code,
    title: 'Développement Web',
    desc: "Front-end réactif, animations 3D, performances, accessibilité et intégration d'API.",
  },
  {
    icon: Cpu,
    title: 'Agents & IA',
    desc: "Conception d'agents IA, RAG, workflows, évaluation et sécurité des prompts.",
  },
  {
    icon: Rocket,
    title: 'Stratégie Produit',
    desc: 'Discovery, prototypage rapide, roadmaps et accompagnement de lancement.',
  },
];

export default function ExpertiseGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Expertises</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Une approche holistique du produit, de la stratégie au design, du code à l'IA.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <s.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

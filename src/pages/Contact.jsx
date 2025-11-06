export default function Contact() {
  return (
    <main className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Contact</h1>
        <p className="mt-3 text-slate-600">Dites-m’en plus sur votre projet, je reviens vers vous sous 24h.</p>
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
  );
}

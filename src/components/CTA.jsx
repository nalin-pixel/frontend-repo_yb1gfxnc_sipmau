import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-slate-900/50 p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Accélérez votre transition énergétique</h3>
          <p className="mt-3 text-slate-300">Nos experts vous accompagnent pour capter des économies et réduire votre empreinte carbone.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Nous contacter</Link>
            <a href="#services" className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:border-white/40">Voir nos services</a>
          </div>
        </div>
      </div>
    </section>
  )
}

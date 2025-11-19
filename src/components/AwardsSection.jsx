import { motion } from 'framer-motion'
import { Trophy, Sparkles } from 'lucide-react'

export default function AwardsSection() {
  const items = [
    { title: 'Site of the Day', org: 'Awwwards', year: '2025' },
    { title: 'Gold Winner', org: 'CSS Design Awards', year: '2025' },
    { title: 'FWA of the Day', org: 'FWA', year: '2025' },
  ]
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-cyan-300/90">
            <Sparkles className="w-4 h-4" /> Ambition awards-level
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Design pensé pour gagner des awards</h2>
          <p className="mt-3 text-slate-300">Qualité visuelle, micro-interactions, performance et accessibilité.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur"
            >
              <Trophy className="w-8 h-8 text-yellow-300" />
              <h3 className="mt-3 text-xl font-semibold text-white">{it.title}</h3>
              <p className="text-slate-300">{it.org} • {it.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

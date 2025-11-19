import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-24 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            L'énergie du futur, aujourd'hui
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-lg text-slate-300 max-w-2xl"
          >
            Solutions complètes en efficacité énergétique, solaire, stockage et optimisation pour entreprises et particuliers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20"
            >
              Demander une étude gratuite
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:border-white/40"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.1),transparent_30%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-12 bg-cyan-400/10 blur-3xl rounded-full" />
                <img src="/solar-grid.png" alt="Futuristic energy grid" className="relative z-10 opacity-90" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

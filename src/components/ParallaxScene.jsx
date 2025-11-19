import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxScene() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
      <motion.div style={{ y: y1 }} className="absolute -inset-10 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(34,211,238,0.15),transparent_70%)]" />
      <motion.div style={{ y: y2 }} className="absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_20%,rgba(59,130,246,0.12),transparent_70%)]" />

      <div className="absolute inset-0 perspective-[1200px]">
        <motion.div
          style={{ y: y3 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[720px] h-[420px] bg-slate-800/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-[0_20px_120px_-20px_rgba(34,211,238,0.35)]">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-2xl" />
            <div className="relative p-6">
              <div className="h-8 w-28 rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-500/40" />
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-24 rounded-xl border border-white/10 bg-slate-900/60" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-6 left-6 text-slate-300"
      >
        <p>Visualisation en temps réel — Réseaux, stockage, performance</p>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Sun, Battery, Building2, Gauge, Leaf, Shield } from 'lucide-react'

const features = [
  {
    icon: Sun,
    title: 'Photovoltaïque clé en main',
    desc: "Conception, installation et maintenance de centrales solaires pour toitures et ombrières.",
  },
  {
    icon: Battery,
    title: 'Stockage & smart grid',
    desc: "Stockage intelligent, pilotage des charges, effacement et optimisation des consommations.",
  },
  {
    icon: Building2,
    title: 'Efficacité énergétique',
    desc: "Audit, GTB, relamping, variateurs, récupération de chaleur et solutions d'optimisation.",
  },
  {
    icon: Gauge,
    title: 'Suivi en temps réel',
    desc: "Tableaux de bord, alertes et reporting pour maîtriser vos performances énergétiques.",
  },
  {
    icon: Leaf,
    title: 'Décarbonation',
    desc: "Plan de transition, PPA, autoconsommation, mobilité électrique et neutralité carbone.",
  },
  {
    icon: Shield,
    title: 'Service & garantie',
    desc: "Engagements de performance, O&M, télésurveillance et garanties long terme.",
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Des solutions complètes et mesurables</h2>
          <p className="mt-3 text-slate-300">De la stratégie à l'exploitation, nous vous accompagnons sur toute la chaîne de valeur.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur hover:border-cyan-400/30 transition-colors"
            >
              <f.icon className="w-10 h-10 text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

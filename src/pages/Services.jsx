import Navbar from '../components/Navbar'

const services = [
  {
    title: 'Photovoltaïque',
    items: ['Centrales en toiture et au sol', 'Autoconsommation et revente', 'Ombrières', 'Maintenance et supervision'],
  },
  {
    title: 'Efficacité énergétique',
    items: ['Audit énergétique', 'GTB/monitoring', 'Relamping LED', 'Régulation et variateurs'],
  },
  {
    title: 'Stockage & smart grid',
    items: ['Batteries industrielles', 'Pilotage des charges', 'Effacement', 'V2G/V2H'],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white">Nos services</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Des solutions intégrées pour optimiser vos consommations et produire une énergie propre et compétitive.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

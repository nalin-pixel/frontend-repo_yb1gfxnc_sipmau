import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Projets() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const load = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/projects`)
      if (res.ok) {
        const data = await res.json()
        setProjects(data)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white">Projets</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Quelques réalisations et études de cas illustrant notre expertise.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              {p.image && <img src={p.image} alt="" className="rounded-xl mb-4" />}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <div className="mt-2 text-slate-300">{p.summary}</div>
              <div className="mt-2 text-slate-400 text-sm">{p.sector} • {p.location || 'France'}</div>
            </article>
          ))}
          {projects.length === 0 && (
            <div className="text-slate-400">Aucun projet pour le moment.</div>
          )}
        </div>
      </section>
    </div>
  )
}

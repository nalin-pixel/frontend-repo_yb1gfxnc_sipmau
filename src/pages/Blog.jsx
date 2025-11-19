import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const load = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/blog`)
      if (res.ok) {
        const data = await res.json()
        setPosts(data)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white">Blog</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Actualités, projets et analyses autour de la transition énergétique.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              {p.cover_image && (
                <img src={p.cover_image} alt="" className="rounded-xl mb-4" />
              )}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.excerpt}</p>
              <div className="mt-3 text-slate-400 text-sm">{p.published_at ? new Date(p.published_at).toLocaleDateString('fr-FR') : 'À venir'}</div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="text-slate-400">Aucun article pour le moment.</div>
          )}
        </div>
      </section>
    </div>
  )
}

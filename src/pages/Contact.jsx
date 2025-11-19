import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          company: payload.company,
          message: payload.message,
          source: 'contact-page',
        }),
      })
      if (!res.ok) throw new Error('Erreur lors de l\'envoi du message')
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-28 pb-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <p className="mt-3 text-slate-300 max-w-xl">Parlez-nous de votre projet. Nous vous répondons sous 24h ouvrées.</p>
          <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-slate-900/50">
            <p className="text-slate-300">Email: contact@energy4you.fr</p>
            <p className="text-slate-300">Téléphone: +33 1 23 45 67 89</p>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/10 text-green-300">
              Merci, votre demande a été envoyée. Nous vous recontactons très vite.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-white/10 bg-slate-900/50 space-y-4">
              {error && <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-red-300">{error}</div>}
              <div>
                <label className="block text-slate-300 text-sm mb-1">Nom complet</label>
                <input name="name" required className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm mb-1">Email</label>
                  <input name="email" type="email" required className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1">Téléphone</label>
                  <input name="phone" className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white" />
                </div>
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Entreprise</label>
                <input name="company" className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white" />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Message</label>
                <textarea name="message" rows="5" className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white" />
              </div>
              <button disabled={loading} className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold disabled:opacity-60">
                {loading ? 'Envoi...' : 'Envoyer ma demande'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

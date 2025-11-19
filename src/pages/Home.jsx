import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <div id="services">
          <Features />
        </div>
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Energy4You — Tous droits réservés</p>
      </footer>
    </div>
  )
}

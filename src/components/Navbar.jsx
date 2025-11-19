import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/projets', label: 'Projets' },
  { to: '/blog', label: 'Blog' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-slate-300 hover:text-white transition-colors'
  const active = 'text-white'

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl backdrop-blur bg-slate-900/50 border border-white/10 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-lg" />
            </div>
            <span className="font-semibold text-white">Energy4You</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-colors"
            >
              Demander un devis
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl backdrop-blur bg-slate-900/70 border border-white/10 p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-lg ${linkBase} ${isActive ? active : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
            >
              Demander un devis
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

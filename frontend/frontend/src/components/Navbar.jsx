import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-dark/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Wordmark */}
        <span className="text-xl tracking-widest font-semibold uppercase">
          Robbin Kimani
        </span>
        <ul className="flex gap-8 text-sm uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-dark ${
                    isActive ? 'text-dark font-semibold' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

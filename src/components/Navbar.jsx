import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0E1117]/70 border-b border-gray-100/70 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#007BFF] via-[#00C2FF] to-[#339DFF] shadow-[0_0_24px_rgba(0,194,255,0.35)]" />
          <span className="text-lg font-semibold tracking-tight text-[#1C1C1E] dark:text-[#EAEAEA]">Aggentify AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[#1C1C1E]/70 dark:text-[#EAEAEA]/70">
          <NavLink to="/pricing" className={({isActive}) => `hover:text-[#1C1C1E] dark:hover:text-white ${isActive ? 'text-[#1C1C1E] dark:text-white' : ''}`}>Pricing</NavLink>
          <NavLink to="/marketplace" className={({isActive}) => `hover:text-[#1C1C1E] dark:hover:text-white ${isActive ? 'text-[#1C1C1E] dark:text-white' : ''}`}>Marketplace</NavLink>
          <a href="#docs" className="hover:text-[#1C1C1E] dark:hover:text-white">Docs</a>
          <NavLink to="/login" className="hover:text-[#1C1C1E] dark:hover:text-white">Login</NavLink>
          <NavLink to="/signup" className="hover:text-[#1C1C1E] dark:hover:text-white">Sign Up</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/create"
            className="inline-flex items-center rounded-[12px] bg-[#007BFF] text-white px-4 py-2 text-sm font-medium shadow-[0_0_0_0_rgba(0,0,0,0)] hover:bg-[#339DFF] hover:shadow-[0_8px_24px_rgba(0,123,255,0.35)] transition"
          >
            Create Agent
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

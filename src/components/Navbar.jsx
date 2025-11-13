import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">AgentForge</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-600">
          <NavLink to="/pricing" className={({isActive}) => `hover:text-gray-900 ${isActive ? 'text-gray-900' : ''}`}>Pricing</NavLink>
          <NavLink to="/marketplace" className={({isActive}) => `hover:text-gray-900 ${isActive ? 'text-gray-900' : ''}`}>Marketplace</NavLink>
          <a href="#docs" className="hover:text-gray-900">Docs</a>
          <NavLink to="/login" className="hover:text-gray-900">Login</NavLink>
          <NavLink to="/signup" className="hover:text-gray-900">Sign Up</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/create"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-95 transition"
          >
            Create Agent
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
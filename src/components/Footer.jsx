function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 text-sm flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500" />
          <span>© 2025 AgentForge</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#docs" className="hover:text-gray-900">Docs</a>
          <a href="#support" className="hover:text-gray-900">Support</a>
          <a href="#terms" className="hover:text-gray-900">Terms</a>
          <a href="#socials" className="hover:text-gray-900">Socials</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
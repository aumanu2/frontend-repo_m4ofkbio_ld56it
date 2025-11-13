function Footer() {
  return (
    <footer className="border-t border-[#E6ECF1] dark:border-white/10 bg-white/70 dark:bg-transparent backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm flex items-center gap-2 text-[#1C1C1E]/70 dark:text-[#EAEAEA]/70">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#007BFF] via-[#00C2FF] to-[#339DFF] shadow-[0_0_18px_rgba(0,194,255,0.35)]" />
          <span>© 2025 Aggentify AI</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-[#1C1C1E]/70 dark:text-[#EAEAEA]/70">
          <a href="#docs" className="hover:text-[#1C1C1E] dark:hover:text-white">Docs</a>
          <a href="#support" className="hover:text-[#1C1C1E] dark:hover:text-white">Support</a>
          <a href="#terms" className="hover:text-[#1C1C1E] dark:hover:text-white">Terms</a>
          <a href="#socials" className="hover:text-[#1C1C1E] dark:hover:text-white">Socials</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (enabled) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [enabled])

  return (
    <button
      aria-label={enabled ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setEnabled((v) => !v)}
      className={`relative inline-flex h-8 w-14 items-center rounded-full border transition-all focus:outline-none shadow-sm hover:shadow ${
        enabled
          ? 'bg-[#0E1117] border-cyan-400/40 ring-1 ring-cyan-400/30'
          : 'bg-white border-blue-500/40 ring-1 ring-blue-500/20'
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full transition-all shadow ${
          enabled
            ? 'translate-x-7 bg-cyan-400/90 shadow-cyan'
            : 'translate-x-1 bg-blue-500 shadow-blue'
        }`}
      />
    </button>
  )
}

export default ThemeToggle

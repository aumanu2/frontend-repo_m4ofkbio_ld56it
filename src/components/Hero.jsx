import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-10">
          <div className="pointer-events-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1C1E] dark:text-[#EAEAEA]">
              Aggentify AI — Build, Market, and Deploy AI Agents.
            </h1>
            <p className="mt-6 text-lg text-[#1C1C1E]/80 dark:text-[#EAEAEA]/80 max-w-xl">
              Create production‑ready agents with a no‑code builder, sell them in the marketplace, and embed them anywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/create" className="inline-flex items-center rounded-[12px] bg-[#007BFF] text-white px-6 py-3 text-sm font-medium shadow hover:bg-[#339DFF] hover:shadow-[0_12px_28px_rgba(0,123,255,0.35)] transition">
                Create Free Agent
              </Link>
              <a href="#demo" className="inline-flex items-center rounded-[12px] border border-[#007BFF] bg-white text-[#007BFF] px-6 py-3 text-sm font-medium shadow-sm hover:bg-[#F0F7FF] dark:bg-transparent dark:text-[#00C2FF] dark:border-[#00C2FF] dark:hover:bg-white/5 transition">
                Watch Demo
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="pointer-events-auto bg-white/70 dark:bg-[#1E252F]/70 backdrop-blur rounded-2xl shadow-xl p-6 border border-white/60 dark:border-cyan-400/20">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C2FF] shadow-[0_0_24px_rgba(0,194,255,0.35)]" />
                  <p className="mt-2 text-sm text-[#1C1C1E]/80 dark:text-[#EAEAEA]/80">Upload</p>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-[#1C1C1E]/40 dark:text-[#EAEAEA]/40">→</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#339DFF] shadow-[0_0_24px_rgba(0,194,255,0.35)]" />
                  <p className="mt-2 text-sm text-[#1C1C1E]/80 dark:text-[#EAEAEA]/80">Chat</p>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <span className="text-[#1C1C1E]/40 dark:text-[#EAEAEA]/40">↓</span>
                </div>
                <div className="col-span-3 flex flex-col items-center">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C2FF] shadow-[0_0_24px_rgba(0,194,255,0.35)]" />
                  <p className="mt-2 text-sm text-[#1C1C1E]/80 dark:text-[#EAEAEA]/80">Deploy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

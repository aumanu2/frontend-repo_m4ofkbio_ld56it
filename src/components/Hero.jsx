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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Build Your Own Custom AI Agent in Minutes — No Code.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Upload your data, train your agent, and deploy instantly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/create" className="inline-flex items-center rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-black transition">
                Create Free Agent
              </Link>
              <a href="#demo" className="inline-flex items-center rounded-xl border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm font-medium shadow-sm hover:bg-gray-50 transition">
                Watch Demo
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="pointer-events-auto bg-white/70 backdrop-blur rounded-2xl shadow-xl p-6 border border-white/60">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-inner" />
                  <p className="mt-2 text-sm text-gray-600">Upload</p>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-400">→</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-inner" />
                  <p className="mt-2 text-sm text-gray-600">Chat</p>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <span className="text-gray-400">↓</span>
                </div>
                <div className="col-span-3 flex flex-col items-center">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-fuchsia-500 shadow-inner" />
                  <p className="mt-2 text-sm text-gray-600">Deploy</p>
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
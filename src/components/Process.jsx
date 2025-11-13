import { Upload, Sandwich, MessageSquare, Rocket } from 'lucide-react'

function Process() {
  const steps = [
    { icon: Upload, label: 'Upload' },
    { icon: Sandwich, label: 'Embed' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Rocket, label: 'Deploy' },
  ]

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center">
                <s.icon className="h-7 w-7 text-gray-700" />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">{s.label}</p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block mt-2 text-gray-300">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
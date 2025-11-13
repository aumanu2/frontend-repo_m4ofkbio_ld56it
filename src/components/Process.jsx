import { Upload, Code2, MessageSquare, Rocket } from 'lucide-react'

function Process() {
  const steps = [
    { icon: Upload, label: 'Upload' },
    { icon: Code2, label: 'Configure' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Rocket, label: 'Deploy' },
  ]

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-white dark:bg-[#1E252F] shadow-sm border border-[#E6ECF1] dark:border-cyan-400/20 flex items-center justify-center transition transform hover:scale-105">
                <s.icon className="h-7 w-7 text-[#1C1C1E] dark:text-[#EAEAEA]" />
              </div>
              <p className="mt-3 text-sm font-medium text-[#1C1C1E] dark:text-[#EAEAEA]">{s.label}</p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block mt-2 text-[#1C1C1E]/30 dark:text-[#EAEAEA]/30">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

function Pricing() {
  const plans = [
    { name: 'Starter', price: '$0', features: ['1 Agent', '200 Messages/mo', 'Basic Embeds'] },
    { name: 'Pro', price: '$29', features: ['5 Agents', '10k Messages/mo', 'Custom Themes', 'API Access'] },
    { name: 'Enterprise', price: 'Contact', features: ['Unlimited Agents', 'SLA & SSO', 'Dedicated Support'] },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1E] dark:text-[#EAEAEA] text-center">Simple, transparent pricing</h2>
        <p className="mt-3 text-[#1C1C1E]/70 dark:text-[#EAEAEA]/70 text-center">Start free, scale when you do.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-[20px] bg-white dark:bg-[#1E252F] border border-[#E6ECF1] dark:border-cyan-400/20 shadow-sm p-6 transition transform hover:scale-[1.02] hover:shadow-xl">
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#007BFF] via-[#00C2FF] to-[#339DFF] mb-5" />
              <h3 className="text-xl font-semibold text-[#1C1C1E] dark:text-white">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold text-[#1C1C1E] dark:text-white">{p.price}<span className="text-base font-medium text-[#1C1C1E]/60 dark:text-[#EAEAEA]/60">{p.name==='Pro'?'/mo':''}</span></p>
              <ul className="mt-4 space-y-2 text-sm text-[#1C1C1E]/80 dark:text-[#EAEAEA]/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#007BFF] to-[#00C2FF]" />{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-[12px] bg-[#007BFF] text-white py-2 text-sm font-medium hover:bg-[#339DFF] hover:shadow-[0_12px_28px_rgba(0,123,255,0.35)]">Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

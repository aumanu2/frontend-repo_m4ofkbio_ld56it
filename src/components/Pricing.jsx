function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['1 Agent', '100 Messages/mo', 'Basic Embeds'] },
    { name: 'Pro', price: '$29', features: ['5 Agents', '10k Messages/mo', 'Custom Themes', 'API Access'] },
    { name: 'Enterprise', price: 'Contact', features: ['Unlimited Agents', 'SLA & SSO', 'Dedicated Support'] },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Simple, transparent pricing</h2>
        <p className="mt-3 text-gray-600 text-center">Start free, scale when you do.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{p.price}<span className="text-base font-medium text-gray-500">{p.name==='Pro'?'/mo':''}</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2 text-sm font-medium hover:opacity-95">Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
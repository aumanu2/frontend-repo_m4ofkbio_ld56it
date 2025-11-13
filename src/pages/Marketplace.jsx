import Layout from '../components/Layout'

function Card() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500" />
        <div>
          <p className="font-medium text-gray-900">Onboarding Assistant</p>
          <p className="text-sm text-gray-500">Business</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-600">★★★★★</div>
        <button className="rounded-lg bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-black">Use Now</button>
      </div>
    </div>
  )
}

function Marketplace() {
  return (
    <Layout>
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-64 bg-white border border-gray-200 rounded-2xl p-4 h-fit">
              <h3 className="font-semibold">Filters</h3>
              <div className="mt-3 space-y-2 text-sm text-gray-700">
                {['Business', 'Education', 'Support', 'HR'].map((f) => (
                  <label key={f} className="flex items-center gap-2"><input type="checkbox" /> {f}</label>
                ))}
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-3">
                <input className="flex-1 rounded-xl border border-gray-300 px-3 py-2" placeholder="Search agents" />
                <select className="rounded-xl border border-gray-300 px-3 py-2">
                  <option>Category</option>
                  <option>Rating</option>
                  <option>Price</option>
                </select>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <Card key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Marketplace
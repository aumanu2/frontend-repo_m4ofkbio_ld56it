import Layout from '../components/Layout'

function Card() {
  return (
    <div className="rounded-[20px] border border-[#E6ECF1] dark:border-cyan-400/20 bg-white dark:bg-[#1E252F] p-4 shadow-sm transition transform hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00C2FF] shadow-[0_0_18px_rgba(0,194,255,0.35)]" />
        <div>
          <p className="font-medium text-[#1C1C1E] dark:text-white">Onboarding Assistant</p>
          <p className="text-sm text-[#1C1C1E]/60 dark:text-[#EAEAEA]/60">Business</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-[#1C1C1E]/70 dark:text-[#EAEAEA]/70">★★★★★</div>
        <button className="rounded-[12px] bg-[#007BFF] text-white px-3 py-1.5 text-sm hover:bg-[#339DFF] hover:shadow-[0_8px_24px_rgba(0,123,255,0.35)]">Use Now</button>
      </div>
    </div>
  )
}

function Marketplace() {
  return (
    <Layout>
      <section className="">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-64 bg-white dark:bg-[#1E252F] border border-[#E6ECF1] dark:border-cyan-400/20 rounded-[20px] p-4 h-fit">
              <h3 className="font-semibold text-[#1C1C1E] dark:text-white">Filters</h3>
              <div className="mt-3 space-y-2 text-sm text-[#1C1C1E] dark:text-[#EAEAEA]">
                {['Business', 'Education', 'Support', 'HR'].map((f) => (
                  <label key={f} className="flex items-center gap-2"><input type="checkbox" className="accent-[#007BFF]" /> {f}</label>
                ))}
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-3">
                <input className="flex-1 rounded-[12px] border border-[#E6ECF1] dark:border-cyan-400/20 bg-white dark:bg-transparent px-3 py-2 text-[#1C1C1E] dark:text-[#EAEAEA]" placeholder="Search agents" />
                <select className="rounded-[12px] border border-[#E6ECF1] dark:border-cyan-400/20 bg-white dark:bg-transparent px-3 py-2 text-[#1C1C1E] dark:text-[#EAEAEA]">
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

import Layout from '../components/Layout'

function AgentChat() {
  return (
    <Layout>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500" />
                <div>
                  <h1 className="text-lg font-semibold">AgentForge Demo Agent</h1>
                  <p className="text-sm text-gray-500">★★★★★ 4.9</p>
                </div>
              </div>
              <button className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm hover:bg-black">Clone this Agent</button>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm h-[560px] flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-3 p-2">
                <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800 shadow-sm">Hi there! Ask me about features, pricing, or setup.</div>
                <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm text-white shadow-sm ml-auto">What models do you support?</div>
                <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800 shadow-sm">GPT-4 family, Claude 3.5, and more — configurable per agent.</div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <input placeholder="Type a message..." className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="rounded-xl bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black">Send</button>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold">About this Agent</h3>
              <p className="mt-2 text-sm text-gray-600">Built for product onboarding and support FAQs, trained on docs and changelogs.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold">Similar Agents</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li>Sales Assistant</li>
                <li>Education Tutor</li>
                <li>HR Onboarding Bot</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}

export default AgentChat
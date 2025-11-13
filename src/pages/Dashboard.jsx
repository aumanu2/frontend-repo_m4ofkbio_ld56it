import Layout from '../components/Layout'

function AgentCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500" />
          <div>
            <p className="font-medium text-gray-900">Support Assistant</p>
            <p className="text-sm text-gray-500">Updated 2d ago</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">Test</button>
          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">Edit</button>
          <button className="rounded-lg bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-black">Share</button>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  const items = ['My Agents', 'Create Agent', 'Billing', 'API Keys', 'Settings']
  return (
    <aside className="hidden md:flex w-64 flex-col gap-1 bg-gray-950 text-gray-200 p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500" />
        <span className="font-semibold">AgentForge</span>
      </div>
      {items.map((i) => (
        <button key={i} className="text-left rounded-lg px-3 py-2 hover:bg-white/10">{i}</button>
      ))}
    </aside>
  )
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
              <h1 className="text-lg font-semibold">Welcome back, Taylor</h1>
              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 text-sm font-medium">+ Create Agent</button>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <AgentCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
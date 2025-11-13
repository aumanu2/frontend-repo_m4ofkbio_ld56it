function DemoSection() {
  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Try a Live Demo Agent</h2>
            <p className="mt-4 text-gray-600 max-w-prose">Experience how your customers will interact before you publish. Type below to see responses and refine your prompt.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
            <div className="h-80 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-3 p-2">
                <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800 shadow-sm">Hi! I’m AgentForge. Ask me anything about your product docs.</div>
                <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm text-white shadow-sm ml-auto">Show me how to embed this on my site.</div>
                <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800 shadow-sm">You can paste a simple script tag or use our React component. Go to Publish → Embed to copy.</div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <input placeholder="Type a message..." className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="rounded-xl bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection
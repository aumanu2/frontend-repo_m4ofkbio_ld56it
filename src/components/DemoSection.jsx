function DemoSection() {
  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1E] dark:text-[#EAEAEA]">Try a Live Demo Agent</h2>
            <p className="mt-4 text-[#1C1C1E]/70 dark:text-[#EAEAEA]/70 max-w-prose">Experience how customers will interact before you publish. Type below to see responses and refine your prompt.</p>
          </div>

          <div className="rounded-[20px] border border-[#E6ECF1] dark:border-cyan-400/20 bg-white dark:bg-[#1E252F] shadow-sm p-4 transition hover:shadow-xl">
            <div className="h-80 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-3 p-2">
                <div className="max-w-[80%] rounded-2xl bg-[#F1F5F9] dark:bg-white/5 px-4 py-3 text-sm text-[#1C1C1E] dark:text-[#EAEAEA] shadow-sm">Hi! I’m Aggentify. Ask me anything about your product docs.</div>
                <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-[#007BFF] to-[#00C2FF] px-4 py-3 text-sm text-white shadow-sm ml-auto">Show me how to embed this on my site.</div>
                <div className="max-w-[80%] rounded-2xl bg-[#F1F5F9] dark:bg-white/5 px-4 py-3 text-sm text-[#1C1C1E] dark:text-[#EAEAEA] shadow-sm">You can paste a simple script tag or use our React component. Go to Publish → Embed to copy.</div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <input placeholder="Type a message..." className="flex-1 rounded-[12px] border border-[#E6ECF1] dark:border-cyan-400/20 bg-white dark:bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]" />
                <button className="rounded-[12px] bg-[#007BFF] text-white text-sm px-4 py-2 hover:bg-[#339DFF] hover:shadow-[0_8px_24px_rgba(0,123,255,0.35)]">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection

import { useState } from 'react'
import Layout from '../components/Layout'

const steps = [
  { id: 1, title: 'Upload Data' },
  { id: 2, title: 'Configure Agent' },
  { id: 3, title: 'Customize UI' },
  { id: 4, title: 'Test Agent' },
  { id: 5, title: 'Publish' },
]

function Stepper({ current }) {
  return (
    <div className="sticky top-16 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center gap-3">
          {steps.map((s, i) => {
            const active = current === s.id
            const done = s.id < current
            return (
              <div key={s.id} className="flex items-center gap-3">
                <div className={`h-8 px-3 rounded-full text-sm flex items-center justify-center border ${active ? 'bg-gray-900 text-white border-gray-900' : done ? 'bg-gray-900/10 text-gray-700 border-gray-300' : 'bg-white text-gray-600 border-gray-300'}`}>
                  {s.id}. {s.title}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-1 w-8 bg-gray-200 rounded-full" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function CreateAgent() {
  const [current, setCurrent] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50">
      <Stepper current={current} />
      <div className="mx-auto max-w-7xl px-6 py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {current === 1 && (
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Upload Data</h2>
              <p className="text-gray-600 mt-2">Upload files or add links to train your agent.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <label className="flex-1 rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-600 cursor-pointer hover:bg-gray-50">
                  <input type="file" className="hidden" />
                  + Upload file
                </label>
                <input placeholder="https://add-a-link.com" className="flex-1 rounded-xl border border-gray-300 px-3 py-2" />
              </div>
            </div>
          )}

          {current === 2 && (
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold">Configure Agent</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="My Support Agent" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Tone</label>
                  <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Friendly, concise" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Model</label>
                  <select className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2">
                    <option>GPT-4o</option>
                    <option>GPT-4.1</option>
                    <option>Claude 3.5</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">System Prompt</label>
                  <textarea rows={6} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="You are a helpful AI assistant..." />
                </div>
              </div>
            </div>
          )}

          {current === 3 && (
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold">Customize UI</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Avatar</label>
                  <div className="mt-2 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Color Theme</label>
                  <div className="mt-2 flex gap-3">
                    {["blue","violet","fuchsia"].map((c) => (
                      <div key={c} className={`h-10 w-10 rounded-xl bg-gradient-to-br from-${c}-500 to-${c==='blue'?'violet':'fuchsia'}-500`} />
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">Chat Style</label>
                  <select className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2">
                    <option>Bubbly</option>
                    <option>Minimal</option>
                    <option>Glass</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {current === 4 && (
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Test Agent</h2>
              <div className="mt-4 h-96 rounded-2xl border border-gray-200 p-4 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-3 p-2">
                  <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800 shadow-sm">Hi! Upload your docs and ask a question.</div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <input placeholder="Type a message..." className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="rounded-xl bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black">Send</button>
                </div>
              </div>
            </div>
          )}

          {current === 5 && (
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold">Publish</h2>
              <div>
                <label className="text-sm text-gray-600">Embed Code</label>
                <pre className="mt-2 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs overflow-x-auto">{`<script src="https://agentforge.ai/embed.js" data-agent-id="123"></script>`}</pre>
              </div>
              <div>
                <label className="text-sm text-gray-600">API</label>
                <pre className="mt-2 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs overflow-x-auto">{`POST /v1/agents/123/messages\nAuthorization: Bearer sk_***\n{\n  "content": "Hello!"\n}`}</pre>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button disabled={current===1} onClick={()=>setCurrent((c)=>c-1)} className="rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 disabled:opacity-40">Back</button>
            <button disabled={current===5} onClick={()=>setCurrent((c)=>c+1)} className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40">Next</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold">Help & Tips</h3>
            <p className="mt-2 text-sm text-gray-600">Keep your prompt concise. Use Upload to add product docs and knowledge base links.</p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold">Publishing Checklist</h3>
            <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Train on your latest docs</li>
              <li>Set a friendly tone</li>
              <li>Customize to match brand</li>
              <li>Embed on your site</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAgent
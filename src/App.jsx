import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import CreateAgent from './pages/CreateAgent'
import Marketplace from './pages/Marketplace'
import AgentChat from './pages/AgentChat'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<CreateAgent />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/agent" element={<AgentChat />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  )
}

export default App
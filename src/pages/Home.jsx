import Hero from '../components/Hero'
import Process from '../components/Process'
import DemoSection from '../components/DemoSection'
import Pricing from '../components/Pricing'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <Hero />
      <Process />
      <DemoSection />
      <Pricing />
    </Layout>
  )
}

export default Home

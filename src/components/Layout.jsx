import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-[#E6ECF1] text-[#1C1C1E] dark:from-[#0E1117] dark:to-[#161B22] dark:text-[#EAEAEA] transition-colors">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

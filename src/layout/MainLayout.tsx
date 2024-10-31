import { Footer } from "../components/Common/Footer"
import { Navbar } from "../components/Common/Navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      <section className="mt-[-50px] z-10 container">
        {children}
      </section>
      <Footer />
    </div>
  )
}
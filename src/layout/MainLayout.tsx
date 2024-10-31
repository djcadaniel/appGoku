import { Footer } from "../components/Common/Footer"
import { Navbar } from "../components/Common/Navbar"
import logo from '/logo.png'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="relative">
      <img src={logo} alt="" className='absolute top-8 lg:top-5 left-[3%] lg:left-[40%] h-[5rem] lg:h-[7rem] z-50'/>
      <Navbar />
      <section className="mt-[-50px] z-10 container">
        {children}
      </section>
      <Footer />
    </div>
  )
}
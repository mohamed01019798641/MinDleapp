import Navbar from "./components/Navbar"
import './App.css'
import Services from "./components/Services"
import Hero from "./components/Hero"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"
import Workin from "./components/Workin"

import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-primary overflow-hidden ">
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Workin/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App

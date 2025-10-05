
import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>
      <Navbar />
      <main className="pt-24">
      <Hero />
      <Gallery />
      <Testimonials />
      <Footer />
      </main>
    </>
  )
}

export default App

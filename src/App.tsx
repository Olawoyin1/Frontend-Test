
import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

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

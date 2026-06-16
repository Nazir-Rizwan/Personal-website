import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

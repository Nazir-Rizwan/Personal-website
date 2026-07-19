import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 overflow-x-hidden">
      <Sidebar />
      <div className="lg:pl-[300px] xl:pl-[340px] pt-[68px] lg:pt-0">
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

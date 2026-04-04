import './styles/global.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Hero from './components/Hero/Hero.tsx'
import About from './components/About/About.tsx'
import Automation from './components/Automation/Automation.tsx'
import Projects from './components/Projects/Projects.tsx'
import Contact from './components/Contact/Contact.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Automation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
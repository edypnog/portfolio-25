import './index.css'
import { Hero } from './components/Hero'
import { AboutMe } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'

function App() {
  return (
    <>
      <Hero/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App

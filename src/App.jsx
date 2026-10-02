import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Kerb from './components/Kerb.jsx'
import LanguageIdentifier from './components/LanguageIdentifier.jsx'
import Background from './components/Background.jsx'
import Tools from './components/Tools.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <section id="work" aria-label="Work">
        <Kerb />
        <LanguageIdentifier />
      </section>
      <Background />
      <Tools />
      <Contact />
      <footer className="foot">
        <span>Mustafa Tony &middot; Egypt</span>
        <span>2026</span>
      </footer>
    </div>
  )
}

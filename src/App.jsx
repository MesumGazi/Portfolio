import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { fallbackPortfolio } from './data/fallbackPortfolio'
import { SECTION_IDS } from './data/Navigation'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const portfolio = fallbackPortfolio
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar name={portfolio.profile.name} activeSection={activeSection} />

      <main id="main">
        <Hero profile={portfolio.profile} />
        <Projects projects={portfolio.projects} />
        <Experience experience={portfolio.experience} />
        <Contact socials={portfolio.socials} />
      </main>

      <Footer lastUpdated={portfolio.profile.lastUpdated} />
    </>
  )
}
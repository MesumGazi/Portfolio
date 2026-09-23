import { NAV_ITEMS } from '../data/Navigation'
import { scrollToSection } from '../lib/scrollToSection'

export default function Navbar({ name, activeSection }) {
  function handleNavClick(event, id) {
    event.preventDefault() // keep the URL clean, no reload, no jump
    scrollToSection(id)
  }

  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Primary">
        <a
          className="nav__brand"
          href="#home"
          onClick={(event) => handleNavClick(event, 'home')}
        >
          {name}
        </a>

        <ul className="nav__links">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li key={item.id}>
                <a
                  className={`nav__link${isActive ? ' is-active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
import { useState, useEffect } from 'react'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Automation', href: '#automation' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  /* ── Scroll: solidify nav background ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>

          {/* Logo */}
          <a
            href="#home"
            className={styles.logo}
            onClick={e => { e.preventDefault(); handleLinkClick('#home') }}
            aria-label="Emmanuel Owoeye — home"
          >
            <span className={styles.logoText}>EO</span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                onClick={e => { e.preventDefault(); handleLinkClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${activeSection === link.href.slice(1) ? styles.mobileActive : ''}`}
              style={{ '--i': i } as React.CSSProperties}
              onClick={e => { e.preventDefault(); handleLinkClick(link.href) }}
            >
              <span className={styles.mobileLinkNumber}>0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
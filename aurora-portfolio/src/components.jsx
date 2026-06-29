import { Link } from 'react-router-dom'

export function Blobs() {
  return (
    <div className="blobs">
      <div
        className="blob"
        style={{
          width: 560, height: 560,
          top: -160, right: -120,
          background: 'radial-gradient(circle, rgba(124,108,255,0.42), transparent 68%)',
          animation: 'drift 17s ease-in-out infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: 600, height: 600,
          top: 340, left: -200,
          background: 'radial-gradient(circle, rgba(46,139,255,0.34), transparent 68%)',
          animation: 'drift 21s ease-in-out infinite reverse',
        }}
      />
      <div
        className="blob"
        style={{
          width: 520, height: 520,
          top: 1500, right: -140,
          background: 'radial-gradient(circle, rgba(90,201,255,0.30), transparent 68%)',
          animation: 'drift 19s ease-in-out infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: 480, height: 480,
          top: 2400, left: -120,
          background: 'radial-gradient(circle, rgba(124,108,255,0.30), transparent 68%)',
          animation: 'drift 23s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}

// variant="home" uses same-page anchors (native smooth scroll).
// variant="sub" uses client-side links back to the homepage sections, so
// navigating from a sub-page lands precisely (no full reload, no font-load shift).
export function Nav({ variant = 'home' }) {
  if (variant === 'home') {
    return (
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav-wordmark">Riva Fouzdar</Link>
          <div className="nav-links">
            <a href="#work" className="nav-link">Work</a>
            <a href="#approach" className="nav-link">Approach</a>
            <a href="#contact" className="nav-cta">Get in touch</a>
          </div>
        </nav>
      </div>
    )
  }
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="nav-wordmark">Riva Fouzdar</Link>
        <div className="nav-links">
          <Link to="/#work" className="nav-link">Work</Link>
          <Link to="/#approach" className="nav-link">Approach</Link>
          <Link to="/#contact" className="nav-cta">Get in touch</Link>
        </div>
      </nav>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Riva Fouzdar</span>
      <span>Designed & built in code</span>
      <span>SF Bay Area</span>
    </footer>
  )
}

// Clearly labeled placeholder for a visual to be added later.
// `tag` lets a page say e.g. "Sanitized screenshot to be added".
export function Figure({ label, caption, tall, tag = 'Visual placeholder' }) {
  return (
    <figure className={`cs-figure${tall ? ' cs-figure-tall' : ''}`}>
      <div className="cs-figure-inner">
        <span className="cs-figure-tag">{tag}</span>
        <span className="cs-figure-label">{label}</span>
      </div>
      {caption && <figcaption className="cs-figure-caption">{caption}</figcaption>}
    </figure>
  )
}

// Inline placeholder for a specific number or quote to drop in later.
export function Pending({ children }) {
  return <span className="cs-pending">{children}</span>
}

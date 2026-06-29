import { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Blobs, Nav, Footer } from '../components.jsx'
import { workItems, services } from '../data.js'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="availability-badge">
          <span className="availability-dot" />
          Open to Senior Product Designer roles
        </div>
        <h1 className="hero-h1">
          Hi, I'm Riva. I lead AI product design from <span className="grad-text">strategy to launch.</span>
        </h1>
        <div className="hero-sub-row">
          <p className="hero-desc">
            Senior UX Designer at AWS, leading design for AWS Marketplace and the agentic experiences embedded inside Claude and ChatGPT. I work at the edge where design, engineering, and AI meet — not adjacent to it. The goal is always the same: meaningful, human-centered products that solve real problems.
          </p>
          <div className="hero-stats">
            <div className="stat-row">
              <span>LOCATION</span>
              <span className="stat-value">San Francisco, Bay Area</span>
            </div>
            <div className="stat-row stat-row-edu">
              <span>EDUCATION</span>
              <span className="stat-value stat-value-edu">
                Carnegie Mellon University
                <span className="stat-degree">B.S. Human-Computer Interaction (HCI)</span>
                <span className="stat-degree">B.S. Business Administration, Data Analytics concentration</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Previously() {
  const companies = ['Workday', 'SAP · SAP.iO', 'Ford', 'Groupon', 'Uber']
  return (
    <div className="container">
      <div className="previously">
        <span className="prev-label">Previously</span>
        {companies.map((c, i) => (
          <Fragment key={c}>
            {i > 0 && <span className="prev-divider">/</span>}
            <span className="prev-company">{c}</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function WorkCard({ item }) {
  const inner = (
    <>
      <div className="card-thumb" style={{ background: item.gradient }}>
        <div className="card-thumb-accent" />
        <span className="card-num">{item.num}</span>
        <span className="card-chip">{item.chip}</span>
      </div>
      <div className="card-body">
        <div className="card-title-row">
          <span className="card-title">{item.title}</span>
          <span className="card-arrow">↗</span>
        </div>
        <p className="card-desc">{item.desc}</p>
      </div>
    </>
  )

  // Cards with a route link through; the rest stay non-navigating for now.
  if (item.to) {
    return <Link className="work-card" to={item.to}>{inner}</Link>
  }
  return (
    <a className="work-card" href="#" onClick={e => e.preventDefault()}>{inner}</a>
  )
}

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <span className="section-count">06 case studies</span>
        </div>
        <div className="work-grid">
          {workItems.map(item => <WorkCard key={item.num} item={item} />)}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="approach-section">
      <div className="container">
        <div className="approach-grid">
          <div>
            <p className="approach-eyebrow">Approach</p>
            <h3 className="approach-h3">
              I don't stop at the handoff. I write the code and <span className="grad-text">ship it.</span>
            </h3>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.num} className="service-card">
                <div className="service-icon">{s.num}</div>
                <p className="service-title">{s.title}</p>
                <p className="service-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-circle contact-circle-1" />
          <div className="contact-circle contact-circle-2" />
          <div className="contact-content">
            <p className="contact-eyebrow">Open to Senior Product Designer roles — AI companies</p>
            <a href="mailto:hello@rivafouzdar.com" className="contact-headline">
              Let's build something<span className="contact-br"><br /></span>{' '}people use every&nbsp;day&nbsp;→
            </a>
            <div className="contact-buttons">
              <a href="mailto:hello@rivafouzdar.com" className="btn-solid">Email ↗</a>
              <a href="#" className="btn-outline">LinkedIn ↗</a>
              <a href="#" className="btn-outline">Résumé ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { hash } = useLocation()

  // When arriving from another page with a hash (e.g. /#work), jump to that
  // section after a layout frame. Instant (not smooth) so it lands reliably
  // regardless of the global scroll-behavior and StrictMode double-mount.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (!el) return
    const id = requestAnimationFrame(() => {
      el.scrollIntoView({ block: 'start', behavior: 'instant' })
    })
    return () => cancelAnimationFrame(id)
  }, [hash])

  return (
    <div style={{ position: 'relative' }}>
      <Blobs />
      <Nav variant="home" />
      <Hero />
      <Previously />
      <Work />
      <Approach />
      <Contact />
      <Footer />
    </div>
  )
}

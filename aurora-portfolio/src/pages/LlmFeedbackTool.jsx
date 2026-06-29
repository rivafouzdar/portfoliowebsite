import { Link } from 'react-router-dom'
import { Blobs, Nav, Footer, Figure, Pending } from '../components.jsx'

const SHOT = 'Sanitized screenshot to be added'

const features = [
  {
    num: '01',
    title: 'Survey builder with live preview',
    body: 'Admins assemble a questionnaire from a palette of question types (rating, ranking, pairwise comparison, multi-select, binary, free text), drag to reorder, and choose which dataset columns evaluators see. A live preview shows exactly what the evaluator will get as they build it.',
  },
  {
    num: '02',
    title: 'Six evaluation modes',
    body: 'Different modes fit different judgment tasks, so one tool covers many study types.',
  },
  {
    num: '03',
    title: 'Keyboard-first evaluation interface',
    body: 'Built for high-throughput work: single-key shortcuts, a context-sensitive shortcut legend, and shortcuts that disable while typing in a field.',
  },
  {
    num: '04',
    title: 'Auto-save and a skip-and-return queue',
    body: 'Evaluators never lose partial work, and can defer hard items to the end.',
  },
  {
    num: '05',
    title: 'Per-evaluator progress tracking',
    body: 'Admins see each evaluator\'s progress, with one-click results export.',
  },
  {
    num: '06',
    title: 'Assignment via the people directory',
    body: 'Evaluator assignment through autocomplete against the internal people directory.',
  },
  {
    num: '07',
    title: 'Built-in handling for sensitive data',
    body: 'A clear warning and a required acknowledgment before any dataset is uploaded, and a design that keeps raw evaluation content out of places it should not go.',
  },
  {
    num: '08',
    title: 'Accessibility throughout',
    body: 'Visible focus states, keyboard navigation, ARIA on custom components, and skip-to-content.',
  },
  {
    num: '09',
    title: 'Light and dark themes, internal-native',
    body: 'A hybrid that uses the company design system for data-heavy views and custom UI for the interactive builder.',
  },
]

export default function LlmFeedbackTool() {
  return (
    <div style={{ position: 'relative' }}>
      <Blobs />
      <Nav variant="sub" />

      <article className="cs container">
        <Link to="/#work" className="cs-back">← Back to work</Link>

        {/* 1. Hook */}
        <header className="cs-hook">
          <p className="cs-eyebrow">Case Study</p>
          <h1 className="cs-title">
            Internal <span className="grad-text">LLM Feedback Tool</span>
          </h1>
          <p className="cs-lead">
            An internal web app for collecting structured human feedback on AI agent
            outputs. Subject-matter experts log in, see the outputs assigned to them, and
            evaluate them row by row through a survey-style interface. I designed the tool
            and built the entire frontend, from a solo two-week prototype to the shipped
            app, and partnered with an engineer who built the production backend.
          </p>

          <dl className="cs-meta">
            <div className="cs-meta-item">
              <dt>Role</dt>
              <dd>Design + full frontend</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Type</dt>
              <dd>Internal web app</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Stack</dt>
              <dd>React, TypeScript, Vite</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Timeline</dt>
              <dd><Pending>[Add dates]</Pending></dd>
            </div>
          </dl>
        </header>

        {/* 2. The problem */}
        <section className="cs-section">
          <p className="cs-eyebrow">The Problem</p>
          <h2 className="cs-h2">No good way to collect expert feedback at scale</h2>
          <div className="cs-body">
            <p>
              Teams needed domain experts to judge the quality of AI agent outputs, things
              like search relevance and predictions, against their own expertise. There was
              no good way to collect that feedback at scale.
            </p>
            <p>
              General-purpose labeling tools used annotation jargon that non-technical
              evaluators found confusing, and they did not cleanly separate one evaluator's
              responses from another's. Off-the-shelf survey tools could not connect to
              internal sign-in, internal datasets, or the internal people directory. So
              feedback collection was ad hoc, hard to track, and did not scale to real
              evaluation studies.
            </p>
          </div>
        </section>

        {/* 3. My role */}
        <section className="cs-section">
          <p className="cs-eyebrow">My Role</p>
          <h2 className="cs-h2">What I did</h2>
          <div className="cs-body">
            <p>
              I designed the experience and built the entire frontend end to end. I started
              with a solo prototype, built in about two weeks, then developed the full
              application: the survey builder, the evaluation interface, and all of the admin
              and evaluator UX.
            </p>
            <p>
              I worked spec-first with Kiro, writing requirements and an ordered task plan
              before building, and using it to move from spec to working code quickly.
            </p>
            <p>
              I partnered with a senior engineer who stood up the production backend (the
              database, API, and infrastructure). After handoff we kept working in the same
              repo through code reviews, me on frontend and UX, him on backend.
            </p>
          </div>
        </section>

        {/* 4. Process */}
        <section className="cs-section">
          <p className="cs-eyebrow">Process</p>
          <h2 className="cs-h2">Build versus buy, then build</h2>
          <div className="cs-body">
            <p>
              Before building anything, I ran a build-versus-buy evaluation. I compared
              external tools and another internal team's evaluation platform against what
              this actually needed. The deciding factors were:
            </p>
            <ul className="cs-list">
              <li>Simpler language for non-technical evaluators.</li>
              <li>Support for any dataset shape, rather than a fixed schema.</li>
              <li>Configurable surveys per project.</li>
              <li>Integration with internal sign-in and the people directory.</li>
              <li>Keeping each evaluator's responses isolated.</li>
            </ul>
            <p>
              None of the existing options covered that combination, so I built a focused
              tool that did. I worked spec-first so there was a clear line from each
              requirement to the design to the code, which made it easy to scope work and
              hand off cleanly.
            </p>
          </div>
        </section>

        {/* 5. Key features */}
        <section className="cs-section">
          <p className="cs-eyebrow">Key Features</p>
          <h2 className="cs-h2">What I built</h2>

          <div className="cs-features">
            {features.map(f => (
              <div key={f.num} className="cs-audience">
                <div className="cs-audience-num">{f.num}</div>
                <h3 className="cs-audience-who">{f.title}</h3>
                <p className="cs-audience-body">{f.body}</p>
              </div>
            ))}
          </div>

          <Figure tag={SHOT} tall label="Survey builder with live preview" />
          <Figure tag={SHOT} tall label="Keyboard-first evaluation interface" />
          <Figure tag={SHOT} tall label="Admin progress and results export view" />
        </section>

        {/* 6. How it's built */}
        <section className="cs-section">
          <p className="cs-eyebrow">How It's Built</p>
          <h2 className="cs-h2">The stack, and a deliberate hybrid UI</h2>
          <div className="cs-body">
            <p>
              The frontend is React 18 and TypeScript, built with Vite. The UI is a
              deliberate hybrid. I used the company's open-source design system, Cloudscape,
              for data-heavy views like tables, alerts, and loading states, where its
              accessible components saved real work, and I built custom CSS for the
              interactive parts it did not cover well: the survey builder, the live preview,
              and the evaluation interface.
            </p>
            <p>
              Full light and dark theming runs through CSS custom properties, so a single
              toggle re-themes both the custom UI and the design-system components. I worked
              spec-first with Kiro.
            </p>
            <p>
              The production backend, built by the engineer I partnered with, is a serverless
              API over a managed NoSQL database, behind internal sign-in and an admin
              authorization layer. I designed against that API and consumed it from the
              frontend.
            </p>
          </div>
        </section>

        {/* 7. Impact */}
        <section className="cs-section">
          <p className="cs-eyebrow">Impact</p>
          <h2 className="cs-h2">Where it stands</h2>
          <div className="cs-body">
            <p>
              Shipped to an internal beta and built to support real evaluation studies with
              internal domain experts. The core evaluation workflow is feature-complete and
              deployed.
            </p>
          </div>

          <div className="cs-metrics">
            <div className="cs-metric">
              <span className="cs-metric-value"><Pending>[Add number]</Pending></span>
              <span className="cs-metric-label">Evaluators onboarded</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value"><Pending>[Add number]</Pending></span>
              <span className="cs-metric-label">Feedback volume collected</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value"><Pending>[Add number]</Pending></span>
              <span className="cs-metric-label">Studies supported</span>
            </div>
          </div>
          <p className="cs-body" style={{ marginTop: 16 }}>
            <Pending>[Add specific numbers when cleared to share.]</Pending>
          </p>
        </section>

        {/* 8. Reflection */}
        <section className="cs-section">
          <p className="cs-eyebrow">Reflection</p>
          <h2 className="cs-h2">What I took from it</h2>
          <div className="cs-body">
            <p>
              Designing for a small group of domain experts is different from designing for a
              broad audience. The people using this knew their field deeply but did not think
              in annotation terms, so the win was removing jargon and friction, not adding
              features. The other lesson was about carrying a project across a handoff.
              Because I worked spec-first and kept the line from requirement to design to code
              clear, moving from a solo prototype to a shared repo with an engineer stayed
              clean, and we could keep shipping through code reviews without stepping on each
              other.
            </p>
            <p><Pending>[Draft reflection, finalize before publishing.]</Pending></p>
          </div>

          <Link to="/#work" className="cs-back cs-back-bottom">← Back to work</Link>
        </section>
      </article>

      <Footer />
    </div>
  )
}

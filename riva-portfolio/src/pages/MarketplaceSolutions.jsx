import { Link } from 'react-router-dom'
import { Blobs, Nav, Footer, Figure, Pending } from '../components.jsx'

const audiences = [
  {
    num: '01',
    who: 'Sellers',
    body: 'Sellers had products that only made sense together. They could list each one, but they had no way to say these belong as a set. They worked around it with documents and sales calls, which did not scale.',
  },
  {
    num: '02',
    who: 'Buyers',
    body: 'Buyers had to find each product on their own, then work out how the pieces fit. They were comparing parts when they wanted to evaluate a whole. The risk of getting the combination wrong slowed them down.',
  },
  {
    num: '03',
    who: 'Internal teams',
    body: 'Internal teams wanted to tell a cross-product story for key use cases, but the catalog gave them nothing to point at. There was no object that represented a solution, so there was nothing to feature, measure, or improve.',
  },
]

export default function MarketplaceSolutions() {
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
            Marketplace <span className="grad-text">Multi-Product Solutions</span>
          </h1>
          <p className="cs-lead">
            The first capability on AWS Marketplace that let sellers bundle interconnected
            products into one solution, let buyers evaluate those products together, and gave
            internal teams a surface to tell a cross-product story. I led design from the start.
            There was no precedent, so I defined the problem before I designed anything. It
            mattered because the most valuable things on Marketplace were never one product.
            They were combinations, and the catalog could not represent that.
          </p>

          <dl className="cs-meta">
            <div className="cs-meta-item">
              <dt>Role</dt>
              <dd>Lead Designer, 0 to 1</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Type</dt>
              <dd>New product capability</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Org</dt>
              <dd>AWS Marketplace</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Timeline</dt>
              <dd><Pending>[Add dates]</Pending></dd>
            </div>
          </dl>
        </header>

        {/* 2. The problem, felt three ways */}
        <section className="cs-section">
          <p className="cs-eyebrow">The Problem</p>
          <h2 className="cs-h2">One problem, felt three ways</h2>
          <div className="cs-body">
            <p>
              Marketplace was built around a single unit: one product, one listing, one
              purchase. But real solutions are rarely one product. The gap showed up in three
              different places, and at first they looked like three different problems.
            </p>
          </div>

          <div className="cs-audiences">
            {audiences.map(a => (
              <div key={a.num} className="cs-audience">
                <div className="cs-audience-num">{a.num}</div>
                <h3 className="cs-audience-who">{a.who}</h3>
                <p className="cs-audience-body">{a.body}</p>
              </div>
            ))}
          </div>

          <div className="cs-body">
            <p className="cs-callout">
              Same gap, three symptoms. The catalog had no concept of a solution.
            </p>
          </div>
        </section>

        {/* 3. Ambiguity and scoping */}
        <section className="cs-section">
          <p className="cs-eyebrow">Starting Point</p>
          <h2 className="cs-h2">Scoping a problem nobody had defined</h2>
          <div className="cs-body">
            <p>
              When I started there was no brief, no spec, and no agreement on what a solution
              even was. People used the word to mean different things. Some meant a bundle with
              a single price. Some meant a curated list. Some meant a reference architecture.
              Before I could design, I had to make the problem concrete.
            </p>
            <p>
              I spent the early weeks turning a vague request into a defined problem. I wrote
              down the different meanings of the word solution and tested each one against real
              seller and buyer needs. I cut the versions that sounded good but did not hold up.
              I narrowed the scope to one clear definition we could build and measure: a named
              group of products, presented and evaluated as one thing, with a clear
              relationship between the parts.
            </p>
            <p>
              Defining the problem was most of the work. Once the definition was stable, the
              design questions got much smaller.
            </p>
          </div>
          <Figure
            label="Workshop artifacts: framing the definition of a solution"
            caption="Placeholder for the early problem-framing materials."
          />
        </section>

        {/* 4. Process */}
        <section className="cs-section">
          <p className="cs-eyebrow">Process</p>
          <h2 className="cs-h2">Research, rejected concepts, and alignment</h2>

          <div className="cs-body">
            <h3 className="cs-h3">Research</h3>
            <p>
              I talked to sellers who were already faking solutions with manual workarounds,
              and to buyers who had recently bought multi-product setups. I wanted to
              understand how they thought about the relationship between products, not just
              what they clicked.
            </p>
          </div>
          <Figure label="Research synthesis: how sellers and buyers describe a solution" />

          <div className="cs-body">
            <h3 className="cs-h3">Early concepts I rejected</h3>
            <p>
              The first concept was a simple bundle with one price. It was easy to build, but
              it hid the individual products and broke how buyers actually procure and pay. I
              rejected it.
            </p>
            <p>
              The second was a curated list, like a collection. It was flexible, but it carried
              no real relationship between products, so it did not help buyers evaluate the
              whole. It was just a folder. I rejected it too.
            </p>
            <p>
              The third was the one we kept: a first-class Solution object that groups products,
              shows how they connect, and still lets each product keep its own listing,
              pricing, and procurement path.
            </p>
          </div>
          <Figure label="Early sketches: bundle, collection, and the Solution object" />

          <div className="cs-body">
            <h3 className="cs-h3">Aligning the org</h3>
            <p>
              A change like this touched many teams: catalog, pricing, procurement, search, and
              several seller-facing tools. Everyone had a stake and a different mental model. I
              ran working sessions to get to one shared definition, used simple diagrams so
              non-designers could argue with the model directly, and kept a running list of
              open questions so disagreements were visible instead of buried. The goal was not
              to win the room. It was to leave with one definition everyone could build against.
            </p>
          </div>
          <Figure label="Alignment: shared model and open-questions tracker" />

          <div className="cs-body">
            <h3 className="cs-h3">Key decisions and tradeoffs</h3>
            <p>
              <strong>Keep individual products intact.</strong> We preserved each product's own
              listing and procurement instead of merging everything into one opaque purchase.
              This was harder to build and harder to explain, but it matched how buyers actually
              buy and kept trust in the catalog.
            </p>
            <p>
              <strong>Make the relationship explicit.</strong> We showed how products connect
              rather than just listing them side by side. This added design and content work for
              sellers, but it was the whole point. Without the relationship, a solution is just
              a list.
            </p>
            <p>
              <strong>Ship a clear first version over a complete one.</strong> We launched with
              a focused definition and left some requests for later. This kept the first release
              understandable and gave us something real to learn from.
            </p>
          </div>
        </section>

        {/* 5. Final solution, per audience */}
        <section className="cs-section">
          <p className="cs-eyebrow">The Solution</p>
          <h2 className="cs-h2">One object, three views</h2>
          <div className="cs-body">
            <p>
              The result was a Solution: a named group of connected products that each audience
              could use in their own way.
            </p>
          </div>

          <div className="cs-walkthrough">
            <div className="cs-walk-step">
              <h3 className="cs-h3">For sellers</h3>
              <p>
                Sellers can create a solution, add the products that belong together, and
                describe how they connect. Each product keeps its own listing. The solution
                gives sellers one place to present the combination they were already selling by
                hand.
              </p>
              <Figure label="Final screen: seller solution builder" tall />
            </div>

            <div className="cs-walk-step">
              <h3 className="cs-h3">For buyers</h3>
              <p>
                Buyers see the solution as a whole, with the products and their relationships in
                one view. They can still open each product in detail and follow the normal
                procurement path. They evaluate the combination without losing the ability to
                check the parts.
              </p>
              <Figure label="Final screen: buyer solution view" tall />
            </div>

            <div className="cs-walk-step">
              <h3 className="cs-h3">For internal teams</h3>
              <p>
                Internal teams finally have an object to point at. They can feature solutions
                for important use cases, track how they perform, and tell a cross-product story
                that the catalog can actually represent.
              </p>
              <Figure label="Final screen: internal merchandising surface" tall />
            </div>
          </div>
        </section>

        {/* 6. Impact */}
        <section className="cs-section">
          <p className="cs-eyebrow">Impact</p>
          <h2 className="cs-h2">What changed</h2>
          <div className="cs-body">
            <p>
              This was a 0 to 1 launch, so the early signal is directional. I am stating it
              plainly rather than dressing it up.
            </p>
            <ul className="cs-list">
              <li>
                Sellers could represent multi-product offerings for the first time, without
                manual workarounds.
              </li>
              <li>
                Buyers could evaluate connected products as one decision instead of several.
              </li>
              <li>
                Internal teams had a real surface to feature and measure solutions.
              </li>
            </ul>
            <p>
              The capability shipped and became the foundation that later multi-product work
              built on.
            </p>
          </div>

          <div className="cs-metrics">
            <div className="cs-metric">
              <span className="cs-metric-value"><Pending>[Add number]</Pending></span>
              <span className="cs-metric-label">Solutions created in the first months</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value"><Pending>[Add number]</Pending></span>
              <span className="cs-metric-label">Buyer engagement or conversion signal</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value"><Pending>[Add number]</Pending></span>
              <span className="cs-metric-label">Internal teams using the surface</span>
            </div>
          </div>

          <blockquote className="cs-quote">
            <Pending>[Add a seller or buyer quote here.]</Pending>
            <cite>Placeholder for attribution</cite>
          </blockquote>
        </section>

        {/* 7. Reflection */}
        <section className="cs-section">
          <p className="cs-eyebrow">Reflection</p>
          <h2 className="cs-h2">What I took from it</h2>
          <div className="cs-body">
            <p>
              The hardest part was not the interface. It was naming a problem that did not have
              a name yet, and getting a large group to agree on it. Once the definition was
              clear, the design followed.
            </p>
            <p>
              If I did it again, I would push for an even smaller first version and get it in
              front of real buyers sooner. The definition work was right, but I could have
              tested the riskiest assumptions earlier with less polish.
            </p>
            <p>
              The thing I am most proud of is that the object we defined held up. Later work
              extended it instead of replacing it, which is the best sign that the early scoping
              was sound.
            </p>
          </div>

          <Link to="/#work" className="cs-back cs-back-bottom">← Back to work</Link>
        </section>
      </article>

      <Footer />
    </div>
  )
}

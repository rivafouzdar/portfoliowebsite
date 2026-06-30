import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MarketplaceSolutions from './pages/MarketplaceSolutions.jsx'
import LlmFeedbackTool from './pages/LlmFeedbackTool.jsx'

// On client-side navigation to a new page (no hash), start at the top.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Jump instantly (the global scroll-behavior:smooth would otherwise
    // animate a long scroll up on every page change).
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/marketplace-solutions" element={<MarketplaceSolutions />} />
        <Route path="/work/llm-feedback-tool" element={<LlmFeedbackTool />} />
      </Routes>
    </>
  )
}

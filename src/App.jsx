import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projets from './pages/Projets'
import APropos from './pages/APropos'
import Test from './Test'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}

export default App

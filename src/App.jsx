import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Campus from './pages/Campus';
import Majors from './pages/Majors';
import Admissions from './pages/Admissions';
import Life from './pages/Life';
import Guide from './pages/Guide';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/majors" element={<Majors />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/life" element={<Life />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

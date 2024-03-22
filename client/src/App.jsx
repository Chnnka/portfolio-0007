import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CanvasGallery from './components/CanvasGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import PebbleGallery from './components/PebbleGallery';
import Artworks from './components/Artworks';
import Uiux from './pages/Uiux';
import Applications from './pages/Applications';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/ui-ux" element={<Uiux />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/canvas-gallery" element={<CanvasGallery />} />
        <Route path="/pebble-gallery" element={<PebbleGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import CanvasGallery from './components/CanvasGallery';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/canvas-gallery" element={<CanvasGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

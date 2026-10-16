import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modals } from './components/Modals';
import { Widgets } from './components/Widgets';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pathname === '/contact' ? 'Contact | Beacon Hospital' : 'Beacon Hospital';
    if (hash) {
      const node = document.querySelector(hash);
      if (node) {
        node.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Widgets />
      <Modals />
    </>
  );
}

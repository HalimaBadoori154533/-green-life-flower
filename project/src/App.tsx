import { useState } from 'react';
import Navbar, { type Page } from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';

export default function App() {
  const [page, setPage] = useState<Page>('about');

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About onNavigate={setPage} />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-50">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

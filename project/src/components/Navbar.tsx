import { useState, useEffect } from 'react';
import { Leaf, Menu, X, Phone } from 'lucide-react';

export type Page = 'about' | 'products' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { key: Page; label: string }[] = [
  { key: 'about', label: 'من نحن' },
  { key: 'products', label: 'منتجاتنا' },
  { key: 'contact', label: 'تواصل معنا' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-md shadow-primary-900/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('about')}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Leaf className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-right">
            <h1 className={`text-xl font-bold leading-none transition-colors ${scrolled ? 'text-primary-800' : 'text-primary-900'}`}>
              جرين لايف
            </h1>
            <p className={`text-xs font-medium leading-none mt-1 transition-colors ${scrolled ? 'text-primary-500' : 'text-primary-600'}`}>
              ورود وهدايا في جدة
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              className={`relative rounded-full px-6 py-2.5 text-base font-semibold transition-all duration-300 ${
                currentPage === item.key
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                  : scrolled
                    ? 'text-primary-700 hover:bg-primary-100'
                    : 'text-primary-800 hover:bg-primary-100/80'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+966500000000"
            className="mr-3 inline-flex items-center gap-2 rounded-full bg-secondary-500 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-secondary-500/30 transition-all duration-300 hover:bg-secondary-600 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            اطلب الآن
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-colors hover:bg-primary-200 md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom mx-auto mt-2 space-y-1 rounded-3xl bg-white/95 backdrop-blur-lg p-4 shadow-xl shadow-primary-900/10">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              className={`block w-full rounded-2xl px-5 py-3 text-right text-base font-semibold transition-colors ${
                currentPage === item.key
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-700 hover:bg-primary-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+966500000000"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary-500 px-5 py-3 text-base font-semibold text-white"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            اطلب الآن
          </a>
        </div>
      </div>
    </header>
  );
}

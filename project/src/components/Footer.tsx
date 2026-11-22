import { Leaf, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import type { Page } from './Navbar';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navItems: { key: Page; label: string }[] = [
    { key: 'about', label: 'من نحن' },
    { key: 'products', label: 'منتجاتنا' },
    { key: 'contact', label: 'تواصل معنا' },
  ];

  const socialIcons = [Instagram, Twitter, Facebook, Send];

  return (
    <footer className="relative overflow-hidden bg-primary-900 text-primary-50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />

      <div className="container-custom relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600">
                <Leaf className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">جرين لايف</h3>
                <p className="text-xs text-primary-300 mt-1">ورود وهدايا في جدة</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-200">
              نحوّل لحظاتك العادية إلى ذكريات لا تُنسى بأجمل الورود والهدايا المنتقاة بعناية في جدة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => {
                      onNavigate(item.key);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-primary-200 transition-colors hover:text-secondary-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-primary-200">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-secondary-400 mt-0.5" />
                <span>طريق الكورنيش، جدة، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary-400" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary-400" />
                <span dir="ltr">info@greenlife.sa</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">تابعنا</h4>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-primary-200 transition-all duration-300 hover:bg-secondary-500 hover:text-white hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-primary-200">
              نعمل يومياً من 9 صباحاً حتى 11 مساءً
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-primary-700/50 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-300">
              © 2026 جرين لايف. جميع الحقوق محفوظة.
            </p>
            <p className="text-sm text-primary-300">
              صُنع بحب في جدة 🌿
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Phone, Menu, X, Leaf } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'О продукте', href: '#composition' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Применение', href: '#application' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = scrolled ? 'text-graphite' : 'text-white';
  const subText = scrolled ? 'text-graphite/80 hover:text-primary-dark' : 'text-white/90 hover:text-primary-lighter';
  const phoneColor = scrolled ? 'text-graphite hover:text-primary-dark' : 'text-white hover:text-primary-lighter';
  const iconColor = scrolled ? 'text-primary' : 'text-primary-lighter';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-2'
          : 'bg-secondary/95 backdrop-blur-md shadow-soft py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" strokeWidth={2} />
          </div>
          <span className={`font-heading font-bold text-lg transition-colors ${textColor}`}>
            Торфопродукт
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors relative group ${subText}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:88006005149" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${phoneColor}`}>
            <Phone className={`w-4 h-4 ${iconColor}`} strokeWidth={2} />
            8-800-600-51-49
          </a>
          <button
            onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-all shadow-soft hover:shadow-medium"
          >
            Заказать звонок
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 transition-colors ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-medium border-t border-cream-dark" aria-label="Мобильная навигация">
          <div className="px-4 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-graphite hover:text-primary-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:88006005149" className="flex items-center gap-2 text-base font-semibold text-graphite pt-2 border-t border-cream-dark">
              <Phone className="w-4 h-4 text-primary" />
              8-800-600-51-49
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-all text-center"
            >
              Заказать звонок
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

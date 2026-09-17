import { Leaf, Phone, Globe, FileText } from 'lucide-react';

const SOCIALS = ['VK', 'TG', 'YT'];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-secondary-dark" strokeWidth={2} />
              </div>
              <span className="font-heading font-bold text-lg">Торфопродукт</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Повышаем урожайность и качество, не нанося вреда окружающей среде.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-white/50 mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:88006005149" className="flex items-center gap-2 text-sm text-white/80 hover:text-primary-lighter transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  8-800-600-51-49
                </a>
              </li>
              <li>
                <a href="https://torfpro.ru" className="flex items-center gap-2 text-sm text-white/80 hover:text-primary-lighter transition-colors">
                  <Globe className="w-4 h-4 text-primary" />
                  torfpro.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Social + Legal */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-white/50 mb-4">Мы в соцсетях и правовая информация</h3>
            <div className="flex items-center gap-3 mb-4">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary text-white hover:text-secondary-dark text-xs font-bold flex items-center justify-center transition-all"
                  aria-label={`Социальная сеть ${s}`}
                >
                  {s}
                </a>
              ))}
            </div>
            <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-primary-lighter transition-colors">
              <FileText className="w-4 h-4" />
              Политика конфиденциальности
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Торфопродукт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

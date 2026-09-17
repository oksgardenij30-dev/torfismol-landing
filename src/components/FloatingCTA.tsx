import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-medium transition-all hover:shadow-lg ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Заказать звонок"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Заказать звонок</span>
    </button>
  );
}

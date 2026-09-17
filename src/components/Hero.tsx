import { Leaf, ShieldCheck, FlaskConical, Droplets } from 'lucide-react';

const BADGES = [
  { icon: Leaf, label: '100% органика' },
  { icon: FlaskConical, label: 'Совместим с пестицидами' },
  { icon: Droplets, label: '1 л/га' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient — rapeseed field inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-primary/30" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      {/* SVG decorative — stylized rapeseed pods */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-90 hidden lg:block" viewBox="0 0 400 500" fill="none" aria-hidden="true">
        <g stroke="#C9A227" strokeWidth="2" opacity="0.4">
          <path d="M200 50 Q220 200 200 350 Q180 420 200 480" />
          <path d="M200 80 Q150 120 120 180" />
          <path d="M200 100 Q260 140 290 200" />
          <path d="M200 150 Q160 190 130 250" />
          <path d="M200 170 Q250 210 280 270" />
          <path d="M200 220 Q170 260 140 320" />
          <path d="M200 240 Q240 280 270 340" />
        </g>
        {/* Pods */}
        <g fill="#D4A72C" opacity="0.85">
          <ellipse cx="120" cy="180" rx="14" ry="28" transform="rotate(-30 120 180)" />
          <ellipse cx="290" cy="200" rx="14" ry="28" transform="rotate(30 290 200)" />
          <ellipse cx="130" cy="250" rx="14" ry="28" transform="rotate(-25 130 250)" />
          <ellipse cx="280" cy="270" rx="14" ry="28" transform="rotate(25 280 270)" />
          <ellipse cx="140" cy="320" rx="14" ry="28" transform="rotate(-20 140 320)" />
          <ellipse cx="270" cy="340" rx="14" ry="28" transform="rotate(20 270 340)" />
        </g>
        {/* Seeds inside pods */}
        <g fill="#2E4A2E" opacity="0.5">
          <circle cx="120" cy="175" r="3" />
          <circle cx="120" cy="185" r="3" />
          <circle cx="290" cy="195" r="3" />
          <circle cx="290" cy="205" r="3" />
          <circle cx="130" cy="245" r="3" />
          <circle cx="130" cy="255" r="3" />
          <circle cx="280" cy="265" r="3" />
          <circle cx="280" cy="275" r="3" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-primary-lighter" />
            <span className="text-sm font-medium text-white/90">Органическая защита стручков</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Торфисмол — органический клей для рапса
          </h1>
          <p className="font-heading text-xl sm:text-2xl text-primary-lighter font-semibold mb-6">
            Меньше потерь — больше урожая!
          </p>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
            Сохраняет до 30% урожая, предотвращая растрескивание стручков и осыпание семян. Натуральная плёнка на основе смол защищает ваш урожай вплоть до дня уборки.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-medium hover:shadow-lg hover:-translate-y-0.5"
            >
              Заказать звонок
            </button>
            <button
              onClick={() => document.querySelector('#composition')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all border border-white/30"
            >
              Подробнее
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <badge.icon className="w-4 h-4 text-primary-lighter" strokeWidth={2} />
                <span className="text-sm font-medium text-white/90">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

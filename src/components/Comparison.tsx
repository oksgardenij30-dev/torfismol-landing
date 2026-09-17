import { Check, X, ArrowRight } from 'lucide-react';

const ROWS = [
  { label: 'Потери от осыпания', without: 'До 30%', with: 'Минимальные' },
  { label: 'Химические остатки', without: 'Присутствуют', with: 'Отсутствуют' },
  { label: 'Совместимость с обработками', without: '—', with: 'Полная' },
  { label: 'Защита стручков', without: 'Нет', with: 'Эластичная плёнка' },
  { label: 'Экспортное качество', without: 'Не гарантировано', with: 'Да' },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-sm font-semibold rounded-full mb-4">
            Сравнение
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Без обработки vs С Торфисмолом
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Оцените разницу, которую Торфисмол даёт по ключевым показателям качества и урожайности.
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-2xl shadow-medium bg-white">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-secondary to-secondary-light text-white">
            <div className="p-5 text-sm font-semibold">Параметр</div>
            <div className="p-5 text-center text-sm font-semibold flex items-center justify-center gap-2 border-l border-white/15">
              <X className="w-4 h-4" />
              Без обработки
            </div>
            <div className="p-5 text-center text-sm font-semibold flex items-center justify-center gap-2 border-l border-white/15">
              <Check className="w-4 h-4 text-primary-lighter" />
              С Торфисмолом
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'} border-t border-cream-dark`}
            >
              <div className="p-5 text-sm font-semibold text-graphite">{row.label}</div>
              <div className="p-5 text-center text-sm text-graphite/60 border-l border-cream-dark">
                {row.without === '—' ? (
                  <span className="text-graphite/30">—</span>
                ) : row.without === 'Нет' ? (
                  <span className="inline-flex items-center gap-1 text-red-500/80">
                    <X className="w-4 h-4" />
                    {row.without}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-red-500/80">
                    <X className="w-4 h-4" />
                    {row.without}
                  </span>
                )}
              </div>
              <div className="p-5 text-center text-sm border-l border-cream-dark">
                {row.with === '—' ? (
                  <span className="text-graphite/30">—</span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-semibold text-secondary">
                    <Check className="w-4 h-4 text-primary-dark" />
                    {row.with}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10">
          <button
            onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-soft hover:shadow-medium hover:-translate-y-0.5"
          >
            Получить консультацию
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

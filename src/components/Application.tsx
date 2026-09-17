import { Sprout, Clock, Beaker, CloudSun } from 'lucide-react';

const RULES = [
  {
    icon: Sprout,
    title: 'Фаза развития',
    value: 'Стадия «резинового» стручка',
    description: 'Применять, когда стручки полностью сформированы, но ещё зелёные и эластичные.',
  },
  {
    icon: Clock,
    title: 'Сроки',
    value: 'За 2–4 недели до уборки',
    description: 'Планируйте обработку заранее до предполагаемой даты уборки для лучшего результата.',
  },
  {
    icon: Beaker,
    title: 'Норма',
    value: '1 литр на 1 гектар',
    description: 'Равномерное покрытие поля при экономичной норме расхода.',
  },
  {
    icon: CloudSun,
    title: 'Условия',
    value: 'Сухая безветренная погода',
    description: 'Применяйте в тихую, сухую погоду для идеального сцепления с поверхностью стручка.',
  },
];

export default function Application() {
  return (
    <section id="application" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Применение
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Нормы и правила применения
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Следуйте этим рекомендациям, чтобы получить максимальный защитный эффект Торфисмола.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RULES.map((rule, i) => (
            <div
              key={rule.title}
              className="reveal bg-cream rounded-2xl p-7 border border-cream-dark hover:border-primary/30 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <rule.icon className="w-6 h-6 text-primary-dark" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-graphite/50">{rule.title}</span>
              </div>
              <p className="font-heading font-bold text-lg text-graphite mb-2">{rule.value}</p>
              <p className="text-sm text-graphite/70 leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

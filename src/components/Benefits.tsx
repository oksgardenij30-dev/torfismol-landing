import { TrendingUp, BadgeCheck, Wrench, ShieldCheck } from 'lucide-react';

const BENEFITS = [
  {
    icon: TrendingUp,
    title: 'Максимальный доход',
    description: 'Сохраняет до 30% урожая, обычно теряемого при осыпании и растрескивании стручков.',
  },
  {
    icon: BadgeCheck,
    title: 'Чистота продукта',
    description: 'Натуральная смоляная основа, без химических остатков — экспортное качество вашего урожая.',
  },
  {
    icon: Wrench,
    title: 'Технологичность',
    description: 'Совместим с пестицидами и удобрениями в баковых смесях, не забивает форсунки опрыскивателя.',
  },
  {
    icon: ShieldCheck,
    title: 'Надёжная защита',
    description: 'Сохраняет эластичность при перепадах температур, не смывается сильным дождём и обработками.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-sm font-semibold rounded-full mb-4">
            Преимущества
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Ключевые преимущества для вашего хозяйства
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Конкретные выгоды, которые напрямую превращаются в сохранённый урожай и более высокую маржу.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              className="reveal group bg-white rounded-2xl p-7 shadow-card hover:shadow-medium transition-all hover:-translate-y-1 border-b-4 border-transparent hover:border-primary"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary-lighter" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading font-bold text-lg text-graphite mb-2">{benefit.title}</h3>
              <p className="text-sm text-graphite/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

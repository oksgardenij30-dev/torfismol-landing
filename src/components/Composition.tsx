import { TreePine, Sparkles, Sprout, Recycle } from 'lucide-react';

const ITEMS = [
  {
    icon: TreePine,
    title: 'Кедровая смола',
    description: 'Натуральный клей, обеспечивающий прочное сцепление с поверхностью стручка.',
  },
  {
    icon: Sparkles,
    title: 'Канифоль',
    description: 'Натуральный полимер, придающий защитной плёнке эластичность.',
  },
  {
    icon: Sprout,
    title: 'Органическая основа',
    description: 'Безопасна для почвы и полезной микрофлоры — не вредит экосистеме поля.',
  },
  {
    icon: Recycle,
    title: 'Биоразлагаемость',
    description: 'В готовом продукте не остаётся химических остатков после разложения.',
  },
];

export default function Composition() {
  return (
    <section id="composition" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-sm font-semibold rounded-full mb-4">
            Состав
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Натуральный состав и экологичность
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Каждый компонент Торфисмола имеет природное происхождение — без синтетических добавок и загрязнения почвы.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="reveal bg-white rounded-2xl p-7 shadow-card hover:shadow-medium transition-all hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary-dark" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading font-bold text-lg text-graphite mb-2">{item.title}</h3>
              <p className="text-sm text-graphite/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

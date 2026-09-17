import { Lock, Wind, CloudRain } from 'lucide-react';

const STEPS = [
  {
    icon: Lock,
    title: 'Склеивание стручков',
    description: 'Удерживает створки стручка вместе, предотвращая раскрытие и осыпание семян до уборки.',
  },
  {
    icon: Wind,
    title: 'Воздухообмен',
    description: 'Сетчатая плёнка не перекрывает дыхание растения и пропускает солнечный свет для фотосинтеза.',
  },
  {
    icon: CloudRain,
    title: 'Защита от дождя',
    description: 'Плёнка устойчива к смыванию дождём и последующим обработкам.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Принцип действия
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Как это работает
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Образует эластичную сетчатую плёнку на поверхности стручка для надёжной защиты семян.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="reveal relative flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 z-10">
                <step.icon className="w-10 h-10 text-primary-dark" strokeWidth={1.75} />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-graphite mb-3">{step.title}</h3>
              <p className="text-sm text-graphite/70 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Безопасен ли препарат для почвы и пчёл?',
    answer: 'Да. Торфисмол изготовлен из натуральной кедровой смолы и канифоли — без синтетических добавок. Он полностью биоразлагается, не оставляя остатков в почве. Препарат безопасен для полезной микрофлоры и не представляет риска для пчёл при соблюдении рекомендаций по применению.',
  },
  {
    question: 'Можно ли смешивать с пестицидами?',
    answer: 'Да. Торфисмол полностью совместим с большинством пестицидов и удобрений в баковых смесях. Он не забивает форсунки опрыскивателя и не снижает эффективность других обработок. Перед масштабным смешиванием рекомендуем провести небольшой тест в банке.',
  },
  {
    question: 'Что делать, если после обработки прошёл дождь?',
    answer: 'Эластичная сетчатая плёнка устойчива к смыванию дождём после высыхания и сцепления с поверхностью стручка. Для идеальной адгезии применяйте препарат в сухую безветренную погоду и дайте минимум 2–3 часа на высыхание перед возможным дождём.',
  },
  {
    question: 'Требуется ли специальное оборудование?',
    answer: 'Нет. Торфисмол работает со стандартными сельскохозяйственными опрыскивателями. Он не забивает форсунки и легко смешивается в баке. Просто добавьте его в существующую программу опрыскивания из расчёта 1 л/га.',
  },
  {
    question: 'Есть ли органические сертификаты?',
    answer: 'Торфисмол основан на натуральных смолах и не содержит синтетических химических веществ. Препарат соответствует требованиям к экологичной защите сельскохозяйственных культур. Свяжитесь с нашей командой для получения подробной сертификационной документации и документов для экспорта.',
  },
];

function FaqItem({ item, isOpen, onToggle, index }: { item: typeof FAQ_ITEMS[0]; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <div className="reveal bg-white rounded-2xl shadow-card overflow-hidden border border-cream-dark" style={{ transitionDelay: `${index * 60}ms` }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-heading font-semibold text-base sm:text-lg text-graphite">{item.question}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-cream text-primary-dark'}`}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        id={`faq-panel-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-graphite/70 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Вопросы
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Всё, что нужно знать о Торфисмоле перед применением на ваших полях.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

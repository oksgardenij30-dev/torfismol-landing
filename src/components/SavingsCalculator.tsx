import { useState } from 'react';
import { Calculator, Droplets, TrendingUp } from 'lucide-react';

export default function SavingsCalculator() {
  const [area, setArea] = useState<string>('100');

  const areaNum = Math.max(0, parseFloat(area) || 0);
  const volume = (areaNum * 1).toFixed(1); // 1 L/ha
  const preservedPercent = 30; // up to 30% preserved

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-lighter text-sm font-semibold rounded-full mb-4">
            Калькулятор
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Калькулятор экономии
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Укажите площадь поля, чтобы узнать необходимый объём препарата и сохраняемый урожай.
          </p>
        </div>

        <div className="reveal bg-white rounded-3xl p-8 sm:p-10 shadow-medium">
          {/* Input */}
          <div className="mb-8">
            <label htmlFor="field-area" className="flex items-center gap-2 text-sm font-semibold text-graphite mb-3">
              <Calculator className="w-4 h-4 text-primary-dark" />
              Площадь поля (гектаров)
            </label>
            <div className="relative">
              <input
                id="field-area"
                type="number"
                min="0"
                step="1"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-5 py-4 text-2xl font-heading font-bold text-graphite bg-cream rounded-xl border-2 border-cream-dark focus:border-primary focus:outline-none transition-colors"
                placeholder="100"
                aria-describedby="calc-results"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-lg font-semibold text-graphite/40">га</span>
            </div>
          </div>

          {/* Results */}
          <div id="calc-results" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-primary-dark" />
                <span className="text-sm font-medium text-graphite/60">Необходимый объём препарата</span>
              </div>
              <p className="font-heading font-extrabold text-3xl text-graphite">
                {volume} <span className="text-lg font-semibold text-graphite/50">л</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary-dark" />
                <span className="text-sm font-medium text-graphite/60">Сохраняемый урожай</span>
              </div>
              <p className="font-heading font-extrabold text-3xl text-primary-dark">
                до {preservedPercent}<span className="text-lg font-semibold text-primary-dark/50">%</span>
              </p>
            </div>
          </div>

          <p className="text-xs text-graphite/50 mt-4 text-center">
            * Расчёт ведётся по рекомендуемой норме 1 л/га и максимальной сохранности 30%.
          </p>
        </div>
      </div>
    </section>
  );
}

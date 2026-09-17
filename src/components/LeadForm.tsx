import { useState } from 'react';
import { User, Phone, Mail, MapPin, Ruler, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  region: string;
  area: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  region?: string;
  area?: string;
}

const INITIAL_DATA: FormData = { name: '', phone: '', email: '', region: '', area: '', comment: '' };

export default function LeadForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!data.name.trim()) e.name = 'Введите имя';
    if (!data.phone.trim()) {
      e.phone = 'Введите номер телефона';
    } else if (!/^[0-9+\-\s()]{7,}$/.test(data.phone.trim())) {
      e.phone = 'Введите корректный номер телефона';
    }
    if (!data.email.trim()) {
      e.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = 'Введите корректный email';
    }
    if (!data.region.trim()) e.region = 'Введите регион';
    if (!data.area.trim()) {
      e.area = 'Введите площадь поля';
    } else if (isNaN(parseFloat(data.area)) || parseFloat(data.area) <= 0) {
      e.area = 'Введите корректное число';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const fieldClass = (hasError?: string) =>
    `w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-colors focus:outline-none ${
      hasError ? 'border-red-400 bg-red-50/30' : 'border-cream-dark bg-cream focus:border-primary'
    }`;

  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-sm font-semibold rounded-full mb-4">
            Контакты
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Получите консультацию агронома
          </h2>
          <p className="text-base text-graphite/70 max-w-2xl mx-auto">
            Расскажите о ваших полях, и мы поможем спланировать оптимальное применение Торфисмола.
          </p>
        </div>

        {submitted ? (
          <div className="reveal bg-white rounded-3xl p-10 text-center shadow-medium">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-secondary" strokeWidth={1.75} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-graphite mb-3">Заявка отправлена!</h3>
            <p className="text-base text-graphite/70 mb-6 max-w-md mx-auto">
              Спасибо за интерес к Торфисмолу. Наш агроном свяжется с вами в течение одного рабочего дня, чтобы обсудить ваши поля и план применения.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setData(INITIAL_DATA);
                setErrors({});
              }}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all"
            >
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="reveal bg-white rounded-3xl p-6 sm:p-10 shadow-medium">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-graphite mb-2">Имя *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite/40" />
                  <input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={fieldClass(errors.name)}
                    placeholder="Иван Петров"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </div>
                {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-graphite mb-2">Телефон *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite/40" />
                  <input
                    id="phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={fieldClass(errors.phone)}
                    placeholder="+7 (900) 123-45-67"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {errors.phone && <p id="phone-error" className="mt-1.5 text-sm text-red-500">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-graphite mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite/40" />
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={fieldClass(errors.email)}
                    placeholder="ivan@ferma.ru"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Region */}
              <div>
                <label htmlFor="region" className="block text-sm font-semibold text-graphite mb-2">Регион *</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite/40" />
                  <input
                    id="region"
                    type="text"
                    value={data.region}
                    onChange={(e) => handleChange('region', e.target.value)}
                    className={fieldClass(errors.region)}
                    placeholder="Краснодарский край"
                    aria-invalid={!!errors.region}
                    aria-describedby={errors.region ? 'region-error' : undefined}
                  />
                </div>
                {errors.region && <p id="region-error" className="mt-1.5 text-sm text-red-500">{errors.region}</p>}
              </div>

              {/* Field area */}
              <div>
                <label htmlFor="area" className="block text-sm font-semibold text-graphite mb-2">Площадь поля (га) *</label>
                <div className="relative">
                  <Ruler className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite/40" />
                  <input
                    id="area"
                    type="number"
                    min="0"
                    value={data.area}
                    onChange={(e) => handleChange('area', e.target.value)}
                    className={fieldClass(errors.area)}
                    placeholder="100"
                    aria-invalid={!!errors.area}
                    aria-describedby={errors.area ? 'area-error' : undefined}
                  />
                </div>
                {errors.area && <p id="area-error" className="mt-1.5 text-sm text-red-500">{errors.area}</p>}
              </div>

              {/* Comment */}
              <div className="sm:col-span-2">
                <label htmlFor="comment" className="block text-sm font-semibold text-graphite mb-2">Комментарий</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-graphite/40" />
                  <textarea
                    id="comment"
                    rows={3}
                    value={data.comment}
                    onChange={(e) => handleChange('comment', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-cream-dark bg-cream focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Расскажите о культуре и планируемой дате уборки..."
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-6 px-6 py-4 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold rounded-xl transition-all shadow-soft hover:shadow-medium flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                'Отправить заявку'
              )}
            </button>

            <p className="text-center text-sm text-graphite/60 mt-4">
              Или позвоните нам: <a href="tel:88006005149" className="font-semibold text-primary-dark hover:underline">8-800-600-51-49</a> (бесплатно по России)
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

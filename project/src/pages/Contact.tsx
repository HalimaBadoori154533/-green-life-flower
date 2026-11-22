import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, AtSign, PenSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'الرجاء إدخال الاسم';
    if (!form.phone.trim()) e.phone = 'الرجاء إدخال رقم الجوال';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'البريد الإلكتروني غير صحيح';
    if (!form.message.trim()) e.message = 'الرجاء إدخال رسالتك';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'طريق الكورنيش، حي الشاطئ، جدة',
      sub: 'المملكة العربية السعودية',
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 50 000 0000',
      sub: 'متاح يومياً',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@greenlife.sa',
      sub: 'نرد خلال 24 ساعة',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: '9:00 ص - 11:00 م',
      sub: 'طوال أيام الأسبوع',
    },
  ];

  return (
    <div className="animate-fade-in pt-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-l from-primary-800 to-primary-600 py-20">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary-500/10" />
        <div className="container-custom relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
            <MessageCircle className="h-4 w-4 text-secondary-300" />
            نسعد بخدمتك
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">تواصل معنا</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-100">
            هل لديك سؤال أو طلب خاص؟ فريقنا في جدة جاهز لمساعدتك. تواصل معنا عبر أي من الطرق التالية.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding pb-8">
        <div className="container-custom mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white p-8 text-center card-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-200">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-sm font-bold text-primary-400 uppercase tracking-wide">{info.title}</h3>
                <p className="mt-2 text-lg font-semibold text-primary-800" dir={info.title === 'الهاتف' || info.title === 'البريد الإلكتروني' ? 'ltr' : 'rtl'}>
                  {info.value}
                </p>
                <p className="mt-1 text-sm text-primary-500">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding pt-8">
        <div className="container-custom mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-3xl bg-white p-8 card-shadow sm:p-10">
              <h2 className="text-2xl font-bold text-primary-900">أرسل لنا رسالة</h2>
              <p className="mt-2 text-sm text-primary-500">سنرد عليك في أقرب وقت ممكن.</p>

              {submitted && (
                <div className="animate-fade-in mt-6 flex items-center gap-3 rounded-2xl bg-success-50 px-5 py-4">
                  <CheckCircle2 className="h-6 w-6 text-success-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-success-700">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-700">الاسم الكامل</label>
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="أدخل اسمك"
                      className={`w-full rounded-2xl border-2 bg-primary-50/50 py-3.5 pr-12 pl-4 text-base text-primary-800 placeholder:text-primary-400 transition-colors focus:outline-none ${
                        errors.name ? 'border-error-400 focus:border-error-500' : 'border-primary-100 focus:border-primary-400'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="mt-1.5 text-sm text-error-600">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-700">رقم الجوال</label>
                  <div className="relative">
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                      className={`w-full rounded-2xl border-2 bg-primary-50/50 py-3.5 pr-12 pl-4 text-right text-base text-primary-800 placeholder:text-primary-400 transition-colors focus:outline-none ${
                        errors.phone ? 'border-error-400 focus:border-error-500' : 'border-primary-100 focus:border-primary-400'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1.5 text-sm text-error-600">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-700">البريد الإلكتروني (اختياري)</label>
                  <div className="relative">
                    <AtSign className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      dir="ltr"
                      className={`w-full rounded-2xl border-2 bg-primary-50/50 py-3.5 pr-12 pl-4 text-right text-base text-primary-800 placeholder:text-primary-400 transition-colors focus:outline-none ${
                        errors.email ? 'border-error-400 focus:border-error-500' : 'border-primary-100 focus:border-primary-400'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="mt-1.5 text-sm text-error-600">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-700">رسالتك</label>
                  <div className="relative">
                    <PenSquare className="absolute right-4 top-4 h-5 w-5 text-primary-400" />
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className={`w-full rounded-2xl border-2 bg-primary-50/50 py-3.5 pr-12 pl-4 text-base text-primary-800 placeholder:text-primary-400 transition-colors focus:outline-none resize-none ${
                        errors.message ? 'border-error-400 focus:border-error-500' : 'border-primary-100 focus:border-primary-400'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="mt-1.5 text-sm text-error-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg"
                >
                  <Send className="h-5 w-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Map / Info */}
            <div className="flex flex-col gap-8">
              {/* Map placeholder */}
              <div className="overflow-hidden rounded-3xl card-shadow">
                <div className="relative h-72 bg-primary-100">
                  <iframe
                    title="موقع جرين لايف في جدة"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=39.1%2C21.4%2C39.3%2C21.7&layer=mapnik&marker=21.4858%2C39.1925"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-100">
                      <MapPin className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-900">زورونا في جدة</h3>
                      <p className="mt-1 text-sm text-primary-500">
                        طريق الكورنيش، حي الشاطئ، جدة، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="rounded-3xl bg-gradient-to-l from-primary-700 to-primary-900 p-8 text-center">
                <h3 className="text-xl font-bold text-white">تفضل بزيارتنا</h3>
                <p className="mt-2 text-primary-100 text-sm">
                  نسعد بزيارتك في متجرنا للاطّلاع على أحدث التصاميم والمنتجات.
                </p>
                <a
                  href="tel:+966500000000"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-secondary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-secondary-500/30 transition-all duration-300 hover:bg-secondary-600 hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5" />
                  اتصل بنا الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Flower, Heart, Sparkles, Leaf, ShoppingBag, MapPin, Clock, Award, Truck } from 'lucide-react';
import { stats } from '@/data/products';
import type { Page } from '@/components/Navbar';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const values = [
  {
    icon: Flower,
    title: 'ورود طبيعية فاخرة',
    description: 'نختار أجود أنواع الورد الطبيعي المستورد والمحلي بعناية فائقة ليصل إليك في أنقى صورة.',
  },
  {
    icon: Heart,
    title: 'إبداع وتصميم',
    description: 'فريقنا من مصممي الزهور يحوّل كل باقة إلى تحفة فنية تعكس مشاعرك بصدق وأناقة.',
  },
  {
    icon: Truck,
    title: 'توصيل سريع في جدة',
    description: 'نوصّل طلبك إلى باب منزلك في جميع أحياء جدة خلال ساعتين من الطلب.',
  },
  {
    icon: Award,
    title: 'جودة مضمونة',
    description: 'نضمن لك رضا تام عن كل منتج، وإذا لم تكن سعيداً فسنصلح الأمر فوراً.',
  },
];

const steps = [
  { number: '01', title: 'اختيار الهدية', description: 'تصفّح مجموعتنا الواسعة من الباقات والهدايا واختر ما يناسب مناسبتك.' },
  { number: '02', title: 'التخصيص والتغليف', description: 'أخفّف فريقنا كل تصميم بعناية ونغلّفه بأناقة فائقة لتكون جاهزة للإهداء.' },
  { number: '03', title: 'التوصيل السريع', description: 'نوصّل طلبك طازجاً إلى العنوان المحدد في جدة خلال وقت قياسي.' },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden pt-24">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1684004/pexels-photo-1684004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="متجر جرين لايف"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary-900/70 via-primary-800/50 to-primary-900/80" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-10 hidden lg:block">
          <div className="animate-float rounded-3xl bg-white/10 p-6 backdrop-blur-md border border-white/20">
            <Flower className="h-10 w-10 text-secondary-300" />
          </div>
        </div>
        <div className="absolute bottom-40 right-10 hidden lg:block">
          <div className="animate-float-slow rounded-3xl bg-white/10 p-6 backdrop-blur-md border border-white/20">
            <Heart className="h-10 w-10 text-accent-300" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10 mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-primary-50 backdrop-blur-md border border-white/20">
            <Sparkles className="h-4 w-4 text-secondary-300" />
            متجرك المفضل للورود والهدايا في جدة
          </div>
          <h1 className="animate-fade-in-up mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            نصنع لحظات
            <span className="block mt-2 bg-gradient-to-l from-secondary-300 to-accent-300 bg-clip-text text-transparent">
              لا تُنسى بالورود
            </span>
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-primary-100">
            في جرين لايف، نؤمن أن كل باقة ورد تحكي قصة، وكل هدية تحمل شعوراً.
            نقدّم لك أجمل التصاميم الزهرية والهدايا المميزة في قلب جدة.
          </p>
          <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-secondary-500/40 transition-all duration-300 hover:bg-secondary-600 hover:-translate-y-1"
            >
              <ShoppingBag className="h-5 w-5" />
              تصفّح منتجاتنا
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
            >
              تواصل معنا
            </button>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="h-auto w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#f0f9f4" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-50 -mt-2 py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="animate-scale-in rounded-3xl bg-white p-8 text-center card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100">
                  <stat.icon className="h-7 w-7 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-primary-800">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-primary-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary-900/10">
                <img
                  src="https://images.pexels.com/photos/19524853/pexels-photo-19524853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="داخل متجر جرين لايف"
                  className="h-[500px] w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white p-6 shadow-xl sm:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-100">
                    <Award className="h-7 w-7 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-800">8+ سنوات</p>
                    <p className="text-sm text-primary-500">من الإبداع والتميّز</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
                <Leaf className="h-4 w-4" />
                من نحن
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-primary-900 sm:text-4xl">
                قصة جرين لايف
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-primary-600">
                بدأت رحلتنا في قلب جدة عام 2018، برؤية بسيطة: أن نكون الوجهة الأولى لكل من يبحث
                عن ورد طبيعي وهدايا مميزة تعبّر عن أصدق المشاعر. منذ ذلك الحين، نمت شجرتنا
                وأزهرت بألوان عديدة.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-primary-600">
                نتعامل مباشرة مع أفضل مزارع الورد ونختار كل زهرة بعناية، لنضمن لك جودة استثنائية
                وطزاجة تدوم أطول. فريقنا من المصممين المحترفين يحوّل كل باقة إلى لوحة فنية تنبض
                بالحياة والجمال.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 card-shadow">
                  <MapPin className="h-4 w-4 text-secondary-500" />
                  في قلب جدة
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 card-shadow">
                  <Clock className="h-4 w-4 text-secondary-500" />
                  توصيل خلال ساعتين
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 card-shadow">
                  <Flower className="h-4 w-4 text-secondary-500" />
                  ورد طبيعي 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              <Sparkles className="h-4 w-4" />
              لماذا نحن؟
            </div>
            <h2 className="mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
              ما يميّز جرين لايف
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-600">
              نلتزم بأعلى معايير الجودة والابتكار لنمنحك تجربة استثنائية في كل مرة.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-primary-50 p-8 transition-all duration-300 hover:bg-primary-100 hover:-translate-y-2"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-100 px-4 py-1.5 text-sm font-semibold text-secondary-700">
              <Flower className="h-4 w-4" />
              كيف نعمل
            </div>
            <h2 className="mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
              ثلاث خطوات بسيطة
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-12 right-0 hidden h-0.5 w-full bg-primary-200 md:block" style={{ right: '-50%' }} />
                )}
                <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-primary-900/10">
                  <span className="text-3xl font-bold bg-gradient-to-br from-primary-500 to-primary-700 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-600 max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-primary-700 to-primary-900 px-8 py-16 text-center shadow-2xl shadow-primary-900/20 sm:px-16">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                جاهزون لإبهارك؟
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-primary-100">
                اكتشف مجموعتنا الكاملة من الباقات والهدايا الفاخرة، واجعل مناسبتك لا تُنسى.
              </p>
              <button
                onClick={() => onNavigate('products')}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-secondary-500/40 transition-all duration-300 hover:bg-secondary-600 hover:-translate-y-1"
              >
                <ShoppingBag className="h-5 w-5" />
                تصفّح منتجاتنا الآن
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

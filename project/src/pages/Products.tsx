import { useState } from 'react';
import { ShoppingBag, Star, Filter, Search, Truck, Gift, Sparkles, Leaf } from 'lucide-react';
import { products, categoryLabels, type ProductCategory } from '@/data/products';

type FilterCategory = ProductCategory | 'all';

const filters: FilterCategory[] = ['all', 'bouquets', 'gifts', 'plants'];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
    const matchesSearch = p.name.includes(search) || p.description.includes(search);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in pt-24">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-l from-primary-800 to-primary-600 py-20">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-secondary-500/10" />
        <div className="container-custom relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-secondary-300" />
            تشكيلتنا المميزة
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">منتجاتنا</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-100">
            باقات ورد فاخرة، هدايا أنيقة، ونباتات منزلية جميلة — كل ما تحتاجه لمناسباتك الخاصة في جدة.
          </p>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-white border-b border-primary-100">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 py-6 text-sm">
            <div className="flex items-center gap-2 text-primary-700">
              <Truck className="h-5 w-5 text-secondary-500" />
              <span className="font-medium">توصيل سريع خلال ساعتين</span>
            </div>
            <div className="flex items-center gap-2 text-primary-700">
              <Leaf className="h-5 w-5 text-secondary-500" />
              <span className="font-medium">ورود طبيعية طازجة</span>
            </div>
            <div className="flex items-center gap-2 text-primary-700">
              <Gift className="h-5 w-5 text-secondary-500" />
              <span className="font-medium">تغليف فاخر مجاني</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Filters & Search */}
          <div className="mb-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Filter className="h-5 w-5 text-primary-400 ml-2" />
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                      : 'bg-white text-primary-600 hover:bg-primary-100 card-shadow'
                  }`}
                >
                  {categoryLabels[f]}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-xs">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن منتج..."
                className="w-full rounded-full border-2 border-primary-100 bg-white py-3 pr-12 pl-4 text-sm text-primary-800 placeholder:text-primary-400 transition-colors focus:border-primary-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-primary-500">لا توجد منتجات مطابقة لبحثك.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-3xl bg-white card-shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {product.badge && (
                        <span className="rounded-full bg-secondary-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                          {product.badge}
                        </span>
                      )}
                      {product.oldPrice && (
                        <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                          خصم {Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${idx < product.rating ? 'fill-secondary-400 text-secondary-400' : 'text-primary-200'}`}
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-primary-900">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-500 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary-700">{product.price}</span>
                        <span className="text-sm font-medium text-primary-500">ر.س</span>
                        {product.oldPrice && (
                          <span className="text-sm text-primary-400 line-through">{product.oldPrice} ر.س</span>
                        )}
                      </div>
                      <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600 text-white transition-all duration-300 hover:bg-primary-700 hover:scale-110 active:scale-95">
                        <ShoppingBag className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

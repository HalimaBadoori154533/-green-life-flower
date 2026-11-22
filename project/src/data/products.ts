import { Flower, Gift, Sparkles, Heart, Leaf, ShoppingBag } from 'lucide-react';

export type ProductCategory = 'bouquets' | 'gifts' | 'plants';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  badge?: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'باقة الورد الأحمر الفاخرة',
    category: 'bouquets',
    price: 220,
    oldPrice: 280,
    image: 'https://images.pexels.com/photos/38485139/pexels-photo-38485139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'باقة فاخرة من الورد الأحمر الطبيعي، تتكون من 25 وردة حمراء طازجة مع نباتات خضراء مزخرفة. مثالية للتعبير عن الحب والامتنان.',
    badge: 'الأكثر مبيعاً',
    rating: 5,
  },
  {
    id: 2,
    name: 'باقة الورد الوردي',
    category: 'bouquets',
    price: 180,
    image: 'https://images.pexels.com/photos/36117537/pexels-photo-36117537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'باقة أنيقة من الورد الوردي الطبيعي بتغليف فاخر، تصلح لجميع المناسبات السعيدة والإهداءات اللطيفة.',
    badge: 'جديد',
    rating: 5,
  },
  {
    id: 3,
    name: 'باقة الورد الأصفر المشمسة',
    category: 'bouquets',
    price: 160,
    image: 'https://images.pexels.com/photos/12272327/pexels-photo-12272327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'باقة مشرقة من الورد الأصفر الممزوج بألوان خضراء وبيضاء، تعكس البهجة والإيجابية في كل تفصيلة.',
    rating: 4,
  },
  {
    id: 4,
    name: 'صندوق الهدايا الملكي',
    category: 'gifts',
    price: 350,
    oldPrice: 420,
    image: 'https://images.pexels.com/photos/36353974/pexels-photo-36353974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'صندوق هدايا فاخر يحتوي على باقة ورد نضرة وشوكولاتة بلجيكية فاخرة، مثالي للمناسبات الخاصة.',
    badge: 'عرض خاص',
    rating: 5,
  },
  {
    id: 5,
    name: 'صندوق الشوكولاتة الفاخر',
    category: 'gifts',
    price: 195,
    image: 'https://images.pexels.com/photos/39150142/pexels-photo-39150142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'تشكيلة فاخرة من الشوكولاتة الحرفية المغلّفة بأناقة مع شريط زينة ذهبي، هدية مثالية لكل المناسبات.',
    rating: 5,
  },
  {
    id: 6,
    name: 'صندوق الهدايا المفاجئ',
    category: 'gifts',
    price: 250,
    image: 'https://images.pexels.com/photos/27291954/pexels-photo-27291954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'باقة ورد فاخرة مع صندوق شوكولاتة، تجمع بين الجمال والطعم في هدية لا تُنسى.',
    badge: 'مميز',
    rating: 5,
  },
  {
    id: 7,
    name: 'نبتة الأوركيد البيضاء',
    category: 'plants',
    price: 140,
    image: 'https://images.pexels.com/photos/12279206/pexels-photo-12279206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'نبتة أوركيد بيضاء أنيقة في وعاء سيراميكي راقٍ، تضفي لمسة جمال وهدوء على أي مكان.',
    rating: 5,
  },
  {
    id: 8,
    name: 'أوركيد وردية مزخرفة',
    category: 'plants',
    price: 165,
    image: 'https://images.pexels.com/photos/36479802/pexels-photo-36479802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'نبتة الأوركيد الوردية في وعاء زخرفي أنيق، هدية مثالية لعشاق النباتات المنزلية.',
    badge: 'جديد',
    rating: 4,
  },
  {
    id: 9,
    name: 'باقة العروس البيضاء',
    category: 'bouquets',
    price: 320,
    image: 'https://images.pexels.com/photos/30190595/pexels-photo-30190595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'باقة عروس أنيقة من الورد الأبيض والوردي مع نباتات خضراء، مصممة خصيصاً للمناسبات الكبرى والأعراس.',
    badge: 'فاخر',
    rating: 5,
  },
];

export const categoryLabels: Record<ProductCategory | 'all', string> = {
  all: 'الكل',
  bouquets: 'باقات الورد',
  gifts: 'الهدايا',
  plants: 'النباتات',
};

export const categoryIcons: Record<ProductCategory, typeof Flower> = {
  bouquets: Flower,
  gifts: Gift,
  plants: Leaf,
};

export const stats = [
  { icon: Flower, value: '500+', label: 'تصميم زهري' },
  { icon: Heart, value: '10,000+', label: 'عميل سعيد' },
  { icon: ShoppingBag, value: '8', label: 'سنوات خبرة' },
  { icon: Sparkles, value: '4.9', label: 'تقييم العملاء' },
];

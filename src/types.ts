export interface Product {
  id: string;
  name: string;
  arabicName: string;
  category: 'attar' | 'umrah' | 'islamic-lifestyle';
  categoryLabel: string;
  scentFamily?: 'woody-oudh' | 'musk' | 'floral' | 'oriental-amber' | 'unscented';
  price: number; // in PKR
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  description: string;
  image: string;
  sizes: { label: string; price: number; volume: string }[];
  notes?: {
    top: string;
    heart: string;
    base: string;
  };
  features?: string[];
  inStock: boolean;
  isOrganic?: boolean;
  isAlcoholFree?: boolean;
  isUmrahApproved?: boolean;
  badge?: string;
  origin?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: { label: string; price: number; volume: string };
  quantity: number;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    scentFamily: 'woody-oudh' | 'musk' | 'floral' | 'oriental-amber';
    iconName: string;
  }[];
}

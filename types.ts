export interface Plan {
  id: number;
  followers: number;
  price: number;
  bonusViews: number;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  image: string;
}

export interface CheckoutData {
  username: string;
  whatsapp: string;
  platform: 'instagram' | 'tiktok';
  coupon?: string;
}
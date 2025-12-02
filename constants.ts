import { Plan, FaqItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5547992575757"; // Updated number
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PLANS_MIXED: Plan[] = [
  { id: 1, followers: 500, price: 34.90, bonusViews: 500, featured: false },
  { id: 2, followers: 1000, price: 42.90, bonusViews: 1000, featured: true },
  { id: 3, followers: 2000, price: 59.90, bonusViews: 2000, featured: false },
  { id: 4, followers: 5000, price: 114.90, bonusViews: 3000, featured: false },
  { id: 5, followers: 10000, price: 199.90, bonusViews: 4000, featured: false },
  { id: 6, followers: 20000, price: 349.90, bonusViews: 5000, featured: false },
];

export const PLANS_BRAZILIAN: Plan[] = [
  { id: 101, followers: 500, price: 39.90, bonusViews: 500, featured: false },
  { id: 102, followers: 1000, price: 69.90, bonusViews: 1000, featured: true },
  { id: 103, followers: 2000, price: 109.90, bonusViews: 2000, featured: false },
  { id: 104, followers: 3000, price: 169.90, bonusViews: 3000, featured: false },
  { id: 105, followers: 5000, price: 269.90, bonusViews: 5000, featured: false },
  { id: 106, followers: 10000, price: 529.90, bonusViews: 10000, featured: false },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    handle: "@anasilva_moda",
    text: "Bati 10k seguidores em 3 dias. Minha loja mudou de patamar, agora as marcas me respondem!",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    name: "Lucas Gamer",
    handle: "@lucas_play",
    text: "Estava travado nos 200 seguidores. Comprei o pacote de 2k e meu engajamento orgânico subiu junto.",
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    name: "Dra. Juliana",
    handle: "@juliana.dermato",
    text: "Prova social é tudo. Meus pacientes confiam muito mais vendo um perfil robusto.",
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "É seguro comprar seguidores?",
    answer: "Sim, 100% seguro. Utilizamos métodos que respeitam as diretrizes das plataformas e não solicitamos sua senha em momento algum."
  },
  {
    question: "Vocês pedem senha?",
    answer: "Nunca! Precisamos apenas do seu @usuario (link do perfil) para realizar a entrega."
  },
  {
    question: "Em quanto tempo começo a receber?",
    answer: "A entrega começa quase imediatamente após a confirmação do pagamento, sendo distribuída de forma gradual para parecer natural."
  },
  {
    question: "Os seguidores são reais?",
    answer: "Trabalhamos com seguidores de alta qualidade e perfis reais para garantir a melhor aparência e credibilidade para sua conta."
  },
  {
    question: "O que acontece se eu perder seguidores?",
    answer: "A Bless Marketing oferece garantia de reposição caso haja quedas significativas dentro do período de garantia do serviço."
  }
];
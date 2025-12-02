import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Lock, Award } from 'lucide-react';

const reasons = [
  {
    icon: <TrendingUp size={32} className="text-primary" />,
    title: "Mais Credibilidade",
    description: "Perfis com números altos são vistos como autoridade imediata. Quem vê, confia."
  },
  {
    icon: <Users size={32} className="text-secondary" />,
    title: "Atração Orgânica",
    description: "O efeito manada é real. Números altos atraem a curiosidade de novos seguidores reais."
  },
  {
    icon: <Award size={32} className="text-pink-500" />,
    title: "Parcerias e Negócios",
    description: "Marcas buscam perfis robustos. Destrave o algoritmo e seja notado por quem paga."
  },
  {
    icon: <Lock size={32} className="text-green-400" />,
    title: "Primeira Impressão",
    description: "Você tem segundos para convencer um visitante. O número de seguidores é o primeiro filtro."
  }
];

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Por que ter muitos seguidores importa?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Não é apenas vaidade. É posicionamento de mercado. No mundo digital, números são a nova moeda de confiança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-zinc-950/50 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
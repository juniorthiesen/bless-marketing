import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Shield, Zap, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick size={32} />,
    title: "1. Escolha o Pacote",
    desc: "Defina a quantidade de seguidores para Instagram ou TikTok."
  },
  {
    icon: <UserCheck size={32} />,
    title: "2. Informe o Perfil",
    desc: "Apenas o seu @usuario. Nunca pedimos sua senha."
  },
  {
    icon: <Shield size={32} />,
    title: "3. Pagamento Seguro",
    desc: "Pagamento rápido e seguro. Processamos seu pedido imediatamente."
  },
  {
    icon: <Zap size={32} />,
    title: "4. Entrega Rápida",
    desc: "Os seguidores chegam gradualmente para garantir a segurança da conta."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-background border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Como Funciona?</h2>
          <p className="text-zinc-400">Processo simples, transparente e sem burocracia.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center text-primary mb-6 shadow-inner border border-zinc-800">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
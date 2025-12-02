import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, User, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-background relative border-y border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-green-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Resultados Comprovados
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Clientes que impulsionaram seus perfis
          </h2>
          <p className="text-zinc-400">
            Veja resultados reais de quem confiou no nosso sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-surface p-6 rounded-2xl border border-zinc-800 hover:border-primary/30 transition-all hover:bg-zinc-800/80 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border border-zinc-700"
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className="absolute -bottom-1 -right-1 bg-primary text-white p-0.5 rounded-full border-2 border-surface"
                  >
                    <TrendingUp size={10} />
                  </motion.div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-500">{testimonial.handle}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-2 -left-2 text-4xl text-zinc-700 font-serif opacity-30">“</span>
                <p className="text-zinc-300 text-sm leading-relaxed pl-2 relative z-10">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-2 opacity-50">
                 <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                 </div>
                 <span className="text-xs text-zinc-500">Verificado pela Bless</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Live Activity Feed */}
        <div className="max-w-md mx-auto">
             <LiveActivityFeed />
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LiveActivityFeed = () => {
    const [activity, setActivity] = useState("Ricardo S. comprou 1.000 seguidores");
    
    useEffect(() => {
        const activities = [
            "Ricardo S. comprou 1.000 seguidores",
            "Loja Bella acabou de garantir 5.000 seguidores",
            "Pedro H. iniciou o plano de 500 seguidores",
            "Mariana F. renovou o pacote de 2k",
            "Dr. André solicitou orçamento para 50k"
        ];
        
        const interval = setInterval(() => {
            setActivity(activities[Math.floor(Math.random() * activities.length)]);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            key={activity}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 text-zinc-500 text-xs bg-zinc-900/50 py-2 px-4 rounded-full border border-zinc-800 backdrop-blur-sm"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {activity}
        </motion.div>
    )
}

export default SocialProof;
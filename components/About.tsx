import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 bg-zinc-800 rounded-md text-xs font-mono text-zinc-400 mb-2">
            SOBRE NÓS
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Especialistas em <br/>
            <span className="text-primary">Crescimento Digital</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            A <strong>Bless Marketing</strong> nasceu com um propósito: democratizar a autoridade digital. 
            Sabemos que o começo é difícil e que o algoritmo pode ser cruel.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Nossa equipe conta com especialistas em mídias sociais focados em entregar não apenas números, 
            mas credibilidade. Trabalhamos com segurança total, sem pedir senhas, garantindo que seu 
            foco seja apenas criar conteúdo enquanto nós cuidamos do crescimento.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                <div className="text-2xl font-bold text-white">+50k</div>
                <div className="text-xs text-zinc-500">Clientes Atendidos</div>
             </div>
             <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-xs text-zinc-500">Satisfação</div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
           <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10"></div>
              <img 
                src="https://picsum.photos/seed/officeWork/800/600?grayscale" 
                alt="Agência Bless Marketing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
              <div className="absolute bottom-8 left-8 z-30">
                 <div className="text-white font-bold text-xl">Bless Marketing</div>
                 <div className="text-zinc-400 text-sm">Desde 2020 impulsionando sonhos.</div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
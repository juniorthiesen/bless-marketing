import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Gift, ShoppingCart, MessageCircle, Sparkles, TrendingDown, Globe, Tag } from 'lucide-react';
import { PLANS_MIXED, PLANS_BRAZILIAN, WHATSAPP_BASE_URL } from '../constants';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan?: (plan: Plan, isBrazilian: boolean) => void;
  hasDiscount?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan, hasDiscount = false }) => {
  // Alterado para iniciar com 'brazilian' por padrão
  const [planType, setPlanType] = useState<'brazilian' | 'mixed'>('brazilian');
  const activePlans = planType === 'brazilian' ? PLANS_BRAZILIAN : PLANS_MIXED;

  const handleBuy = (plan: Plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan, planType === 'brazilian');
    } else {
      // Fallback local se a prop não for passada
      const typeText = planType === 'brazilian' ? "Brasileiros 🇧🇷" : "Mundiais 🌍";
      const finalPrice = hasDiscount ? plan.price * 0.8 : plan.price;
      const message = `Olá! Gostaria de comprar o pacote de ${plan.followers} seguidores (${typeText}) por R$${finalPrice.toFixed(2).replace('.', ',')}.`;
      window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleCustom = () => {
    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá, preciso de um pacote acima de 10k seguidores.")}`, '_blank');
  };

  return (
    <section id="plans" className="relative py-24 overflow-hidden bg-background">
      {/* --- Modern Social Media Background (Hero Continuation) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* 1. Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"></div>

        {/* 2. Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 3. Social Media "Aura" Blobs */}
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[128px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
        <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[128px] mix-blend-screen opacity-60"></div>
        <div className="absolute -bottom-[20%] left-[30%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] mix-blend-screen"></div>

        {/* 4. Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Válido Apenas Hoje
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Escolha seu Pacote
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 font-light text-lg">
            Promoção exclusiva para <span className="text-white font-semibold">Instagram</span> ou <span className="text-white font-semibold">TikTok</span>. 
            <br className="hidden md:block"/>
            Garanta o menor custo por seguidor do mercado.
          </p>

          {/* Toggle Switcher Reordered: Brazilian First */}
          <div className="flex justify-center mb-8">
            <div className="bg-zinc-900 p-1.5 rounded-full border border-zinc-800 flex relative shadow-inner">
               <motion.div 
                 className="absolute top-1.5 bottom-1.5 bg-zinc-800 rounded-full shadow-sm border border-zinc-700/50 z-0"
                 layoutId="activeTab"
                 initial={false}
                 animate={{
                   left: planType === 'brazilian' ? '6px' : '50%',
                   width: 'calc(50% - 6px)',
                 }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               />
               
               <button 
                 onClick={() => setPlanType('brazilian')}
                 className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors duration-200 ${planType === 'brazilian' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 <span>🇧🇷</span>
                 <span>Brasileiros</span>
               </button>
               
               <button 
                 onClick={() => setPlanType('mixed')}
                 className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors duration-200 ${planType === 'mixed' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 <Globe size={16} />
                 <span>Mundiais</span>
               </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
          {activePlans.map((plan, index) => {
            const finalPrice = hasDiscount ? plan.price * 0.8 : plan.price;
            const costPerThousand = (finalPrice / plan.followers) * 1000;
            
            return (
            <motion.div
              key={`${planType}-${plan.id}`}
              className={`relative flex flex-col p-6 rounded-3xl border backdrop-blur-md transition-all duration-300 group
                ${plan.featured 
                  ? 'bg-zinc-900/80 border-green-500/50 shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_-5px_rgba(34,197,94,0.4)] z-10 scale-[1.02] md:scale-105' 
                  : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80'}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: plan.featured ? 1.05 : 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-20">
                  <Sparkles size={12} fill="currentColor" />
                  MAIS VENDIDO
                </div>
              )}

              {hasDiscount && (
                 <div className="absolute top-4 right-4 bg-primary/20 text-primary border border-primary/30 px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
                    <Tag size={10} />
                    -20% OFF
                 </div>
              )}

              <div className="mb-6 relative">
                 {plan.featured && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl pointer-events-none"></div>
                 )}
                 
                <h3 className={`font-medium mb-2 uppercase tracking-wide text-xs ${plan.featured ? 'text-green-400' : 'text-zinc-500'}`}>
                  {plan.featured ? 'Recomendado' : 'Pacote'} {planType === 'brazilian' ? '🇧🇷' : '🌎'}
                </h3>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white group-hover:scale-105 transition-transform origin-left duration-300 block">{plan.followers.toLocaleString()}</span>
                  <span className="text-zinc-500 text-sm">Seguidores</span>
                </div>
                
                <div className="mt-4 flex flex-col">
                  {hasDiscount && (
                    <div className="flex items-center gap-2 text-zinc-500 line-through text-sm">
                        R$ {plan.price.toFixed(2).replace('.', ',')}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-zinc-500 font-light">R$</span>
                    <span className={`text-4xl font-display font-bold ${hasDiscount ? 'text-primary' : 'text-white'}`}>
                        {finalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mt-1">
                     <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1
                        ${plan.featured ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                        <TrendingDown size={10} />
                        R$ {costPerThousand.toFixed(2)} / mil
                     </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                     <Check size={14} className="text-green-500" />
                  </div>
                  <span>
                    {planType === 'brazilian' 
                      ? <span className="font-semibold text-white">Seguidores 100% Brasileiros</span> 
                      : <span>Seguidores Mundiais/Mistos</span>}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                     <Gift size={14} className="text-secondary" />
                  </div>
                  <span className="text-white font-medium">+{plan.bonusViews.toLocaleString()} Visualizações (Bônus)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-zinc-800/50 flex items-center justify-center shrink-0 border border-zinc-700">
                     <Check size={14} className="text-zinc-400" />
                  </div>
                  <span>Sem senha (apenas @)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-zinc-800/50 flex items-center justify-center shrink-0 border border-zinc-700">
                     <Check size={14} className="text-zinc-400" />
                  </div>
                  <span>Reposição Garantida</span>
                </div>
              </div>

              <button
                onClick={() => handleBuy(plan)}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group/btn 
                ${plan.featured 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-900/40 hover:scale-[1.02]' 
                  : 'bg-zinc-800 text-white hover:bg-green-700 border border-zinc-700 hover:border-green-600 hover:scale-[1.02]'
                }`}
              >
                {plan.featured && (
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Comprar Agora
                </span>
              </button>
            </motion.div>
            );
          })}
          </AnimatePresence>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
           <button 
             onClick={handleCustom}
             className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-6 py-3 rounded-full hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
           >
             <MessageCircle size={18} className="group-hover:text-primary transition-colors" />
             Precisa de mais de 10k? <span className="underline decoration-zinc-700 underline-offset-4 group-hover:decoration-white">Solicitar Orçamento</span>
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
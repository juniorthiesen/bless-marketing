import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, Zap, Heart, UserPlus, Bell, TrendingUp, Instagram, ArrowLeft, MoreHorizontal, Grid, MonitorPlay, User, House, Search, PlusSquare, Clapperboard, MessageCircle, Send } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20 pb-10 bg-background">
      {/* --- Modern Social Media Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Base Gradient (Dark) */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>

        {/* 2. Technical Grid Pattern with Fade Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 3. Social Media "Aura" Blobs (Instagram/TikTok Vibe) */}
        {/* Top Left - Purple/Blue (Tech/Trust) */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
        
        {/* Center Right - Pink/Rose (Instagram) */}
        <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[128px] mix-blend-screen opacity-60"></div>
        
        {/* Bottom Left - Amber/Orange (Warmth/Notifications) */}
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] mix-blend-screen"></div>

        {/* 4. Noise Texture (Premium Feel) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        {/* 5. Floating Social Icons */}
        <FloatingBackgroundIcon icon={<Heart size={28} className="text-pink-500/40" />} x="10%" y="20%" delay={0} duration={15} />
        <FloatingBackgroundIcon icon={<UserPlus size={32} className="text-blue-500/40" />} x="85%" y="15%" delay={2} duration={18} />
        <FloatingBackgroundIcon icon={<TrendingUp size={24} className="text-green-500/40" />} x="80%" y="60%" delay={5} duration={20} />
        <FloatingBackgroundIcon icon={<Instagram size={40} className="text-purple-500/30" />} x="5%" y="60%" delay={7} duration={22} />
        <FloatingBackgroundIcon icon={<Bell size={24} className="text-yellow-500/40" />} x="50%" y="15%" delay={10} duration={25} />
      </div>

      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center gap-12 relative">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-white/10 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Promoção do Dia</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white drop-shadow-xl">
            Transforme seu perfil em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">autoridade digital</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
            Tenha mais credibilidade, atraia marcas e feche mais negócios. 
            Seguidores reais para <strong className="text-white">Instagram</strong> e <strong className="text-white">TikTok</strong>. 
            Quem vê números altos, confia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={handleScrollToPlans}
              className="px-8 py-4 bg-gradient-to-r from-primary to-purple-700 hover:from-purple-600 hover:to-primary text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 border border-white/10"
            >
              <Zap size={20} className="fill-current" />
              Garantir Promoção
            </button>
            <a 
              href={`${WHATSAPP_BASE_URL}?text=Ola%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20promocao%20do%20dia.`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 hover:bg-zinc-800"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-zinc-400 pt-4 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-500" />
              <span>Sem senha</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-yellow-400" />
              <span>Entrega rápida</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content (Realistic iPhone Mockup) */}
        <motion.div 
          className="flex-1 relative w-full max-w-[320px] mx-auto mt-12 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Phone Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-[80px] -z-10"></div>

          {/* iPhone Frame */}
          <div className="relative z-10 mx-auto border-zinc-900 bg-black border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/20 select-none">
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex justify-center">
                 <div className="w-24 h-6 bg-black rounded-b-3xl flex items-center justify-center gap-2">
                    <div className="w-12 h-4 bg-zinc-900 rounded-full"></div>
                 </div>
            </div>

            {/* Status Bar Mock */}
            <div className="h-10 w-full bg-black flex items-end justify-between px-6 pb-1 text-[10px] text-white font-bold z-20">
                <span>19:42</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-2h2v2zm0-4h-2V7h2v7z" opacity="0"></path><path d="M1 1l22 22"></path><path d="M12 4c-3.1 0-5.87 1.2-8 3.19l1.45 1.45C7.03 7.37 9.38 6.5 12 6.5c2.62 0 4.97.87 6.55 2.14l1.45-1.45C17.87 5.2 15.1 4 12 4z"></path><path d="M12 9c-1.39 0-2.65.5-3.66 1.34l3.66 3.66 3.66-3.66C14.65 9.5 13.39 9 12 9z"></path></svg></div>
                    <div className="w-3 h-3"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.73 0 1.33-.6 1.33-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path></svg></div>
                </div>
            </div>

            {/* Phone Screen Content (Instagram UI) */}
            <div className="flex-1 bg-black text-white overflow-hidden relative font-sans flex flex-col">
               
               {/* Notifications Overlay */}
               <div className="absolute top-2 left-0 right-0 z-40 px-2 pointer-events-none">
                  <NotificationFeed />
               </div>

               {/* Top Bar */}
               <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-900/50">
                  <ArrowLeft size={24} />
                  <span className="font-bold text-sm">perfil_de_sucesso</span>
                  <MoreHorizontal size={24} />
               </div>

               {/* Profile Header */}
               <div className="px-4 py-4">
                  <div className="flex items-center justify-between">
                     {/* Avatar with Story Ring */}
                     <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600 p-[2px]">
                           <img 
                              src="https://picsum.photos/seed/profilehero/100/100" 
                              className="rounded-full w-full h-full border-2 border-black object-cover" 
                              alt="Profile" 
                           />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full border-2 border-black p-0.5">
                            <div className="w-3 h-3 flex items-center justify-center text-white font-bold text-[10px]">+</div>
                        </div>
                     </div>

                     {/* Stats */}
                     <div className="flex-1 flex justify-around ml-4">
                        <div className="flex flex-col items-center">
                           <span className="font-bold text-lg">45</span>
                           <span className="text-xs text-zinc-400">Posts</span>
                        </div>
                        <div className="flex flex-col items-center relative">
                           <span className="font-bold text-lg text-white flex items-center">
                              <Counter from={850} to={15400} />
                           </span>
                           {/* Pulse effect on follower count */}
                           <motion.span 
                             className="absolute -right-2 -top-1 w-2 h-2 bg-red-500 rounded-full"
                             animate={{ opacity: [0, 1, 0] }}
                             transition={{ duration: 1, repeat: Infinity }}
                           />
                           <span className="text-xs text-zinc-400">Seguidores</span>
                        </div>
                        <div className="flex flex-col items-center">
                           <span className="font-bold text-lg">210</span>
                           <span className="text-xs text-zinc-400">Seguindo</span>
                        </div>
                     </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-3">
                     <div className="font-bold text-sm">Seu Nome Aqui 🚀</div>
                     <div className="text-sm text-zinc-200 leading-snug">
                        Criador de Conteúdo Digital <br/>
                        Ajudando você a crescer nas redes sociais.<br/>
                        👇 Confira nossos pacotes
                     </div>
                     <div className="text-blue-400 text-sm mt-0.5 font-medium">blessmarketing.com</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                     <button className="flex-1 bg-zinc-800 py-1.5 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors">Editar Perfil</button>
                     <button className="flex-1 bg-zinc-800 py-1.5 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors">Compartilhar</button>
                  </div>

                  {/* Highlights */}
                  <div className="flex gap-4 mt-6 overflow-x-hidden pb-2">
                     {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                           <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 p-1">
                               <div className="w-full h-full bg-zinc-800 rounded-full"></div>
                           </div>
                           <div className="w-12 h-2 bg-zinc-800 rounded-full"></div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Tab Bar */}
               <div className="flex border-t border-zinc-900 mt-2">
                  <div className="flex-1 flex justify-center py-2.5 border-b-2 border-white">
                     <Grid size={22} />
                  </div>
                  <div className="flex-1 flex justify-center py-2.5 text-zinc-500">
                     <MonitorPlay size={22} />
                  </div>
                  <div className="flex-1 flex justify-center py-2.5 text-zinc-500">
                     <User size={22} strokeWidth={2.5} className="p-0.5 border-2 border-zinc-500 rounded-md" />
                  </div>
               </div>

               {/* Grid Feed */}
               <div className="grid grid-cols-3 gap-0.5 flex-1 overflow-hidden relative">
                   {[...Array(9)].map((_, i) => (
                       <div key={i} className="bg-zinc-900 relative aspect-square group overflow-hidden">
                           <img 
                            src={`https://picsum.photos/seed/post${i}/200/200?grayscale`} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                            alt="Post"
                           />
                           {i === 0 && (
                             <div className="absolute top-1 right-1">
                               <div className="w-3 h-3 bg-white rounded-full"></div>
                             </div>
                           )}
                       </div>
                   ))}
                   
                   {/* Bottom fade for "scroll" feel */}
                   <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black to-transparent z-10"></div>
               </div>

               {/* Bottom Navigation */}
               <div className="h-[50px] bg-black border-t border-zinc-900 flex items-center justify-between px-6 pb-2 z-20">
                   <House size={24} strokeWidth={2.5} />
                   <Search size={24} strokeWidth={2.5} className="text-zinc-500" />
                   <PlusSquare size={24} strokeWidth={2.5} className="text-zinc-500" />
                   <Clapperboard size={24} strokeWidth={2.5} className="text-zinc-500" />
                   <div className="w-6 h-6 rounded-full bg-zinc-700 overflow-hidden border border-zinc-500">
                      <img src="https://picsum.photos/seed/profilehero/50/50" className="w-full h-full object-cover" />
                   </div>
               </div>

               {/* Viral Hearts Animation (Instagram Live Style) */}
               <div className="absolute bottom-16 right-0 w-24 h-48 overflow-hidden z-30 pointer-events-none">
                   <ViralHearts />
               </div>

            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce cursor-pointer z-20 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

// --- Sub-components for Animations ---

const FloatingBackgroundIcon = ({ icon, x, y, delay, duration }: { icon: React.ReactNode, x: string, y: string, delay: number, duration: number }) => (
  <motion.div
    className="absolute z-0"
    style={{ left: x, top: y }}
    animate={{ 
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {icon}
  </motion.div>
);

const ViralHearts = () => {
  const [hearts, setHearts] = useState<{id: number, x: number, scale: number, color: string}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      const colors = ['text-red-500', 'text-pink-500', 'text-purple-500', 'text-white'];
      const newHeart = {
        id,
        x: Math.random() * 40, // Random X position
        scale: 0.5 + Math.random() * 0.8, // Random size
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setHearts(prev => [...prev.slice(-15), newHeart]); // Keep max 15 hearts
    }, 400); // New heart every 400ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 100, x: heart.x }}
            animate={{ opacity: [0, 1, 0], y: -200 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className={`absolute bottom-0 right-4 ${heart.color}`}
            style={{ scale: heart.scale }}
          >
            <Heart className="fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

const NotificationFeed = () => {
  const [notifications, setNotifications] = useState<{id: number, text: string, icon: React.ReactNode, type: string}[]>([]);
  
  const names = ["ana_julia", "lucas.gamer", "loja_fashion", "pedro_h", "mari.fit", "joao_vitor", "bia_beauty", "tech_mania", "carlos.mkt", "julia_desig", "felipe_vlog", "camila_s"];
  const actions = [
    { text: "começou a seguir você", icon: <UserPlus size={12} className="text-white" />, type: 'follow' },
    { text: "curtiu sua foto", icon: <Heart size={12} className="text-white fill-white" />, type: 'like' },
    { text: "comentou: Top! 👏👏", icon: <MessageCircle size={12} className="text-white" />, type: 'comment' },
    { text: "enviou uma mensagem", icon: <MessageCircle size={12} className="text-white" />, type: 'dm' },
    { text: "compartilhou seu reel", icon: <Send size={12} className="text-white" />, type: 'share' },
    { text: "respondeu seu story", icon: <Heart size={12} className="text-white fill-white" />, type: 'like' },
  ];

  useEffect(() => {
    let timeoutId: number;
    let isMounted = true;

    const showNotification = () => {
      if (!isMounted) return;

      const id = Date.now();
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      const newNotif = {
        id,
        text: `@${randomName} ${randomAction.text}`,
        icon: randomAction.icon,
        type: randomAction.type
      };

      // Show notification
      setNotifications([newNotif]);

      // Schedule hide after 4 seconds (Reading time)
      timeoutId = window.setTimeout(() => {
        if (!isMounted) return;
        setNotifications([]); // This triggers exit animation

        // Schedule next show after 7 seconds (Empty time)
        timeoutId = window.setTimeout(showNotification, 7000);
      }, 4000); 
    };

    // Start the loop
    showNotification();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  const getBgColor = (type: string) => {
      if (type === 'like') return 'bg-red-500';
      if (type === 'follow') return 'bg-blue-500';
      if (type === 'comment') return 'bg-green-500';
      if (type === 'share') return 'bg-purple-500';
      return 'bg-zinc-700';
  }

  return (
    <div className="flex flex-col gap-2 w-full items-center min-h-[50px]">
      <AnimatePresence>
        {notifications.map(notif => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
            className="flex items-center gap-2 bg-zinc-800/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/5 shadow-xl w-[95%] mx-auto"
          >
             <div className={`p-1.5 rounded-full ${getBgColor(notif.type)}`}>
                {notif.icon}
             </div>
             <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-zinc-100 truncate w-full">
                <span className="font-bold">{notif.text.split(' ')[0]}</span> {notif.text.split(' ').slice(1).join(' ')}
                </span>
                <span className="text-[9px] text-zinc-400">agora</span>
             </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Simple Counter Component with K formatting logic simulated
const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    const duration = 5000; // Duration of growth
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = (to - from) / steps;

    const timer = setInterval(() => {
        setCount(prev => {
            const next = prev + increment;
            if (next >= to) {
                // Keep growing slowly after reaching target to simulate live feeling
                return prev + (Math.random() > 0.5 ? 1 : 0);
            }
            return next;
        });
    }, stepTime);
    return () => clearInterval(timer);
  }, [from, to]);

  // Format helper
  const format = (num: number) => {
     if (num >= 10000) return (num / 1000).toFixed(1) + 'k';
     return Math.floor(num).toLocaleString();
  }

  return <span>{format(count)}</span>;
};

export default Hero;
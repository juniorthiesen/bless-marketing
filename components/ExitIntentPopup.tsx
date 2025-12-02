import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, AlertTriangle } from 'lucide-react';

interface ExitIntentPopupProps {
  onAccept: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Se o mouse sair pelo topo da página (intenção de fechar aba/navegador)
      // e ainda não tiver sido disparado na sessão
      if (e.clientY <= 0 && !hasTriggered) {
        // Verifica sessionStorage para não mostrar toda hora
        const alreadyShown = sessionStorage.getItem('exitIntentShown');
        if (!alreadyShown) {
          setIsVisible(true);
          setHasTriggered(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAccept = () => {
    onAccept();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div 
            className="relative bg-zinc-900 w-full max-w-md rounded-3xl border-2 border-primary/50 shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
          >
            {/* Header Alert */}
            <div className="bg-primary/20 p-4 flex items-center justify-center gap-2 border-b border-primary/20">
              <AlertTriangle className="text-primary animate-pulse" size={20} />
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Espere! Não vá ainda</span>
            </div>

            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center relative">
              {/* Background Effects */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-700 shadow-inner">
                <Tag size={32} className="text-white transform -rotate-45" />
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-2">
                Ganhe <span className="text-primary">20% OFF</span>
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Queremos ver você crescer. Complete seu pedido agora e ganhe um desconto exclusivo na primeira compra.
              </p>

              <div className="bg-zinc-950 border border-dashed border-zinc-700 rounded-xl p-3 mb-6 flex items-center justify-center gap-3">
                 <span className="text-zinc-500 text-xs uppercase font-bold">Cupom:</span>
                 <span className="text-white font-mono text-lg font-bold tracking-widest">PRIMEIRA20</span>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleAccept}
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Tag size={18} />
                  Aplicar Desconto Agora
                </button>
                <button 
                  onClick={handleClose}
                  className="text-zinc-500 text-sm hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4"
                >
                  Não, prefiro pagar o preço total
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle, MessageCircle, AlertCircle, Loader2, Tag } from 'lucide-react';
import { Plan, CheckoutData } from '../types';
import { WHATSAPP_BASE_URL } from '../constants';
import { trackPixelEvent, sendToWebhook } from '../utils/analytics';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
  isBrazilian: boolean;
  hasDiscount?: boolean;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, plan, isBrazilian, hasDiscount = false }) => {
  const [step, setStep] = useState<'form' | 'redirecting'>('form');
  const [formData, setFormData] = useState<CheckoutData>({
    username: '',
    whatsapp: '',
    platform: 'instagram'
  });
  const [couponCode, setCouponCode] = useState(hasDiscount ? 'PRIMEIRA20' : '');
  const [error, setError] = useState('');

  // Update coupon if prop changes
  useEffect(() => {
    if (hasDiscount) {
        setCouponCode('PRIMEIRA20');
    }
  }, [hasDiscount]);

  // Track InitiateCheckout when modal opens
  useEffect(() => {
    if (isOpen && plan) {
      setStep('form');
      // Preço base
      trackPixelEvent('InitiateCheckout', {
        currency: 'BRL',
        value: plan.price,
        content_name: `${plan.followers} Seguidores ${isBrazilian ? 'BR' : 'Mundial'}`,
        content_ids: [plan.id.toString()],
        content_type: 'product',
        num_items: 1
      });
    }
  }, [isOpen, plan, isBrazilian]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plan) return;

    if (!formData.username || !formData.whatsapp) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setStep('redirecting');
    
    // Calculate final price based on discount logic
    // Se o código for PRIMEIRA20, aplica desconto. Caso contrário, preço cheio.
    // Em produção, validaria numa lista de cupons.
    const isCouponValid = couponCode.toUpperCase() === 'PRIMEIRA20';
    const finalPrice = isCouponValid ? plan.price * 0.8 : plan.price;

    // 1. Track Lead (User submitted info)
    trackPixelEvent('Lead', {
      currency: 'BRL',
      value: finalPrice,
      content_name: 'Formulário Preenchido'
    });

    // 2. Send to Webhook (Simulated CAPI)
    await sendToWebhook('Lead', {
        value: finalPrice,
        currency: 'BRL'
    }, formData);

    // 3. Track Purchase (Intent to buy on WhatsApp)
    trackPixelEvent('Purchase', {
      currency: 'BRL',
      value: finalPrice,
      content_name: `${plan.followers} Seguidores ${isBrazilian ? 'BR' : 'Mundial'}`,
      content_ids: [plan.id.toString()],
      content_type: 'product'
    });
    
    // Simulate delay for API call
    setTimeout(() => {
      const typeText = isBrazilian ? "Brasileiros 🇧🇷" : "Mundiais 🌍";
      
      let message = `Olá! Vim do site.
      
🛒 *Pedido:* ${plan.followers} Seguidores (${typeText})
📱 *Perfil:* ${formData.username}
🔗 *Plataforma:* ${formData.platform.charAt(0).toUpperCase() + formData.platform.slice(1)}
💰 *Valor Final:* R$ ${finalPrice.toFixed(2).replace('.', ',')}`;

      if (isCouponValid) {
          message += `\n🎟 *Cupom Aplicado:* ${couponCode.toUpperCase()}`;
      }

      message += `\n\nGostaria de finalizar o pagamento.`;
      
      window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
      setStep('form');
    }, 1500);
  };

  if (!isOpen || !plan) return null;

  // Preço para exibição no modal
  const displayPrice = (couponCode.toUpperCase() === 'PRIMEIRA20' || hasDiscount) 
    ? plan.price * 0.8 
    : plan.price;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div 
          className="relative w-full max-w-md bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Lock size={16} className="text-green-500" />
              Finalizar Pedido Seguro
            </h3>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            {/* Order Summary */}
            <div className="bg-zinc-950/50 rounded-xl p-4 mb-6 border border-zinc-800/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-zinc-400">Pacote Selecionado:</span>
                <div className="text-right">
                    {displayPrice !== plan.price && (
                        <span className="block text-xs text-zinc-500 line-through">R$ {plan.price.toFixed(2).replace('.', ',')}</span>
                    )}
                    <span className="font-bold text-white text-lg">R$ {displayPrice.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              <div className="text-green-400 font-medium text-sm">
                {plan.followers.toLocaleString()} Seguidores {isBrazilian ? '🇧🇷' : '🌍'}
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                + {plan.bonusViews.toLocaleString()} visualizações de bônus
              </div>
            </div>

            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Platform Selector */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                        type="button"
                        onClick={() => setFormData({...formData, platform: 'instagram'})}
                        className={`py-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${formData.platform === 'instagram' ? 'bg-pink-600/10 border-pink-500 text-pink-500' : 'bg-zinc-800 border-zinc-700 text-zinc-400'}`}
                    >
                        Instagram
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({...formData, platform: 'tiktok'})}
                        className={`py-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${formData.platform === 'tiktok' ? 'bg-black border-white text-white' : 'bg-zinc-800 border-zinc-700 text-zinc-400'}`}
                    >
                        TikTok
                    </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">
                    Seu @usuario ({formData.platform})
                  </label>
                  <input 
                    type="text" 
                    placeholder="@seu.perfil"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                  <div className="flex items-center gap-1 mt-1.5 ml-1">
                     <AlertCircle size={10} className="text-yellow-500" />
                     <span className="text-[10px] text-zinc-500">Importante: O perfil deve estar <strong>PÚBLICO</strong>.</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">
                    Seu WhatsApp (com DDD)
                  </label>
                  <input 
                    type="tel" 
                    placeholder="(00) 90000-0000"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>

                <div>
                   <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">
                    Cupom de Desconto
                  </label>
                  <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Possui cupom?"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all uppercase"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Tag size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  </div>
                  {couponCode.toUpperCase() === 'PRIMEIRA20' && (
                      <span className="text-[10px] text-primary ml-1 mt-1 block">Cupom aplicado com sucesso!</span>
                  )}
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
                >
                  <MessageCircle size={20} />
                  Ir para Pagamento (WhatsApp)
                </button>
                
                <p className="text-center text-[10px] text-zinc-600 mt-2">
                    Ao continuar, você concorda com nossos termos. Ambiente seguro.
                </p>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <Loader2 size={48} className="text-green-500 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Processando pedido...</h3>
                <p className="text-zinc-400 text-sm max-w-[200px]">
                    Estamos redirecionando você para o atendimento prioritário.
                </p>
              </div>
            )}
          </div>
          
          {/* Footer security strip */}
          <div className="bg-zinc-950 px-6 py-3 border-t border-zinc-800 flex justify-center gap-4">
             <div className="flex items-center gap-1 grayscale opacity-50">
                 <CheckCircle size={12} />
                 <span className="text-[10px] text-zinc-400">Site Seguro</span>
             </div>
             <div className="flex items-center gap-1 grayscale opacity-50">
                 <CheckCircle size={12} />
                 <span className="text-[10px] text-zinc-400">Dados Criptografados</span>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
import React from 'react';
import { WHATSAPP_BASE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 text-center">
        
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Pare de ser ignorado. <br />
            Comece a ser <span className="text-primary">relevante</span>.
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Escolha seu pacote ou fale com nossa equipe. Vamos fazer seu perfil crescer juntos hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
             >
                Garantir Promoção
             </button>
             <a 
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
             >
                Comprar pelo WhatsApp
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900 text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Bless Marketing. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-zinc-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
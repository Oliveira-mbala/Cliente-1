import React from 'react';
import { Users, MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  const whatsappLink = "https://whatsapp.com/channel/0029Vb6oaa0BlHpjG2CIVZ00";

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-[#0B2134] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[#25D366] mb-4">
              <Users size={24} />
              <span className="font-bold uppercase tracking-wider">Comunidade VIP</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Não perca nenhuma <br />
              <span className="text-[#25D366]">Aposta ou Dica!</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Junte-se ao nosso canal oficial no WhatsApp. Receba palpites diários, 
              informações sobre bônus exclusivos e novidades da Elephant Bet em primeira mão.
            </p>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105"
            >
              <MessageCircle size={24} />
              Entrar no Grupo WhatsApp
            </a>
          </div>

          <div className="relative">
             {/* Abstract Phone/Chat Visual - Static */}
             <div className="w-64 md:w-80 h-auto bg-gray-900 rounded-3xl border-4 border-gray-800 p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-800 h-8 w-24 mx-auto rounded-full mb-4"></div>
                <div className="space-y-4">
                    <div className="bg-[#0f172a] p-3 rounded-lg rounded-tl-none border border-gray-700">
                        <p className="text-xs text-green-400 font-bold mb-1">Admin</p>
                        <p className="text-sm text-gray-300">Pessoal, o bônus de recarga está ativo! 🚀</p>
                    </div>
                    <div className="bg-[#0f172a] p-3 rounded-lg rounded-tl-none border border-gray-700">
                        <p className="text-xs text-green-400 font-bold mb-1">Admin</p>
                        <p className="text-sm text-gray-300">Nova rodada de Aviator começando agora. Quem vai subir? ✈️</p>
                    </div>
                     <div className="bg-[#25D366]/20 p-3 rounded-lg rounded-tr-none border border-[#25D366]/30 ml-auto w-4/5">
                        <p className="text-sm text-white text-right">Acabei de ganhar! 🔥</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;
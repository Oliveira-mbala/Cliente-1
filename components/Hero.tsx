import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const registerLink = "https://www.elephantbet.co.ao/affiliates/?btag=2315330_l372210";
  const whatsappLink = "https://whatsapp.com/channel/0029Vb6oaa0BlHpjG2CIVZ00";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-elephant-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-elephant-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6"
            >
              <Zap size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-gray-200">Bônus de boas-vindas disponível</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              A Casa dos <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elephant-blue to-cyan-400">
                Grandes Vencedores
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Junte-se à Elephant Bet e viva a emoção do Aviator, Futebol e muito mais. 
              Pagamentos rápidos e as melhores odds de Angola.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a 
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-elephant-accent hover:bg-pink-600 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-elephant-accent/30 flex items-center justify-center gap-2"
              >
                Criar Conta Agora
                <ArrowRight size={20} />
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
              >
                Entrar no grupo do WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Visual/Image Placeholder */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="flex-1 relative"
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-square bg-gradient-to-tr from-elephant-blue to-cyan-500 rounded-3xl p-1 animate-pulse-slow shadow-2xl shadow-elephant-blue/40 rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="w-full h-full bg-[#0f172a] rounded-[22px] flex flex-col items-center justify-center overflow-hidden relative">
                  {/* Decorative Background grid inside card */}
                  <div className="absolute inset-0 opacity-20" 
                       style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  </div>
                  
                  <Trophy size={120} className="text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                  <h3 className="text-3xl font-bold text-white text-center">Ganhe Alto</h3>
                  <p className="text-elephant-blue font-semibold mt-2">Elephant Bet</p>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 animate-bounce">
                    <span className="text-green-400 font-bold">Odds Altas 🚀</span>
                  </div>
                  <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                    <span className="text-pink-400 font-bold">Aviator ✈️</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
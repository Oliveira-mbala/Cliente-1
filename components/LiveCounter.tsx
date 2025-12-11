import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Plane, Trophy, Gift, ArrowRight, Star } from 'lucide-react';

const LiveCounter: React.FC = () => {
  const [count, setCount] = useState(1000000);
  const [activeCard, setActiveCard] = useState(0);

  // Counter logic - simple linear decrease
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const decrease = Math.floor(Math.random() * 15) + 5;
        return Math.max(0, prev - decrease);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Card rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 5000); // Rotates every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const formattedCount = new Intl.NumberFormat('pt-AO', {
    minimumIntegerDigits: 7,
    useGrouping: true,
  }).format(count);

  const registerLink = "https://www.elephantbet.co.ao/affiliates/?btag=2315330_l372210";

  const cards = [
    {
      id: 0,
      title: "Aviator",
      subtitle: "Multiplique seus ganhos",
      color: "from-purple-900 to-red-900",
      icon: <Plane className="text-white" size={64} />,
      desc: "O jogo mais popular de Angola. Voe alto e ganhe muito!",
    },
    {
      id: 1,
      title: "Futebol",
      subtitle: "Aposte no seu time",
      color: "from-green-900 to-teal-900",
      icon: <Trophy className="text-white" size={64} />,
      desc: "As melhores odds do mercado para os grandes campeonatos.",
    },
    {
      id: 2,
      title: "Bônus",
      subtitle: "Ofertas Exclusivas",
      color: "from-yellow-700 to-orange-900",
      icon: <Gift className="text-white" size={64} />,
      desc: "Registe-se hoje e aproveite nosso bônus de boas-vindas.",
    }
  ];

  return (
    <section className="py-16 bg-[#081826] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Counter Section */}
        <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-2 mb-4 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full">
                <Clock size={16} className="text-red-500" />
                <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Tempo Limitado</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Bônus Disponível</h2>
            
            <div className="relative group p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-30"></div>
                <div className="relative px-8 py-6 bg-[#0f172a] border border-gray-700/50 rounded-xl flex items-center gap-2 md:gap-4 shadow-xl">
                    <span className="text-elephant-accent font-bold text-2xl md:text-4xl mr-2">KZ</span>
                    <span className="font-mono text-4xl md:text-6xl font-bold text-white tracking-widest">
                      {formattedCount}
                    </span>
                </div>
            </div>
            <p className="text-gray-400 mt-4 text-center max-w-md text-sm md:text-base">
                O fundo promocional está a descer. <br/> 
                <span className="text-white font-semibold">Registe-se agora</span> para garantir a sua parte!
            </p>
        </div>

        {/* Carousel Section */}
        <div className="relative h-[400px] w-full max-w-lg mx-auto mb-16">
            <AnimatePresence mode="wait">
                {cards.map((card, index) => {
                    if (index !== activeCard) return null;
                    
                    return (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className={`w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl bg-gradient-to-br ${card.color} border border-white/10`}>
                                <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm shadow-inner">
                                    {card.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-white/80 font-medium mb-4 uppercase tracking-wide text-sm">{card.subtitle}</p>
                                <p className="text-gray-200 text-lg max-w-xs">{card.desc}</p>
                                
                                <div className="mt-6 flex gap-1">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>

        {/* CTA Text & Button */}
        <div className="text-center mt-12 relative z-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                Clica já em registar e ganhe seu <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-elephant-accent to-purple-400">
                    bônus de boas vindas
                </span>
            </h3>
            
            <a 
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-elephant-accent rounded-full shadow-lg hover:bg-pink-600 transition-all hover:scale-105"
            >
                <span className="relative flex items-center gap-3 text-xl tracking-wide">
                    REGISTAR AGORA
                    <ArrowRight />
                </span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default LiveCounter;
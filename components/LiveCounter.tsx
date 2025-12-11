import React, { useState, useEffect } from 'react';
import { Clock, Plane, Trophy, Gift, ArrowRight, Star, TrendingDown, AlertCircle } from 'lucide-react';

const LiveCounter: React.FC = () => {
  const [count, setCount] = useState(1000000);

  // Simple countdown logic without complex "AI" behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev > 10000 ? prev - 25 : 1000000));
    }, 1000);
    return () => clearInterval(interval);
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
      subtitle: "Multiplique",
      color: "bg-gradient-to-br from-purple-900 to-red-900",
      icon: <Plane className="text-white" size={48} />,
      desc: "O jogo mais popular de Angola. Voe alto e ganhe muito!",
    },
    {
      id: 1,
      title: "Futebol",
      subtitle: "Aposte Agora",
      color: "bg-gradient-to-br from-green-900 to-teal-900",
      icon: <Trophy className="text-white" size={48} />,
      desc: "As melhores odds do mercado para os grandes campeonatos.",
    },
    {
      id: 2,
      title: "Bônus",
      subtitle: "Ofertas",
      color: "bg-gradient-to-br from-yellow-700 to-orange-900",
      icon: <Gift className="text-white" size={48} />,
      desc: "Registe-se hoje e aproveite nosso bônus de boas-vindas.",
    }
  ];

  return (
    <section className="py-20 bg-[#081826] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Static Counter Panel */}
        <div className="w-full max-w-5xl mx-auto mb-16">
            <div className="bg-[#0f172a] border border-gray-700 rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* Text Info */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-800 text-red-400 px-3 py-1 rounded-md mb-3">
                            <Clock size={16} />
                            <span className="font-bold text-xs uppercase tracking-widest">Tempo Limitado</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Bônus Disponível</h2>
                        <p className="text-gray-400 text-sm">O fundo promocional está a descer.</p>
                    </div>

                    {/* The Counter */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex items-baseline gap-2 bg-black/40 px-6 py-4 rounded-lg border border-gray-700">
                             <span className="text-gray-500 font-bold text-xl">KZ</span>
                             <span className="text-5xl font-mono font-bold text-white tracking-widest">
                                {formattedCount}
                             </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-xs font-bold uppercase">
                            <TrendingDown size={14}/>
                            <span>Diminuindo em tempo real</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Static Cards Grid (Replaces Animated Carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {cards.map((card) => (
                <div key={card.id} className={`rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border border-white/10 ${card.color}`}>
                    <div className="bg-white/10 p-4 rounded-xl mb-4 backdrop-blur-sm">
                        {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                    <span className="text-white/70 text-xs font-bold uppercase tracking-wider mb-4 bg-black/20 px-2 py-1 rounded">{card.subtitle}</span>
                    <p className="text-gray-200 text-sm leading-relaxed mb-6">{card.desc}</p>
                    <div className="mt-auto flex gap-1 opacity-75">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                </div>
            ))}
        </div>

        {/* CTA Text & Button */}
        <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Clica já em registar e ganhe seu <br/>
                <span className="text-elephant-accent">
                    bônus de boas vindas
                </span>
            </h3>
            
            <a 
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-elephant-accent rounded-full hover:bg-pink-700 transition-colors shadow-lg"
            >
                <span className="mr-3 text-xl">REGISTAR AGORA</span>
                <ArrowRight size={20} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default LiveCounter;
import React from 'react';
import { Plane, Trophy, Gift, ArrowRight, Star } from 'lucide-react';

const LiveCounter: React.FC = () => {
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
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Destaques da Elephant Bet
            </h2>
            <p className="text-gray-400">
                Tudo o que você precisa para ganhar está aqui.
            </p>
        </div>

        {/* Static Cards Grid */}
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
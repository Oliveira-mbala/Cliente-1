import React from 'react';
import { Plane, LandPlot, Gift, Coins } from 'lucide-react';

const features = [
  {
    icon: <Plane size={40} className="text-pink-500" />,
    title: "Aviator",
    description: "O jogo do momento! Multiplique sua aposta em segundos antes do avião voar.",
    color: "group-hover:shadow-pink-500/40",
    gradient: "from-pink-500/20 to-transparent"
  },
  {
    icon: <LandPlot size={40} className="text-green-500" />,
    title: "Futebol & Desportos",
    description: "Aposte nas maiores ligas do mundo com as odds mais competitivas do mercado.",
    color: "group-hover:shadow-green-500/40",
    gradient: "from-green-500/20 to-transparent"
  },
  {
    icon: <Gift size={40} className="text-yellow-500" />,
    title: "Bônus de Boas-Vindas",
    description: "Comece com o pé direito! Ganhe bônus incríveis no seu primeiro depósito.",
    color: "group-hover:shadow-yellow-500/40",
    gradient: "from-yellow-500/20 to-transparent"
  },
  {
    icon: <Coins size={40} className="text-cyan-500" />,
    title: "Pagamentos Rápidos",
    description: "Deposite e levante os seus ganhos com rapidez e total segurança.",
    color: "group-hover:shadow-cyan-500/40",
    gradient: "from-cyan-500/20 to-transparent"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#0B2134]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="text-elephant-blue">Elephant Bet?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma plataforma completa feita para quem busca diversão e lucros reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-[#0f172a] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 shadow-xl ${feature.color}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="bg-gray-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
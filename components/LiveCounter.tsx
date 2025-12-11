import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Plane, Trophy, Gift, Play, ArrowRight, Volume2, Maximize2, Zap } from 'lucide-react';

const LiveCounter: React.FC = () => {
  const [count, setCount] = useState(1000000);
  const [activeCard, setActiveCard] = useState(0);

  // Counter logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const decrease = Math.floor(Math.random() * 25) + 5;
        return Math.max(0, prev - decrease);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Card rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds per card
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
      title: "Aviator - Ganhe nas Alturas",
      duration: "05:00",
      color: "from-purple-900 via-pink-900 to-red-900",
      icon: <Plane className="text-white drop-shadow-lg" size={48} />,
      content: (
        <div className="relative w-full h-full overflow-hidden bg-gray-900/50">
           {/* Aviator Grid Background */}
           <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           {/* Plane Animation */}
           <motion.div
             animate={{ x: [0, 250], y: [100, -20] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-10 left-10 z-10"
           >
             <Plane size={64} className="text-red-500 fill-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
             <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-red-500 to-transparent blur-sm"></div>
           </motion.div>
           
           {/* Multiplier Text */}
           <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black text-white drop-shadow-lg"
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
           >
             <span className="text-red-500">5.43</span>x
           </motion.div>
           
           {/* Chart Curve */}
           <svg className="absolute bottom-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
             <motion.path
               d="M0,300 Q150,250 350,50"
               stroke="rgba(239,68,68,0.5)"
               strokeWidth="4"
               fill="none"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />
             <path d="M0,300 L350,50 L350,300 Z" fill="url(#grad1)" opacity="0.2" />
             <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" style={{ stopColor: 'rgb(239,68,68)', stopOpacity: 1 }} />
                 <stop offset="100%" style={{ stopColor: 'rgb(239,68,68)', stopOpacity: 0 }} />
               </linearGradient>
             </defs>
           </svg>
        </div>
      )
    },
    {
      id: 1,
      title: "Futebol - A Emoção do Jogo",
      duration: "05:00",
      color: "from-green-900 via-emerald-900 to-teal-900",
      icon: <Trophy className="text-white drop-shadow-lg" size={48} />,
      content: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-green-900/40">
           {/* Field Pattern */}
           <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(255,255,255,0.03)_50px,rgba(255,255,255,0.03)_100px)]"></div>
           
           {/* Field Markings */}
           <div className="absolute inset-x-4 inset-y-8 border-2 border-white/20 rounded-lg"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
           </div>
           
           {/* Moving Ball Animation */}
           <motion.div
             animate={{ 
               x: [-120, 120, -60, 90], 
               y: [-60, 60, 30, -90], 
               rotate: 720,
               scale: [1, 1.2, 0.9, 1] 
             }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10"
           >
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.6)] border-2 border-gray-300">
               <span className="text-xs">⚽</span>
             </div>
             <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
           </motion.div>
           
           {/* Goal visual */}
           <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-yellow-400 uppercase tracking-tighter rotate-[-10deg] drop-shadow-xl border-4 border-yellow-400 p-2 rounded-xl"
           >
              GOL!
           </motion.div>
        </div>
      )
    },
    {
      id: 2,
      title: "Bônus - Multiplique seus Ganhos",
      duration: "05:00",
      color: "from-yellow-700 via-orange-800 to-red-900",
      icon: <Gift className="text-white drop-shadow-lg" size={48} />,
      content: (
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-yellow-900/20">
            {/* Sunburst background */}
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,white_10deg,transparent_20deg,white_30deg,transparent_40deg,white_50deg,transparent_60deg,white_70deg,transparent_80deg,white_90deg,transparent_100deg,white_110deg,transparent_120deg,white_130deg,transparent_140deg,white_150deg,transparent_160deg,white_170deg,transparent_180deg,white_190deg,transparent_200deg,white_210deg,transparent_220deg,white_230deg,transparent_240deg,white_250deg,transparent_260deg,white_270deg,transparent_280deg,white_290deg,transparent_300deg,white_310deg,transparent_320deg,white_330deg,transparent_340deg,white_350deg,transparent_360deg)] animate-spin-slow"></div>
            </div>

            {/* Falling Coins */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: -100, x: Math.random() * 200 - 100, opacity: 0, rotate: 0 }}
                    animate={{ y: 300, opacity: [0, 1, 0], rotate: 360 }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                    className="absolute text-yellow-300 text-2xl drop-shadow-md"
                >
                    🪙
                </motion.div>
            ))}
            
            {/* Center Prize */}
            <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 bg-gradient-to-tr from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.5)] border-4 border-yellow-200"
            >
                <div className="text-center">
                    <span className="block text-xs font-bold text-yellow-900 uppercase mb-1">Bônus de</span>
                    <span className="text-4xl font-black text-white drop-shadow-md">+300%</span>
                </div>
            </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#081826] relative overflow-hidden border-t border-white/5">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Counter Section */}
        <div className="flex flex-col items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full"
            >
                <Clock size={16} className="text-red-500 animate-pulse" />
                <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Tempo Limitado</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Bônus Disponível</h2>
            
            <motion.div 
               className="relative group p-1"
               whileHover={{ scale: 1.02 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative px-8 py-6 bg-[#0f172a] border border-gray-700/50 rounded-xl flex items-center gap-2 md:gap-4 shadow-2xl">
                    <span className="text-elephant-accent font-bold text-2xl md:text-4xl mr-2">KZ</span>
                    {formattedCount.split('').map((char, index) => (
                         <div key={index} className={`font-mono text-4xl md:text-6xl font-bold ${char === ',' || char === '.' ? 'text-gray-500' : 'text-white'}`}>
                            {char}
                         </div>
                    ))}
                </div>
            </motion.div>
            <p className="text-gray-400 mt-4 text-center max-w-md text-sm md:text-base">
                O fundo promocional está a descer em tempo real. <br/> 
                <span className="text-white font-semibold">Registe-se agora</span> para garantir a sua parte!
            </p>
        </div>

        {/* Stacked Cards Section */}
        <div className="relative h-[500px] w-full max-w-2xl mx-auto mb-16" style={{ perspective: '1200px' }}>
            <AnimatePresence mode="popLayout" initial={false}>
                {cards.map((card, index) => {
                    if (index !== activeCard) return null;
                    
                    return (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.8, z: -100, rotateX: 20 }}
                            animate={{ opacity: 1, scale: 1, z: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 1.1, z: 100, rotateX: -10 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${card.color} border border-white/10 relative group`}>
                                {/* Video Header UI */}
                                <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-white text-[10px] font-bold tracking-wider bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">AO VIVO</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Volume2 size={18} className="text-white/80 hover:text-white cursor-pointer" />
                                        <Maximize2 size={18} className="text-white/80 hover:text-white cursor-pointer" />
                                    </div>
                                </div>

                                {/* Main Content (Simulated Video) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {card.content}
                                </div>

                                {/* Video Controls Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20">
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                                                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Destaque</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white leading-tight">{card.title}</h3>
                                        </div>
                                        <motion.div 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 bg-elephant-accent rounded-full flex items-center justify-center shadow-lg shadow-pink-600/30 cursor-pointer"
                                        >
                                            <Play size={20} className="text-white fill-white ml-1" />
                                        </motion.div>
                                    </div>
                                    
                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden backdrop-blur-sm">
                                            <motion.div 
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                                className="h-full bg-elephant-accent shadow-[0_0_10px_rgba(236,0,140,0.8)]"
                                            />
                                        </div>
                                        <div className="flex justify-between text-[10px] text-gray-400 font-mono font-medium">
                                            <span>00:00</span>
                                            <span>{card.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            
            {/* Decorative Stack Elements behind (Glassmorphism) */}
            <div className="absolute inset-x-4 -bottom-4 h-full bg-gray-800/30 rounded-3xl transform scale-[0.95] -z-10 blur-[2px] border border-white/5"></div>
            <div className="absolute inset-x-8 -bottom-8 h-full bg-gray-800/10 rounded-3xl transform scale-[0.9] -z-20 blur-[4px]"></div>
        </div>

        {/* CTA Text & Button */}
        <div className="text-center mt-20 relative z-20">
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed"
            >
                Clica já em registar e ganhe seu <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-elephant-accent to-purple-400 drop-shadow-sm">
                    bônus de boas vindas
                </span>
            </motion.h3>
            
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
            >
                <a 
                    href={registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-elephant-accent rounded-full shadow-[0_0_30px_rgba(236,0,140,0.4)] hover:shadow-[0_0_50px_rgba(236,0,140,0.6)]"
                >
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3 text-xl tracking-wide">
                        REGISTAR AGORA
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LiveCounter;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const registerLink = "https://www.elephantbet.co.ao/affiliates/?btag=2315330_l372210";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B2134]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           {/* Simulate the logo based on user description - normally we'd use an <img> tag here */}
           <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
              <span className="text-white">Elephant</span>
              <span className="text-elephant-blue bg-white px-1 rounded-sm">Bet</span>
           </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">Jogos</a>
          <a href="#promos" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">Promoções</a>
          <a href="#community" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">Comunidade</a>
          
          <a 
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-elephant-accent hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(236,0,140,0.5)]"
          >
            Cadastrar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B2134] border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
           <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 py-2">Jogos</a>
           <a href="#promos" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 py-2">Promoções</a>
           <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 py-2">Comunidade</a>
           <a 
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-elephant-accent text-center text-white px-6 py-3 rounded-lg font-bold"
          >
            Cadastrar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
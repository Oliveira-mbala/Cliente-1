import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081826] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">Elephant Bet</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              A Elephant Bet é a sua melhor escolha para apostas desportivas e jogos de casino online em Angola.
              Aposte com responsabilidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-elephant-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-elephant-blue transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-elephant-blue transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-elephant-blue transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Segurança</h4>
             <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">18+</div>
                <span className="text-xs">Proibido para menores de 18 anos.</span>
             </div>
             <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-500" />
                <span className="text-xs">Plataforma Segura & Licenciada</span>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} Elephant Bet. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido para vencedores.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
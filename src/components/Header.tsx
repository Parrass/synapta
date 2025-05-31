
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-white font-bold text-xl">SynaptAI</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            <Link to="/assets" className="text-gray-300 hover:text-white transition-colors">Assets</Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Começar Agora
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              <Link to="/assets" className="text-gray-300 hover:text-white transition-colors">Assets</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

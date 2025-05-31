
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ColorPalette from '@/components/assets/ColorPalette';
import Typography from '@/components/assets/Typography';
import LogoSection from '@/components/assets/LogoSection';
import ComponentLibrary from '@/components/assets/ComponentLibrary';

const Assets = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-xl">Synapta Assets</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Design System
            <span className="block bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] bg-clip-text text-transparent">
              Synapta
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nosso sistema de design unificado com cores, tipografia, logos e componentes reutilizáveis 
            para garantir consistência visual em toda a plataforma.
          </p>
        </div>

        <div className="space-y-20">
          <ColorPalette />
          <Typography />
          <LogoSection />
          <ComponentLibrary />
        </div>
      </main>
    </div>
  );
};

export default Assets;

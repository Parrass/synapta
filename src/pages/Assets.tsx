
import React from 'react';
import Header from '@/components/Header';
import ColorPalette from '@/components/assets/ColorPalette';
import Typography from '@/components/assets/Typography';
import LogoSection from '@/components/assets/LogoSection';
import ComponentLibrary from '@/components/assets/ComponentLibrary';

const Assets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Design System
              <span className="block bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] bg-clip-text text-transparent">
                Synapta
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
        </div>
      </main>
    </div>
  );
};

export default Assets;

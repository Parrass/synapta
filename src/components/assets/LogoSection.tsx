
import React from 'react';

const LogoSection = () => {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Logo e Identidade</h2>
        <p className="text-muted-foreground">
          Elementos visuais da marca Synapta com diferentes variações e aplicações.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Logo Principal */}
        <div className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Logo Principal</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-center p-8 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-foreground font-bold text-2xl font-[Montserrat]">Synapta</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              Logo principal com ícone em gradiente e tipografia Montserrat
            </p>
          </div>
        </div>

        {/* Variações do Ícone */}
        <div className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Variações do Ícone</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Ícone com gradiente */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">Gradiente</p>
            </div>

            {/* Ícone Deep Teal */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-[#0A7B83] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">Deep Teal</p>
            </div>

            {/* Ícone Rich Purple */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-[#5A4B87] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">Rich Purple</p>
            </div>
          </div>
        </div>

        {/* Logo em Diferentes Fundos */}
        <div className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border lg:col-span-2">
          <h3 className="text-xl font-semibold text-foreground mb-6">Aplicação em Diferentes Fundos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Fundo Escuro */}
            <div className="bg-[#2E3440] p-6 rounded-lg border border-[#4C566A]">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-white font-bold text-lg font-[Montserrat]">Synapta</span>
              </div>
              <p className="text-[#E5E9F0] text-xs text-center mt-3">Fundo Escuro</p>
            </div>

            {/* Fundo Claro */}
            <div className="bg-[#ECEFF4] p-6 rounded-lg border border-[#E5E9F0]">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-[#2E3440] font-bold text-lg font-[Montserrat]">Synapta</span>
              </div>
              <p className="text-[#4C566A] text-xs text-center mt-3">Fundo Claro</p>
            </div>

            {/* Fundo com Gradiente */}
            <div className="bg-gradient-to-r from-[#0A7B83]/20 to-[#5A4B87]/20 p-6 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center border border-border">
                  <span className="text-[#0A7B83] font-bold text-sm">S</span>
                </div>
                <span className="text-foreground font-bold text-lg font-[Montserrat]">Synapta</span>
              </div>
              <p className="text-muted-foreground text-xs text-center mt-3">Fundo Gradiente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;

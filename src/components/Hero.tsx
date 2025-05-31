
import React from 'react';
import { ArrowRight, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Inteligência Artificial Avançada</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              O Futuro da
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Transforme seu negócio com soluções de IA personalizadas. 
              Automatização inteligente, análise preditiva e insights revolucionários 
              para impulsionar seu crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
              >
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl absolute inset-0"></div>
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">IA em Ação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

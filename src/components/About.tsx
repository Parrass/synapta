
import React from 'react';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Projetos Concluídos", icon: CheckCircle },
    { number: "50+", label: "Clientes Satisfeitos", icon: Users },
    { number: "10+", label: "Prêmios Recebidos", icon: Award },
    { number: "15+", label: "Países Atendidos", icon: Globe }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Sobre a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SynaptAI</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Somos pioneiros em soluções de inteligência artificial, combinando 
              expertise técnica com visão estratégica para criar tecnologias que 
              transformam negócios e melhoram vidas.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Nossa equipe de especialistas trabalha incansavelmente para 
              desenvolver soluções de IA éticas, seguras e revolucionárias 
              que impulsionam o futuro da tecnologia.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-6 h-6 text-blue-400 mr-2" />
                    <span className="text-3xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Sistema Neural Ativo</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-8 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded animate-pulse"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        height: `${Math.random() * 50 + 20}px`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">99.7%</p>
                  <p className="text-gray-400">Precisão de IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

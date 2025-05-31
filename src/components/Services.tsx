
import React from 'react';
import { Brain, Bot, BarChart3, Shield, Rocket, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Algoritmos avançados de aprendizado de máquina para análise preditiva e tomada de decisões inteligentes."
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais personalizados que revolucionam o atendimento ao cliente com IA conversacional."
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Transforme dados brutos em insights valiosos com nossa plataforma de análise alimentada por IA."
    },
    {
      icon: Shield,
      title: "IA Segura",
      description: "Soluções de segurança cibernética baseadas em IA para proteção proativa contra ameaças."
    },
    {
      icon: Rocket,
      title: "Automação",
      description: "Automatize processos complexos e aumente a eficiência operacional com IA avançada."
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Processamento e análise de grandes volumes de dados com tecnologias de IA de última geração."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos soluções completas de inteligência artificial para transformar 
            seu negócio e impulsionar a inovação em todos os setores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

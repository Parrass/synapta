
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, Settings, ChevronRight, Check, X, AlertTriangle, Info } from 'lucide-react';

const ComponentLibrary = () => {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Biblioteca de Componentes</h2>
        <p className="text-gray-400">
          Componentes reutilizáveis baseados no design system Synapta para garantir consistência.
        </p>
      </div>

      <div className="space-y-12">
        {/* Botões */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Botões</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Primário</p>
              <Button className="w-full bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] hover:from-[#0A7B83]/90 hover:to-[#5A4B87]/90">
                Primário
              </Button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Secundário</p>
              <Button variant="outline" className="w-full border-[#0A7B83] text-[#0A7B83] hover:bg-[#0A7B83] hover:text-white">
                Secundário
              </Button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Ghost</p>
              <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                Ghost
              </Button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Perigo</p>
              <Button variant="destructive" className="w-full bg-[#ED6A5A] hover:bg-[#ED6A5A]/90">
                Perigo
              </Button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Cards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Padrão */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Card Padrão</CardTitle>
                <CardDescription className="text-gray-400">
                  Descrição do card com informações complementares.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="bg-gradient-to-r from-[#0A7B83] to-[#5A4B87]">
                  Ação
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Card de Métrica */}
            <Card className="bg-gradient-to-br from-[#0A7B83]/20 to-[#5A4B87]/20 border-[#0A7B83]/30">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-300">Total de Usuários</CardDescription>
                <CardTitle className="text-3xl font-bold text-white">1,234</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-[#5ED491] text-sm">
                  <span>+12% vs mês anterior</span>
                </div>
              </CardContent>
            </Card>

            {/* Card de Feature */}
            <Card className="bg-white/5 border-white/10 hover:border-[#0A7B83]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-[#FFB84D]" />
                  <div>
                    <CardTitle className="text-white">Automação IA</CardTitle>
                    <CardDescription className="text-gray-400">
                      Recursos avançados
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Alertas e Estados */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Alertas e Estados</h3>
          <div className="space-y-4">
            {/* Sucesso */}
            <div className="flex items-center space-x-3 p-4 bg-[#5ED491]/20 border border-[#5ED491]/30 rounded-lg">
              <Check className="w-5 h-5 text-[#5ED491]" />
              <div>
                <p className="text-white font-medium">Sucesso</p>
                <p className="text-gray-300 text-sm">Operação realizada com sucesso!</p>
              </div>
            </div>

            {/* Atenção */}
            <div className="flex items-center space-x-3 p-4 bg-[#FFD166]/20 border border-[#FFD166]/30 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-[#FFD166]" />
              <div>
                <p className="text-white font-medium">Atenção</p>
                <p className="text-gray-300 text-sm">Verifique as informações antes de continuar.</p>
              </div>
            </div>

            {/* Erro */}
            <div className="flex items-center space-x-3 p-4 bg-[#ED6A5A]/20 border border-[#ED6A5A]/30 rounded-lg">
              <X className="w-5 h-5 text-[#ED6A5A]" />
              <div>
                <p className="text-white font-medium">Erro</p>
                <p className="text-gray-300 text-sm">Ocorreu um erro ao processar sua solicitação.</p>
              </div>
            </div>

            {/* Informação */}
            <div className="flex items-center space-x-3 p-4 bg-[#53C3CA]/20 border border-[#53C3CA]/30 rounded-lg">
              <Info className="w-5 h-5 text-[#53C3CA]" />
              <div>
                <p className="text-white font-medium">Informação</p>
                <p className="text-gray-300 text-sm">Informação importante para o usuário.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ícones */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Ícones</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {[Brain, Zap, Settings, ChevronRight, Check, X, AlertTriangle, Info].map((Icon, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 p-3 bg-white/5 rounded-lg">
                <Icon className="w-6 h-6 text-[#0A7B83]" />
                <span className="text-xs text-gray-400">{Icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentLibrary;


import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-gray-900 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Entre em <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para transformar seu negócio com IA? Entre em contato conosco 
            e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">contato@synaptai.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefone</p>
                  <p className="text-gray-400">+55 (11) 9999-9999</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Endereço</p>
                  <p className="text-gray-400">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Seu nome" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500/50"
                />
                <Input 
                  placeholder="Seu email" 
                  type="email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500/50"
                />
              </div>
              <Input 
                placeholder="Assunto" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500/50"
              />
              <Textarea 
                placeholder="Sua mensagem"
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500/50"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Enviar Mensagem
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

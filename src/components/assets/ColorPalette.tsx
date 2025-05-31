
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColorPalette = () => {
  const colorGroups = [
    {
      title: 'Cores Primárias',
      colors: [
        { name: 'Deep Teal', hex: '#0A7B83', css: 'deep-teal' },
        { name: 'Rich Purple', hex: '#5A4B87', css: 'rich-purple' }
      ]
    },
    {
      title: 'Cores Secundárias',
      colors: [
        { name: 'Light Teal', hex: '#53C3CA', css: 'light-teal' },
        { name: 'Lavender', hex: '#9D91C3', css: 'lavender' }
      ]
    },
    {
      title: 'Cores de Acento',
      colors: [
        { name: 'Amber', hex: '#FFB84D', css: 'amber' },
        { name: 'Coral', hex: '#FF7F6D', css: 'coral' }
      ]
    },
    {
      title: 'Cores Neutras',
      colors: [
        { name: 'Dark Gray', hex: '#2E3440', css: 'dark-gray' },
        { name: 'Medium Gray', hex: '#4C566A', css: 'medium-gray' },
        { name: 'Light Gray', hex: '#E5E9F0', css: 'light-gray' },
        { name: 'Off White', hex: '#ECEFF4', css: 'off-white' }
      ]
    },
    {
      title: 'Cores Funcionais',
      colors: [
        { name: 'Success Green', hex: '#5ED491', css: 'success-green' },
        { name: 'Warning Yellow', hex: '#FFD166', css: 'warning-yellow' },
        { name: 'Error Red', hex: '#ED6A5A', css: 'error-red' }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Paleta de Cores</h2>
        <p className="text-gray-400">
          Nosso sistema de cores é baseado nas diretrizes da identidade visual Synapta, 
          garantindo harmonia e consistência em toda a aplicação.
        </p>
      </div>

      <div className="grid gap-8">
        {colorGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">{group.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {group.colors.map((color, colorIndex) => (
                <div key={colorIndex} className="group">
                  <div 
                    className="w-full h-24 rounded-lg mb-3 border border-white/10 relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/70 text-white"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <h4 className="font-medium text-white text-sm mb-1">{color.name}</h4>
                  <p className="text-gray-400 text-xs font-mono">{color.hex}</p>
                  <p className="text-gray-500 text-xs">--{color.css}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorPalette;

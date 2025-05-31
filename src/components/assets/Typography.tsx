
import React from 'react';

const Typography = () => {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Tipografia</h2>
        <p className="text-muted-foreground">
          Sistema tipográfico com Montserrat para títulos e navegação, e Open Sans para texto corrido e formulários.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Montserrat - Primary Font */}
        <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Montserrat - Primária</h3>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground text-sm mb-2">H1 - 28px / Bold</p>
              <h1 className="text-[28px] font-bold text-foreground font-[Montserrat]">
                Título Principal
              </h1>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">H2 - 24px / Bold</p>
              <h2 className="text-[24px] font-bold text-foreground font-[Montserrat]">
                Título Secundário
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">H3 - 20px / Semibold</p>
              <h3 className="text-[20px] font-semibold text-foreground font-[Montserrat]">
                Título Terciário
              </h3>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">H4 - 18px / Medium</p>
              <h4 className="text-[18px] font-medium text-foreground font-[Montserrat]">
                Subtítulo
              </h4>
            </div>
          </div>
        </div>

        {/* Open Sans - Secondary Font */}
        <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Open Sans - Secundária</h3>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground text-sm mb-2">Corpo Grande - 16px / Regular</p>
              <p className="text-[16px] font-normal text-foreground font-[Open_Sans]">
                Texto para parágrafos principais e conteúdo importante.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Corpo Regular - 14px / Regular</p>
              <p className="text-[14px] font-normal text-muted-foreground font-[Open_Sans]">
                Texto padrão para conteúdo geral e descrições.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Corpo Pequeno - 12px / Regular</p>
              <p className="text-[12px] font-normal text-muted-foreground font-[Open_Sans]">
                Texto para legendas, notas e informações auxiliares.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Semibold - 14px / Semibold</p>
              <p className="text-[14px] font-semibold text-foreground font-[Open_Sans]">
                Texto com ênfase para destacar informações importantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Font Weights Demo */}
      <div className="mt-8 bg-card backdrop-blur-sm rounded-2xl p-6 border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Pesos das Fontes</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4 font-[Montserrat]">Montserrat</h4>
            <div className="space-y-2">
              <p className="text-foreground font-light font-[Montserrat]">Light (300)</p>
              <p className="text-foreground font-normal font-[Montserrat]">Regular (400)</p>
              <p className="text-foreground font-medium font-[Montserrat]">Medium (500)</p>
              <p className="text-foreground font-semibold font-[Montserrat]">Semibold (600)</p>
              <p className="text-foreground font-bold font-[Montserrat]">Bold (700)</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4 font-[Open_Sans]">Open Sans</h4>
            <div className="space-y-2">
              <p className="text-foreground font-light font-[Open_Sans]">Light (300)</p>
              <p className="text-foreground font-normal font-[Open_Sans]">Regular (400)</p>
              <p className="text-foreground font-semibold font-[Open_Sans]">Semibold (600)</p>
              <p className="text-foreground font-bold font-[Open_Sans]">Bold (700)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;

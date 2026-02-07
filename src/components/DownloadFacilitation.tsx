"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, CheckCircle, Smartphone, Monitor, Globe, ShieldCheck } from 'lucide-react';

export function DownloadFacilitation() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const startDownload = () => {
    setDownloading(true);
    setCompleted(false);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setCompleted(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <section id="download" className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center animate-fade-in-up">
              <h2 className="font-headline text-4xl font-bold sm:text-5xl leading-tight">Fim da busca infinita.</h2>
              <p className="mt-6 text-primary-foreground/90 text-lg leading-relaxed">
                O Letryx é um <strong>Progressive Web App (PWA)</strong>. Pode ser instalado no celular em segundos, ocupando quase nenhum espaço e integrando-se nativamente ao seu sistema.
              </p>
              
              <div className="mt-10 space-y-4">
                {downloading ? (
                  <div className="space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium tracking-wide">Preparando Letryx_Boreal_v1.0.pkg</span>
                      <span className="font-mono">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-3 bg-white/20" />
                    <p className="text-xs text-primary-foreground/60 italic text-center animate-pulse">Configurando StatusBar Dinâmica...</p>
                  </div>
                ) : completed ? (
                  <div className="flex items-center gap-5 rounded-2xl bg-white/20 p-8 backdrop-blur-md border border-white/20 animate-in slide-in-from-bottom-4 duration-700">
                    <CheckCircle className="h-12 w-12 shrink-0 text-white animate-bounce" />
                    <div>
                      <p className="font-bold text-xl">Pronto para a Descoberta!</p>
                      <p className="text-sm text-primary-foreground/80">Abra o instalador ou clique em "Adicionar à Tela de Início".</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="h-16 gap-3 text-lg font-bold w-full shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-black/20 hover:bg-white active:scale-95"
                      onClick={startDownload}
                    >
                      <Download className="h-6 w-6" />
                      Instalar Letryx Boreal
                    </Button>
                    <div className="flex justify-center gap-12 py-2 opacity-80">
                      {[
                        { icon: <Smartphone />, label: 'Mobile PWA' },
                        { icon: <Monitor />, label: 'Desktop App' },
                        { icon: <Globe />, label: 'Web Engine' }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group transition-transform hover:-translate-y-1">
                          <div className="p-3 rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                            {item.icon}
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white/5 p-8 lg:p-12 lg:border-l lg:border-white/10 flex flex-col justify-center">
              <h3 className="font-headline text-2xl font-bold mb-10 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-white/80" /> Acesso Sem Senhas
              </h3>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Magic Link', desc: 'Receba um link seguro no seu e-mail. Sem senhas para decorar, apenas um clique e você está dentro.' },
                  { step: '02', title: 'Sincronização Realtime', desc: 'Sua estante e Talks atualizados instantaneamente em todos os seus dispositivos via Firebase.' },
                  { step: '03', title: 'StatusBar Ativa', desc: 'Hardware e software unidos: acompanhe seu ping e bateria em tempo real dentro da interface.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="font-headline text-3xl font-black text-white/10 group-hover:text-white/40 transition-all duration-500 leading-none">{item.step}</div>
                    <div className="transition-transform duration-500 group-hover:translate-x-2">
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
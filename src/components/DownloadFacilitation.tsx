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
    <section id="download" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Fim da busca infinita.</h2>
              <p className="mt-4 text-primary-foreground/90 text-lg">
                O Letryx é um <strong>Progressive Web App (PWA)</strong>. Pode ser instalado no celular em segundos, ocupando quase nenhum espaço.
              </p>
              
              <div className="mt-10 space-y-4">
                {downloading ? (
                  <div className="space-y-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Preparando Letryx_Boreal_v1.0.pkg</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-white/20" />
                    <p className="text-xs text-primary-foreground/60 italic text-center">Configurando StatusBar Dinâmica...</p>
                  </div>
                ) : completed ? (
                  <div className="flex items-center gap-4 rounded-xl bg-white/20 p-6 backdrop-blur-sm animate-fade-in-up">
                    <CheckCircle className="h-10 w-10 shrink-0 text-white" />
                    <div>
                      <p className="font-bold">Pronto para a Descoberta!</p>
                      <p className="text-sm text-primary-foreground/80">Abra o instalador ou clique em "Adicionar à Tela de Início".</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="h-16 gap-3 text-lg font-bold w-full shadow-xl transition-transform hover:scale-[1.02]"
                      onClick={startDownload}
                    >
                      <Download className="h-6 w-6" />
                      Instalar Letryx Boreal
                    </Button>
                    <div className="flex justify-center gap-8 py-2 opacity-90">
                      <div className="flex flex-col items-center gap-1">
                        <Smartphone className="h-5 w-5" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Mobile PWA</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Monitor className="h-5 w-5" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Desktop App</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Globe className="h-5 w-5" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Web Engine</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white/5 p-8 lg:p-12 lg:border-l lg:border-white/10">
              <h3 className="font-headline text-xl font-bold mb-8 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6" /> Acesso Sem Senhas
              </h3>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Magic Link', desc: 'Receba um link seguro no seu e-mail. Sem senhas para decorar.' },
                  { step: '02', title: 'Sincronização Realtime', desc: 'Sua estante e Talks atualizados em todos os dispositivos.' },
                  { step: '03', title: 'StatusBar Ativa', desc: 'O hardware integrado: veja ping e bateria direto no app.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="font-headline text-2xl font-black text-white/20 group-hover:text-white transition-colors leading-none">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-primary-foreground/75 leading-relaxed">{item.desc}</p>
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
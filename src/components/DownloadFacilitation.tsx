"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, CheckCircle, Smartphone, Monitor, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DownloadFacilitation() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        return prev + 4;
      });
    }, 80);
  };

  return (
    <section id="download" className="py-24 sm:py-40 overflow-hidden bg-background">
      <div ref={sectionRef} className="container mx-auto px-4 reveal-on-scroll">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[3.5rem] bg-primary text-primary-foreground shadow-3xl transition-all duration-1000 group">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 animate-pulse">
                <Smartphone className="h-64 w-64 rotate-12" />
              </div>
              
              <div className="relative z-10">
                <h2 className="font-headline text-5xl font-extrabold sm:text-6xl leading-[1.1] mb-8">Fim da busca <br /> infinita.</h2>
                <p className="text-primary-foreground/90 text-xl leading-relaxed mb-12">
                  O Letryx é um <strong>PWA de próxima geração</strong>. Instale no celular em segundos, integre-se nativamente e aproveite a <strong>StatusBar Dinâmica</strong>.
                </p>
                
                <div className="space-y-6">
                  {downloading ? (
                    <div className="space-y-5 rounded-3xl bg-white/10 p-8 backdrop-blur-2xl border border-white/20 animate-in zoom-in-95 duration-500">
                      <div className="flex items-center justify-between text-sm font-bold tracking-widest uppercase">
                        <span>Letryx_Boreal_v1.0.pkg</span>
                        <span className="font-mono">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-4 bg-white/10" />
                      <p className="text-xs text-primary-foreground/60 italic text-center animate-pulse">Sincronizando metadados da Z-Library...</p>
                    </div>
                  ) : completed ? (
                    <div className="flex items-center gap-6 rounded-3xl bg-white/20 p-10 backdrop-blur-2xl border border-white/30 animate-in slide-in-from-bottom-8 duration-700">
                      <div className="p-4 bg-white rounded-2xl animate-bounce">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <p className="font-extrabold text-2xl">Pronto para Instalar!</p>
                        <p className="text-primary-foreground/80">Clique em "Adicionar à Tela de Início" no seu navegador.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-10">
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="h-20 gap-4 text-xl font-extrabold w-full rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white active:scale-95 group"
                        onClick={startDownload}
                      >
                        <Download className="h-7 w-7 transition-transform group-hover:-translate-y-1" />
                        Instalar Letryx Boreal
                      </Button>
                      <div className="flex justify-between gap-4 px-4 opacity-70">
                        {[
                          { icon: <Smartphone />, label: 'Mobile' },
                          { icon: <Monitor />, label: 'Desktop' },
                          { icon: <Globe />, label: 'Global' }
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-3 group transition-all hover:opacity-100 hover:-translate-y-1">
                            <div className="p-4 rounded-2xl bg-white/10 transition-colors group-hover:bg-white/20">
                              {item.icon}
                            </div>
                            <span className="text-[10px] uppercase font-black tracking-[0.2em]">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 lg:p-16 lg:border-l lg:border-white/10 flex flex-col justify-center">
              <h3 className="font-headline text-3xl font-extrabold mb-12 flex items-center gap-4">
                <ShieldCheck className="h-9 w-9 text-white/80" /> Acesso de Elite
              </h3>
              <div className="space-y-12">
                {[
                  { icon: <Sparkles />, title: 'Magic Link Seguro', desc: 'Acesso instantâneo via e-mail. Sem senhas, apenas segurança máxima e rapidez.' },
                  { icon: <Globe />, title: 'Sincronização Realtime', desc: 'Firebase Firestore garante que sua estante esteja sempre atualizada em todos os dispositivos.' },
                  { icon: <Smartphone />, title: 'StatusBar Dinâmica', desc: 'Hardware integrado: acompanhe rede e bateria diretamente na interface do Letryx.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-2 group-hover:translate-x-1 transition-transform duration-500">{item.title}</h4>
                      <p className="text-primary-foreground/70 leading-relaxed text-lg">{item.desc}</p>
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
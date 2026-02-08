"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, CheckCircle, Smartphone, Monitor, Globe, ShieldCheck, Sparkles, ExternalLink, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          // Trigger actual download
          window.location.href = "https://github.com/josyelbuenos/LetryxBoreal/releases/download/Android/Letryx.Boreal.apk";
          return 100;
        }
        return prev + 5;
      });
    }, 50);
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
                <h2 className="font-headline text-5xl font-extrabold sm:text-6xl leading-[1.1] mb-8 text-white">Pronto para a <br /> descoberta.</h2>
                <p className="text-primary-foreground/90 text-xl leading-relaxed mb-12">
                  O Letryx é um <strong>PWA de elite</strong>. Instale no celular via APK, use a versão Web ou instale nativamente no seu computador.
                </p>
                
                <div className="space-y-6">
                  {downloading ? (
                    <div className="space-y-5 rounded-3xl bg-white/10 p-8 backdrop-blur-2xl border border-white/20 animate-in zoom-in-95 duration-500">
                      <div className="flex items-center justify-between text-sm font-bold tracking-widest uppercase text-white">
                        <span>Baixando Letryx_Boreal.apk</span>
                        <span className="font-mono">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-4 bg-white/10" />
                      <p className="text-xs text-primary-foreground/60 italic text-center animate-pulse">Iniciando download seguro via GitHub...</p>
                    </div>
                  ) : completed ? (
                    <div className="flex items-center gap-6 rounded-3xl bg-white/20 p-10 backdrop-blur-2xl border border-white/30 animate-in slide-in-from-bottom-8 duration-700">
                      <div className="p-4 bg-white rounded-2xl animate-bounce">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <p className="font-extrabold text-2xl text-white">Download Iniciado!</p>
                        <p className="text-primary-foreground/80">O APK está sendo baixado. Abra o arquivo para instalar.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="h-20 gap-4 text-xl font-extrabold w-full rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white active:scale-95 group text-primary"
                        onClick={startDownload}
                      >
                        <Download className="h-7 w-7 transition-transform group-hover:-translate-y-1" />
                        Download Android (APK)
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          variant="outline"
                          className="h-16 rounded-2xl bg-white/10 border-white/20 hover:bg-white/20 text-white font-bold gap-2"
                          asChild
                        >
                          <a href="https://letryxboreal.vercel.app" target="_blank" rel="noopener noreferrer">
                            <Globe className="h-5 w-5" />
                            Acessar Web
                          </a>
                        </Button>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline"
                              className="h-16 rounded-2xl bg-white/10 border-white/20 hover:bg-white/20 text-white font-bold gap-2"
                            >
                              <Monitor className="h-5 w-5" />
                              Instalar PC
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white rounded-[2rem] border-none shadow-2xl max-w-md">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-black text-primary flex items-center gap-2">
                                <Monitor className="h-6 w-6" /> Instalação PWA (PC)
                              </DialogTitle>
                              <DialogDescription className="text-muted-foreground text-lg py-4">
                                Para instalar o Letryx Boreal no seu computador:
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 text-sm">
                              <div className="flex gap-4 items-start p-4 rounded-2xl bg-primary/5">
                                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
                                <p>Acesse o site pelo <strong>Google Chrome</strong> ou <strong>Microsoft Edge</strong>.</p>
                              </div>
                              <div className="flex gap-4 items-start p-4 rounded-2xl bg-primary/5">
                                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
                                <p>Clique no ícone de <strong>instalação</strong> (computador com uma seta) na barra de endereços.</p>
                              </div>
                              <div className="flex gap-4 items-start p-4 rounded-2xl bg-primary/5">
                                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">3</div>
                                <p>Clique em <strong>"Instalar"</strong> para ter o Letryx como um aplicativo nativo.</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 lg:p-16 lg:border-l lg:border-white/10 flex flex-col justify-center">
              <h3 className="font-headline text-3xl font-extrabold mb-12 flex items-center gap-4 text-white">
                <ShieldCheck className="h-9 w-9 text-white/80" /> Ecossistema Blindado
              </h3>
              <div className="space-y-12">
                {[
                  { icon: <Sparkles />, title: 'Inteligência Boreal', desc: 'Metadados da Z-Library processados por IA para recomendações precisas.' },
                  { icon: <Globe />, title: 'Multiplataforma', desc: 'Acesse de qualquer lugar: Android nativo, Navegador ou Desktop via PWA.' },
                  { icon: <ShieldCheck />, title: 'Segurança Pentesting', desc: 'Protocolos de segurança ofensiva garantindo que seus dados sejam privados.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-2 text-white group-hover:translate-x-1 transition-transform duration-500">{item.title}</h4>
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
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, CheckCircle, Smartphone, Monitor, Globe, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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

  const handleAndroidDownload = () => {
    setDownloading(true);
    setCompleted(false);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setCompleted(true);
          // Redirect to the APK link after simulation
          window.location.href = "https://github.com/josyelbuenos/LetryxBoreal/releases/download/Android/Letryx.Boreal.apk";
          return 100;
        }
        return prev + 10;
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
                <h2 className="font-headline text-5xl font-extrabold sm:text-6xl leading-[1.1] mb-8">Escolha sua <br /> plataforma.</h2>
                <p className="text-primary-foreground/90 text-xl leading-relaxed mb-12">
                  O Letryx Boreal está disponível onde você estiver. Instale nativamente ou acesse via web com segurança total.
                </p>
                
                <div className="space-y-6">
                  {downloading ? (
                    <div className="space-y-5 rounded-3xl bg-white/10 p-8 backdrop-blur-2xl border border-white/20 animate-in zoom-in-95 duration-500">
                      <div className="flex items-center justify-between text-sm font-bold tracking-widest uppercase">
                        <span>Letryx_Boreal.apk</span>
                        <span className="font-mono">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-4 bg-white/10" />
                      <p className="text-xs text-primary-foreground/60 italic text-center animate-pulse">Iniciando download seguro...</p>
                    </div>
                  ) : completed ? (
                    <div className="flex items-center gap-6 rounded-3xl bg-white/20 p-10 backdrop-blur-2xl border border-white/30 animate-in slide-in-from-bottom-8 duration-700">
                      <div className="p-4 bg-white rounded-2xl animate-bounce">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <p className="font-extrabold text-2xl">Download Iniciado!</p>
                        <p className="text-primary-foreground/80 text-sm">Verifique as notificações do seu Android.</p>
                        <Button variant="link" className="text-white p-0 h-auto mt-2 underline" onClick={() => setCompleted(false)}>Tentar novamente</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="h-20 gap-4 text-xl font-extrabold w-full rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white active:scale-95 group"
                        onClick={handleAndroidDownload}
                      >
                        <Download className="h-7 w-7 transition-transform group-hover:-translate-y-1" />
                        Baixar para Android
                      </Button>

                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="h-16 gap-4 text-lg font-bold w-full rounded-2xl border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all duration-500 hover:scale-[1.02] active:scale-95"
                        asChild
                      >
                        <Link href="https://letryxboreal.vercel.app" target="_blank">
                          <Globe className="h-5 w-5" />
                          Acessar Versão Web
                          <ExternalLink className="h-4 w-4 opacity-50" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 lg:p-16 lg:border-l lg:border-white/10 flex flex-col justify-center">
              <h3 className="font-headline text-3xl font-extrabold mb-8 flex items-center gap-4">
                <Monitor className="h-9 w-9 text-white/80" /> Instalação no PC
              </h3>
              
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10 mb-12">
                <p className="font-bold text-lg mb-4">Como instalar como PWA:</p>
                <ol className="space-y-4 text-primary-foreground/80 list-decimal list-inside text-sm">
                  <li>Acesse <strong>letryxboreal.vercel.app</strong> no Chrome ou Edge.</li>
                  <li>Clique no ícone de <strong>instalação</strong> (computador com seta) na barra de endereços.</li>
                  <li>Selecione <strong>"Instalar"</strong> para fixar o Letryx Boreal no seu desktop.</li>
                  <li>Aproveite a experiência nativa com <strong>StatusBar Dinâmica</strong>.</li>
                </ol>
              </div>

              <div className="space-y-10">
                {[
                  { icon: <ShieldCheck />, title: 'Segurança Blindada', desc: 'App assinado e testado sob protocolos de segurança ofensiva.' },
                  { icon: <Sparkles />, title: 'StatusBar Reativa', desc: 'Hardware e software em simbiose total no Android e Desktop.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-1 group-hover:translate-x-1 transition-transform duration-500">{item.title}</h4>
                      <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
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

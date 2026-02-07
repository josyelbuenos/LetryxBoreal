
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
        <div className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse duration-700" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left gap-16">
          <div className={`flex-1 transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-primary ring-1 ring-primary/20 backdrop-blur-sm animate-reveal-right">
                <Sparkles className="h-3 w-3" />
                Next.js 15 + React 19 Elite
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-accent ring-1 ring-accent/20 backdrop-blur-sm animate-reveal-right">
                <ShieldCheck className="h-3 w-3" />
                Pentested Security
              </div>
            </div>
            
            <h1 className="animate-blur-in font-headline text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl">
              A inteligência que <br />
              <span className="text-primary italic relative inline-block">
                blinda e guia
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
              <br />sua leitura.
            </h1>
            
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed animate-fade-in-up animate-delay-200 opacity-0">
              O Letryx Boreal resolve a paralisia da escolha com IA profunda e protege seus insights com uma arquitetura de segurança ofensiva. Descoberta literária sem comprometer sua privacidade.
            </p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start animate-fade-in-up animate-delay-300 opacity-0">
              <Button 
                size="lg" 
                className="h-16 px-10 text-lg font-bold gap-2 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-[1.03] hover:shadow-primary/40 active:scale-95 group" 
                asChild
              >
                <Link href="#download">
                  Instalar Ecossistema (PWA)
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-10 text-lg font-medium gap-2 rounded-full transition-all hover:bg-white hover:scale-[1.03] active:scale-95 bg-white/50 backdrop-blur-sm" 
                asChild
              >
                <Link href="#creators">
                  Ver Arquitetura
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl animate-fade-in-up animate-delay-500 opacity-0">
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[2.5rem] border-[12px] border-white/50 bg-card shadow-3xl animate-float group">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt="Interface Segura Letryx"
                  fill
                  className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-110"
                  data-ai-hint="minimalist library"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-effect rounded-2xl border border-white/30 backdrop-blur-xl translate-y-4 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-bold text-primary uppercase tracking-tighter">Sistemas Operacionais</p>
                </div>
                <p className="text-xs text-muted-foreground">Recomendações geradas por IA contextualmente blindada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

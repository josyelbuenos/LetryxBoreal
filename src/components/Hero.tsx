import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background soft glow effects */}
      <div className="absolute left-1/4 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6 ring-1 ring-primary/20 backdrop-blur-sm">
              Versão 1.0.0-beta Liberada
            </span>
            <h1 className="animate-blur-in opacity-0 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:max-w-4xl">
              A luz que guia sua próxima <br />
              <span className="text-primary italic relative inline-block">
                descoberta literária.
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary/20 rounded-full" />
              </span>
            </h1>
            <p className="animate-fade-in-up opacity-0 mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed" style={{ animationDelay: '400ms' }}>
              O Letryx Boreal não é apenas um catálogo. É um ecossistema inteligente que une bibliotecas globais, IA profunda e conexões humanas reais para acabar com a paralisia da escolha.
            </p>
            <div className="animate-fade-in-up opacity-0 mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '600ms' }}>
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg font-bold gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30 active:scale-95" 
                asChild
              >
                <Link href="#download">
                  Instalar Boreal (PWA)
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg font-medium gap-2 transition-all hover:bg-secondary/50 hover:scale-105 active:scale-95" 
                asChild
              >
                <Link href="#benefits">
                  <Sparkles className="h-5 w-5" />
                  Conhecer a IA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 container mx-auto px-4 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 lg:w-1/2">
        <div className="animate-fade-in-up opacity-0 lg:animate-float group relative aspect-video overflow-hidden rounded-3xl border-8 border-white/50 bg-card shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:rotate-1" style={{ animationDelay: '800ms' }}>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Interface do Letryx Boreal em tons de sálvia"
              fill
              className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint="minimalist library"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}
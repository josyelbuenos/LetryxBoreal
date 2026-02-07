import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              Versão 1.0.0-beta Liberada
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:max-w-4xl">
              A luz que guia sua próxima <span className="text-primary italic">descoberta literária.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              O Letryx Boreal não é apenas um catálogo. É um ecossistema inteligente que une bibliotecas globais, IA profunda e conexões humanas reais para acabar com a paralisia da escolha.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-lg font-medium gap-2 shadow-lg shadow-primary/20" asChild>
                <Link href="#download">
                  Instalar Boreal (PWA)
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg font-medium gap-2" asChild>
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
        <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-white/50 bg-card shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Interface do Letryx Boreal em tons de sálvia"
              fill
              className="object-cover opacity-90"
              data-ai-hint="minimalist library"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
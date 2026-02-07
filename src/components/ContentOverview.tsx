"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Library, Check, Sparkles } from 'lucide-react';

const shelfDimensions = [
  { name: 'Lendo Atualmente', color: 'bg-primary' },
  { name: 'Favoritos', color: 'bg-primary/80' },
  { name: 'Lidos', color: 'bg-primary/60' },
  { name: 'Lista de Desejos', color: 'bg-primary/40' },
];

export function ContentOverview() {
  const contentImage = PlaceHolderImages.find(img => img.id === 'content-assets');
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="content" className="py-24 sm:py-32 overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-4 reveal-on-scroll">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl transition-all group-hover:bg-primary/10" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-secondary/30 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              {contentImage && (
                <Image
                  src={contentImage.imageUrl}
                  alt="Estante Inteligente"
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                  data-ai-hint="bookshelf minimal"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/30 animate-float">
                <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-primary">
                  <Library className="h-4 w-4" /> Estante Dinâmica
                </h4>
                <div className="flex flex-wrap gap-2">
                  {shelfDimensions.map((dim, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1.5 text-xs bg-white/50 border-primary/10 hover:bg-white transition-colors">
                      <span className={`mr-2 h-2 w-2 rounded-full ${dim.color}`} />
                      {dim.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
              <Sparkles className="h-3 w-3" />
              Base Z-Library Integrada
            </div>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
              A Vastidão Literária <br /> na sua Palma
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Integramos os metadados da <strong>Z-Library</strong>, garantindo acesso a informações de mais de 14 milhões de livros. Organize sua vida literária em quatro dimensões com filtros instantâneos.
            </p>
            
            <div className="mt-12 space-y-8">
              {[
                { label: 'Privacidade Granular', desc: 'Controle absoluto sobre o que você compartilha no seu perfil boreal.' },
                { label: 'Comunidade Verificada', desc: 'Selos de autenticidade para curadores e leitores influentes.' },
                { label: 'Acessibilidade Nativa', desc: 'Design focado no conforto visual com suporte a múltiplos idiomas.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{item.label}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
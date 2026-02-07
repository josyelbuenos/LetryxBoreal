"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Zap, Smartphone, MessageSquareQuote } from 'lucide-react';

const technologies = [
  {
    title: 'Inteligência Artificial Real',
    description: 'Com Google Genkit + Gemini, analisamos seus insights para recomendações profundas, não apenas algoritmos básicos.',
    icon: <BrainCircuit className="h-8 w-8" />,
    delay: 'animate-delay-100'
  },
  {
    title: 'Infraestrutura Realtime',
    description: 'Powered by Firebase. Interações instantâneas e acesso seguro via Magic Link, sem senhas complicadas.',
    icon: <Zap className="h-8 w-8" />,
    delay: 'animate-delay-200'
  },
  {
    title: 'Experiência PWA',
    description: 'Instale como um app nativo. Ocupa pouco espaço e oferece uma StatusBar dinâmica que monitora sua rede e bateria.',
    icon: <Smartphone className="h-8 w-8" />,
    delay: 'animate-delay-300'
  },
  {
    title: 'Talks: Notas Temporárias',
    description: 'Compartilhe insights rápidos em micro-textos de 24 horas. O dinamismo das redes sociais focado puramente em leitura.',
    icon: <MessageSquareQuote className="h-8 w-8" />,
    delay: 'animate-delay-400'
  },
];

export function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.reveal-item');
            children.forEach((child) => child.classList.add('animate-fade-in-up'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="bg-secondary/20 py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center reveal-item opacity-0">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl text-foreground">
            Tecnologia de Elite para Leitores
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Combinamos Next.js 15, React 19 e as ferramentas mais avançadas da Google para criar um ambiente fluido e inteligente.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className={`reveal-item opacity-0 group relative border-none bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-background rounded-[2rem] overflow-hidden ${tech.delay}`}
            >
              <CardHeader className="p-8">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-primary/10 transition-all duration-700 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 text-primary group-hover:text-white">
                  {tech.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
              </CardContent>
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-primary transition-all duration-700 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
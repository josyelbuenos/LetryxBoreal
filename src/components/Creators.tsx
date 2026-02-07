
"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Instagram, ShieldCheck, Cpu } from 'lucide-react';

const creators = [
  {
    name: 'Josyel Buenos',
    role: 'Arquiteto Principal & Dev IA',
    bio: 'Desenvolvedor focado em IA Generativa e Pentesting Digital. No Letryx Boreal, aplica modelos neurais avançados e protocolos de segurança ofensiva para criar um ecossistema onde a descoberta inteligente e a privacidade absoluta coexistem.',
    imgId: 'josyel-avatar',
    delay: 'animate-delay-100',
    github: 'https://github.com/josyelbuenos',
    instagram: 'https://instagram.com/soaresbuenos'
  }
];

export function Creators() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.creator-item');
            items.forEach((item) => item.classList.add('animate-fade-in-up'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="creators" ref={sectionRef} className="bg-secondary/10 py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl reveal-on-scroll">O Arquiteto</h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto reveal-on-scroll">
          Unindo a precisão da segurança cibernética com o poder da inteligência artificial.
        </p>
        
        <div className="mt-20 flex justify-center max-w-5xl mx-auto">
          {creators.map((creator, i) => {
            const image = PlaceHolderImages.find(img => img.id === creator.imgId);
            return (
              <div key={i} className={`creator-item opacity-0 flex flex-col items-center group ${creator.delay} max-w-xl`}>
                <div className="relative mb-8 h-64 w-64 overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl transition-all duration-700 group-hover:border-primary/20 group-hover:scale-105 group-hover:rotate-2">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={creator.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="developer portrait"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-700 group-hover:opacity-20" />
                </div>
                
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-tighter">
                    <Cpu className="h-3 w-3" /> AI Specialist
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-tighter">
                    <ShieldCheck className="h-3 w-3" /> Pentesting Expert
                  </div>
                </div>

                <h3 className="font-headline text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{creator.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6 px-4 py-1.5 rounded-full">{creator.role}</p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-center px-4">
                  {creator.bio}
                </p>
                <div className="flex gap-6">
                  <a href={creator.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm text-muted-foreground hover:text-primary hover:scale-110 active:scale-95 transition-all duration-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href={creator.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm text-muted-foreground hover:text-primary hover:scale-110 active:scale-95 transition-all duration-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

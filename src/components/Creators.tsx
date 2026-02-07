"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Twitter, Linkedin } from 'lucide-react';

const creators = [
  {
    name: 'Julian Boreal',
    role: 'Lead Architect',
    bio: 'Especialista em ecossistemas literários modulares, focado em trazer a luz da descoberta para a era digital.',
    imgId: 'dev-1',
    delay: 'animate-delay-100'
  },
  {
    name: 'Elena Silver',
    role: 'Creative Director',
    bio: 'Designer focada em interfaces minimalistas para reduzir a fadiga visual do leitor através de tons orgânicos.',
    imgId: 'dev-2',
    delay: 'animate-delay-300'
  },
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
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl reveal-on-scroll">Arquitetos da Descoberta</h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto reveal-on-scroll">
          Os visionários por trás do Letryx Boreal, unindo tecnologia profunda com sensibilidade humana.
        </p>
        
        <div className="mt-20 grid gap-16 sm:grid-cols-2 max-w-5xl mx-auto">
          {creators.map((creator, i) => {
            const image = PlaceHolderImages.find(img => img.id === creator.imgId);
            return (
              <div key={i} className={`creator-item opacity-0 flex flex-col items-center group ${creator.delay}`}>
                <div className="relative mb-8 h-56 w-56 overflow-hidden rounded-[3rem] border-8 border-white/50 shadow-2xl transition-all duration-700 group-hover:border-primary/20 group-hover:scale-105 group-hover:rotate-2">
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
                <h3 className="font-headline text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{creator.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6 bg-primary/10 px-4 py-1.5 rounded-full">{creator.role}</p>
                <p className="text-muted-foreground mb-8 line-clamp-2 px-8 text-lg">{creator.bio}</p>
                <div className="flex gap-6">
                  {[Github, Twitter, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="p-3 rounded-full bg-white shadow-sm text-muted-foreground hover:text-primary hover:scale-110 active:scale-95 transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
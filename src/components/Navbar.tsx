"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Library } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3 shadow-sm" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold tracking-tight text-primary transition-all hover:scale-105 active:scale-95 group">
          <div className="p-2 rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Library className="h-6 w-6" />
          </div>
          <span className="hidden sm:inline">Letryx Boreal</span>
        </Link>
        <div className="hidden space-x-1 md:flex">
          {['Tecnologia', 'Estante IA', 'Arquitetos'].map((item, i) => (
            <Link 
              key={i}
              href={`#${['benefits', 'content', 'creators'][i]}`} 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button 
            size="sm" 
            className="gap-2 font-bold shadow-md transition-all hover:scale-105 hover:shadow-primary/30 active:scale-95 rounded-full px-6" 
            asChild
          >
            <Link href="#download">
              <Download className="h-4 w-4" />
              <span>Baixar Beta</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
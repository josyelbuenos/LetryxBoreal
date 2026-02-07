import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Library } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold tracking-tight text-primary transition-transform hover:scale-105 active:scale-95">
          <Library className="h-6 w-6" />
          <span>Letryx Boreal</span>
        </Link>
        <div className="hidden space-x-8 md:flex">
          {['Tecnologia', 'Estante IA', 'Arquitetos'].map((item, i) => (
            <Link 
              key={i}
              href={`#${['benefits', 'content', 'creators'][i]}`} 
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
        <Button size="sm" className="gap-2 font-bold shadow-md transition-all hover:scale-105 hover:shadow-primary/20 active:scale-95" asChild>
          <Link href="#download">
            <Download className="h-4 w-4" />
            Instalar Beta
          </Link>
        </Button>
      </div>
    </nav>
  );
}
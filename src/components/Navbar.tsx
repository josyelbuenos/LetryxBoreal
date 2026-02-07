import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Library } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold tracking-tight text-primary">
          <Library className="h-6 w-6" />
          <span>Letryx Boreal</span>
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link href="#benefits" className="text-sm font-semibold hover:text-primary transition-colors">Tecnologia</Link>
          <Link href="#content" className="text-sm font-semibold hover:text-primary transition-colors">Estante IA</Link>
          <Link href="#creators" className="text-sm font-semibold hover:text-primary transition-colors">Arquitetos</Link>
        </div>
        <Button size="sm" className="gap-2 font-bold" asChild>
          <Link href="#download">
            <Download className="h-4 w-4" />
            Instalar Beta
          </Link>
        </Button>
      </div>
    </nav>
  );
}
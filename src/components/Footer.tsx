import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  return (
    <footer className="border-t border-primary/10 bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-3 font-headline text-2xl font-bold tracking-tight text-primary transition-transform hover:scale-105">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                {logo && (
                  <Image 
                    src={logo.imageUrl}
                    alt="Letryx Boreal Logo"
                    fill
                    className="object-contain"
                    data-ai-hint="app logo"
                  />
                )}
              </div>
              <span>Letryx Boreal</span>
            </Link>
            <p className="max-w-xs text-center md:text-left text-sm text-muted-foreground leading-relaxed">
              Onde a engenharia de segurança e a inteligência artificial convergem para uma nova era literária.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold uppercase tracking-wider">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacidade Granular</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Termos (PWA)</Link>
              <Link href="mailto:josyelbuenos.dev@gmail.com" className="text-primary hover:underline transition-all">Suporte Técnico</Link>
            </div>
            <div className="text-xs text-muted-foreground/60 font-medium">
              © {new Date().getFullYear()} Letryx Boreal v1.0.0-beta. Desenvolvido sob protocolos de segurança de elite.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

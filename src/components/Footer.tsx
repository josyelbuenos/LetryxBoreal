import { Library } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2 font-headline text-xl font-bold tracking-tight text-primary">
            <Library className="h-6 w-6" />
            <span>Letryx Boreal</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors font-medium">Privacidade Granular</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Termos (PWA)</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Talks Beta</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Suporte</a>
          </div>
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Letryx Boreal v1.0.0-beta. Onde a leitura encontra sua luz.
          </p>
        </div>
      </div>
    </footer>
  );
}
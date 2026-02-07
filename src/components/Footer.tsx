import { Library } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2 font-headline text-xl font-bold tracking-tight text-primary">
            <Library className="h-6 w-6" />
            <span>Boreal Library</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Letryx Boreal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
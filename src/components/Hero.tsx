import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              New: Boreal v2.5 is here
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:max-w-3xl">
              Knowledge and <span className="text-primary">Elegance</span> combined.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Letryx Boreal is a next-generation library ecosystem designed for modern creators. 
              Discover, organize, and integrate world-class design assets seamlessly.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-lg font-medium gap-2 shadow-lg shadow-primary/20" asChild>
                <Link href="#download">
                  <Download className="h-5 w-5" />
                  Get Boreal Library
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg font-medium gap-2" asChild>
                <Link href="#content">
                  Explore Content
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 container mx-auto px-4 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 lg:w-1/2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border bg-card shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
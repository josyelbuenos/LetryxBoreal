import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { name: 'UI Components', count: '1,200+' },
  { name: 'Design Patterns', count: '450+' },
  { name: 'Iconography', count: '5,000+' },
  { name: 'Illustration Kits', count: '85+' },
  { name: 'Documentation', count: 'Full' },
];

export function ContentOverview() {
  const contentImage = PlaceHolderImages.find(img => img.id === 'content-assets');

  return (
    <section id="content" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary/30">
            {contentImage && (
              <Image
                src={contentImage.imageUrl}
                alt={contentImage.description}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                data-ai-hint={contentImage.imageHint}
              />
            )}
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-background/90 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1 text-xs">
                    {cat.name}: {cat.count}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A Treasure Trove of <br /> Digital Assets
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Letryx Boreal provides an expansive library of meticulously crafted components and assets. 
              Whether you are building a complex web application or a minimalist mobile interface, 
              our content overview gives you the clarity to find exactly what you need.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { label: 'Precision Crafted', desc: 'Every pixel and line of code is optimized for quality.' },
                { label: 'Cloud Synchronized', desc: 'Access your favorite assets from any device, anywhere.' },
                { label: 'Community Driven', desc: 'Regularly updated with new content based on user feedback.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
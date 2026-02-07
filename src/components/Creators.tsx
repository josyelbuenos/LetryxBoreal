import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Twitter, Linkedin } from 'lucide-react';

const creators = [
  {
    name: 'Julian Boreal',
    role: 'Lead Architect',
    bio: 'Pioneer in design system modularity with over 12 years of experience in high-performance digital libraries.',
    imgId: 'dev-1',
  },
  {
    name: 'Elena Silver',
    role: 'Creative Director',
    bio: 'Award-winning designer focused on accessible typography and clean user interfaces.',
    imgId: 'dev-2',
  },
];

export function Creators() {
  return (
    <section id="creators" className="bg-secondary/20 py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet the Architects</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          The visionaries behind Letryx Boreal, dedicated to crafting the future of digital asset management.
        </p>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
          {creators.map((creator, i) => {
            const image = PlaceHolderImages.find(img => img.id === creator.imgId);
            return (
              <div key={i} className="group relative flex flex-col items-center">
                <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-background shadow-xl grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={creator.name}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <h3 className="font-headline text-2xl font-bold">{creator.name}</h3>
                <p className="text-primary font-medium mb-4">{creator.role}</p>
                <p className="text-muted-foreground mb-6 line-clamp-2 px-4">{creator.bio}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
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
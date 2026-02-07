import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Library, Check } from 'lucide-react';

const shelfDimensions = [
  { name: 'Lendo Atualmente', color: 'bg-primary' },
  { name: 'Favoritos', color: 'bg-primary/80' },
  { name: 'Lidos', color: 'bg-primary/60' },
  { name: 'Lista de Desejos', color: 'bg-primary/40' },
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
                alt="Visualização da Estante Inteligente"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                data-ai-hint="bookshelf minimal"
              />
            )}
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-background/95 p-6 shadow-xl backdrop-blur-md border border-white/20">
              <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                <Library className="h-4 w-4 text-primary" /> Estante Inteligente
              </h4>
              <div className="flex flex-wrap gap-2">
                {shelfDimensions.map((dim, i) => (
                  <Badge key={i} variant="outline" className="px-3 py-1 text-xs border-primary/20">
                    <span className={`mr-2 h-2 w-2 rounded-full ${dim.color}`} />
                    {dim.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A Vastidão Literária <br /> na sua Palma
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Integramos os metadados da <strong>Z-Library</strong>, garantindo acesso a informações de mais de 14 milhões de livros. Organize sua vida literária em quatro dimensões e filtre por ano, idioma, formato e editora em segundos.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { label: 'Privacidade Granular', desc: 'Você decide exatamente o que mostrar ou esconder no seu perfil.' },
                { label: 'Comunidade Verificada', desc: 'Identifique perfis influentes e criadores com nosso sistema de selos.' },
                { label: 'Acessibilidade Nativa', desc: 'Suporte a múltiplos idiomas e modos claro/escuro para qualquer leitor.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-4 w-4" />
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
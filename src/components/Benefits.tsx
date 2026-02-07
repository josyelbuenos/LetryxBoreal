import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Zap, Smartphone, MessageSquareQuote } from 'lucide-react';

const technologies = [
  {
    title: 'Inteligência Artificial Real',
    description: 'Com Google Genkit + Gemini, analisamos seus insights e histórico para recomendações literárias profundas, não apenas algoritmos básicos.',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Infraestrutura Realtime',
    description: 'Powered by Firebase. Interações instantâneas e acesso seguro via Magic Link, sem a necessidade de decorar senhas antigas.',
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Experiência PWA',
    description: 'Instale como um app nativo. Ocupa pouco espaço e oferece uma StatusBar dinâmica que monitora sua rede e bateria em tempo real.',
    icon: <Smartphone className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Talks: Notas Temporárias',
    description: 'Compartilhe insights rápidos em micro-textos que duram 24 horas. O dinamismo das redes sociais focado puramente em leitura.',
    icon: <MessageSquareQuote className="h-8 w-8 text-primary" />,
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-secondary/20 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Tecnologia de Elite para Leitores
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Combinamos Next.js 15, React 19 e as ferramentas mais avançadas da Google para criar um ambiente fluido e inteligente.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <Card key={index} className="group relative border-none bg-background/50 backdrop-blur-sm shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  {tech.icon}
                </div>
                <CardTitle className="font-headline text-xl text-foreground">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Zap, Smartphone, MessageSquareQuote } from 'lucide-react';

const technologies = [
  {
    title: 'Inteligência Artificial Real',
    description: 'Com Google Genkit + Gemini, analisamos seus insights e histórico para recomendações literárias profundas, não apenas algoritmos básicos.',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    delay: '0ms'
  },
  {
    title: 'Infraestrutura Realtime',
    description: 'Powered by Firebase. Interações instantâneas e acesso seguro via Magic Link, sem a necessidade de decorar senhas antigas.',
    icon: <Zap className="h-8 w-8 text-primary" />,
    delay: '100ms'
  },
  {
    title: 'Experiência PWA',
    description: 'Instale como um app nativo. Ocupa pouco espaço e oferece uma StatusBar dinâmica que monitora sua rede e bateria em tempo real.',
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    delay: '200ms'
  },
  {
    title: 'Talks: Notas Temporárias',
    description: 'Compartilhe insights rápidos em micro-textos que duram 24 horas. O dinamismo das redes sociais focado puramente em leitura.',
    icon: <MessageSquareQuote className="h-8 w-8 text-primary" />,
    delay: '300ms'
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-secondary/20 py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in-up opacity-0">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Tecnologia de Elite para Leitores
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Combinamos Next.js 15, React 19 e as ferramentas mais avançadas da Google para criar um ambiente fluido e inteligente.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="group animate-fade-in-up opacity-0 relative border-none bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-background"
              style={{ animationDelay: tech.delay }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3">
                  <div className="transition-colors duration-500 group-hover:text-white">
                    {tech.icon}
                  </div>
                </div>
                <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{tech.title}</CardTitle>
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
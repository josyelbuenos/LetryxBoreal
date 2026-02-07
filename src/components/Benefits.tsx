import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Layout, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: 'Modern Architecture',
    description: 'Built with the latest technology to ensure maximum performance and seamless integration across all platforms.',
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Clean Legibility',
    description: 'Powered by the Inter font family, providing a balanced reading experience and ensuring content is accessible.',
    icon: <Layout className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security protocols to protect your assets and data within the Boreal ecosystem.',
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Intuitive Design',
    description: 'A calm and intellectual atmosphere designed to minimize distraction and maximize creative flow.',
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-secondary/20 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Boreal?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the fusion of high-performance tools and sophisticated aesthetics.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group relative border-none bg-background shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  {benefit.icon}
                </div>
                <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
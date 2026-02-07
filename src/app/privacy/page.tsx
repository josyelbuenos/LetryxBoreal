import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft, ShieldCheck, EyeOff, Fingerprint } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12 font-bold uppercase text-xs tracking-widest">
          <ChevronLeft className="h-4 w-4" /> Voltar ao Início
        </Link>
        
        <h1 className="font-headline text-5xl font-black mb-12 tracking-tight">Privacidade Granular <br/><span className="text-primary/60 text-2xl">Segurança de Dados Boreal</span></h1>
        
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {[
            { icon: <ShieldCheck className="h-6 w-6"/>, title: "Zero Passwords", desc: "Magic Links protegem contra ataques de força bruta." },
            { icon: <Fingerprint className="h-6 w-6"/>, title: "Anonymity", desc: "Opção de metadados ofuscados para leituras privadas." },
            { icon: <EyeOff className="h-6 w-6"/>, title: "No Tracking", desc: "Não vendemos logs de comportamento para terceiros." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-3xl bg-secondary/20 border border-primary/5">
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none space-y-12 text-lg text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Coleta de Dados via IA</h2>
            <p>
              Nossa IA (Google Genkit + Gemini) analisa o contexto semântico das suas interações para gerar recomendações. Esses dados são processados de forma isolada e utilizados exclusivamente para melhorar sua experiência de descoberta literária.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Visibilidade de Perfil</h2>
            <p>
              A <strong>Privacidade Granular</strong> permite que você escolha exatamente quem pode ver sua "Estante Inteligente" e seus "Talks". Você tem o poder de tornar seu perfil totalmente invisível para indexadores externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Infraestrutura Segura</h2>
            <p>
              Operamos sobre o Firebase (Google Cloud), garantindo criptografia de ponta a ponta para todos os dados em trânsito. Nossa arquitetura é revisada sob a ótica de segurança ofensiva para mitigar riscos de vazamentos.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-2">Solicitar Exclusão de Dados</h2>
            <p className="text-sm">Para remover permanentemente seus dados do nosso ecossistema, envie um e-mail para: <Link href="mailto:josyelbuenos.dev@gmail.com" className="font-bold underline">josyelbuenos.dev@gmail.com</Link></p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

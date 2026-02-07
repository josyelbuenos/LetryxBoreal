import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12 font-bold uppercase text-xs tracking-widest">
          <ChevronLeft className="h-4 w-4" /> Voltar ao Início
        </Link>
        
        <h1 className="font-headline text-5xl font-black mb-12 tracking-tight">Termos de Uso <br/><span className="text-primary/60 text-2xl">Versão 1.0.0-beta</span></h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-lg text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Natureza do Ecossistema</h2>
            <p>
              O Letryx Boreal é um Progressive Web App (PWA) de descoberta literária. Ao utilizar nossa plataforma, você reconhece que está acessando uma versão Beta, projetada para testar protocolos avançados de IA e segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Integração Z-Library</h2>
            <p>
              O Letryx atua como um indexador inteligente de metadados. Não armazenamos arquivos protegidos por direitos autorais em nossos servidores. A responsabilidade pelo uso da base de dados Z-Library recai sobre o usuário final, conforme as leis de sua jurisdição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Segurança e Acesso</h2>
            <p>
              Utilizamos autenticação via <strong>Magic Link</strong> para eliminar vulnerabilidades de senhas fracas. O acesso é pessoal e intransferível. Qualquer tentativa de engenharia reversa ou teste de penetração não autorizado em nossa infraestrutura resultará em banimento imediato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Notas Efêmeras (Talks)</h2>
            <p>
              O conteúdo postado nos "Talks" é efêmero (24h). O Letryx não se responsabiliza pela perda de dados de conteúdos temporários, que são projetados para interações instantâneas.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-2">Dúvidas Jurídicas?</h2>
            <p className="text-sm">Entre em contato através do e-mail: <Link href="mailto:josyelbuenos.dev@gmail.com" className="font-bold underline">josyelbuenos.dev@gmail.com</Link></p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

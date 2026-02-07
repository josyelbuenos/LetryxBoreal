import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Letryx Boreal | Ecossistema de Descoberta Literária',
  description: 'Onde a inteligência da IA encontra o dinamismo das conexões humanas. Descubra seu próximo mundo favorito através da luz Boreal.',
  icons: {
    icon: 'https://i.ibb.co/YBdyV04f/Design-sem-nome-20260203-232552-0000.png',
    shortcut: 'https://i.ibb.co/YBdyV04f/Design-sem-nome-20260203-232552-0000.png',
    apple: 'https://i.ibb.co/YBdyV04f/Design-sem-nome-20260203-232552-0000.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30">{children}</body>
    </html>
  );
}

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { ContentOverview } from '@/components/ContentOverview';
import { Creators } from '@/components/Creators';
import { DownloadFacilitation } from '@/components/DownloadFacilitation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Benefits />
      <ContentOverview />
      <Creators />
      <DownloadFacilitation />
      <Footer />
    </main>
  );
}
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, CheckCircle, Package, ArrowRight, Monitor, Smartphone, Globe } from 'lucide-react';

export function DownloadFacilitation() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const startDownload = () => {
    setDownloading(true);
    setCompleted(false);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setCompleted(true);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  return (
    <section id="download" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Ready to Start?</h2>
              <p className="mt-4 text-primary-foreground/80">
                Join thousands of creators using Letryx Boreal. Select your platform and get started in seconds.
              </p>
              
              <div className="mt-10 space-y-4">
                {downloading ? (
                  <div className="space-y-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Downloading Boreal_Library_Setup.pkg</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-white/20" />
                    <p className="text-xs text-primary-foreground/60 italic text-center">Optimizing assets for your connection...</p>
                  </div>
                ) : completed ? (
                  <div className="flex items-center gap-4 rounded-xl bg-white/20 p-6 backdrop-blur-sm">
                    <CheckCircle className="h-10 w-10 shrink-0 text-white" />
                    <div>
                      <p className="font-bold">Download Complete!</p>
                      <p className="text-sm text-primary-foreground/80">Check your downloads folder to install.</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-1">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="h-14 gap-3 text-lg font-bold w-full"
                      onClick={startDownload}
                    >
                      <Download className="h-5 w-5" />
                      Download for Desktop
                    </Button>
                    <div className="flex justify-center gap-8 py-4 opacity-80">
                      <div className="flex flex-col items-center gap-1">
                        <Monitor className="h-5 w-5" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">macOS / Win</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Smartphone className="h-5 w-5" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">iOS / Android</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Globe className="h-5 w-5" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Web Plugin</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white/10 p-8 lg:p-12 lg:border-l lg:border-white/10">
              <h3 className="font-headline text-xl font-bold mb-6">Quick Install Guide</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Download Package', desc: 'Get the latest stable release for your OS.' },
                  { step: '02', title: 'Run Installer', desc: 'Open the downloaded file and follow prompts.' },
                  { step: '03', title: 'Sync Account', desc: 'Log in to sync your preferences and cloud assets.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="font-headline text-2xl font-black text-white/30 group-hover:text-white transition-colors leading-none">{item.step}</div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-white/10">
                <a href="#" className="flex items-center justify-center gap-2 text-sm font-bold hover:underline">
                  Need Enterprise deployment? <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
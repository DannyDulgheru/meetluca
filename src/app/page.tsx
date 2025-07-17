"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />,
});

export default function Home() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <ThreeScene />
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="animate-fade-in-down font-headline text-5xl font-bold text-foreground drop-shadow-lg md:text-7xl">
          MeetLuca Agency
        </h1>
        <p className="font-body text-md animate-fade-in-up [animation-delay:0.2s] mt-4 max-w-lg text-foreground/90 drop-shadow-md md:text-lg">
          A modern SaaS Company based in Chisinau, Moldova, crafting digital solutions for the future.
        </p>
        <Button asChild size="lg" className="animate-fade-in [animation-delay:0.4s] mt-8 bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20">
          <Link href="https://t.me/+37368787316" target="_blank" rel="noopener noreferrer">
            <Send className="mr-2 h-5 w-5" />
            Contact on Telegram
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-8 z-10 flex space-x-4">
        <Button asChild size="icon" className="animate-fade-in [animation-delay:0.6s] bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 font-bold">
          <Link href="https://quorbik.com" target="_blank" rel="noopener noreferrer">
            Q
          </Link>
        </Button>
        <Button asChild size="icon" className="animate-fade-in [animation-delay:0.8s] bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 font-bold">
          <Link href="https://dulgheru.digital" target="_blank" rel="noopener noreferrer">
            DD
          </Link>
        </Button>
        <Button asChild size="icon" className="animate-fade-in [animation-delay:1.0s] bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 font-bold">
          <Link href="https://motion.dulgheru.digital" target="_blank" rel="noopener noreferrer">
            MD
          </Link>
        </Button>
      </div>
    </main>
  );
}

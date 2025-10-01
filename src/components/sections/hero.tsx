"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import LightRays from '../LightRays';


export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 z-0 bg-background" />}>
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
      </Suspense>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="relative z-10 container max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 mb-6">
          Powering Your Business with Smart IT Solutions
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          24/7 Remote IT Management | Cybersecurity | Development | Consultancy
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#services">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

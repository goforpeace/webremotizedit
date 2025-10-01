import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ChatbotCta } from '@/components/chatbot-cta';
import SplashCursor from '@/components/SplashCursor';

export const metadata: Metadata = {
  title: 'RemoteTech Nexus',
  description: 'Powering Your Business with Smart IT Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <svg style={{ position: 'fixed', top: '-1000px', left: '-1000px' }} aria-hidden="true" focusable="false">
          <defs>
            <filter id="gooey-nav-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <Header />
        <main className="relative overflow-x-hidden">{children}</main>
        <Footer />
        <ChatbotCta />
        <Toaster />
        <SplashCursor />
      </body>
    </html>
  );
}

import { Code, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-screen-2xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <p className="text-sm font-semibold">Remotized IT &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

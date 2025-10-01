import { Hero } from '@/components/sections/hero';
import { Highlights } from '@/components/sections/highlights';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import AnimatedContent from '@/components/AnimatedContent';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedContent>
        <Highlights />
      </AnimatedContent>
      <AnimatedContent>
        <Services />
      </AnimatedContent>
      <AnimatedContent>
        <Portfolio />
      </AnimatedContent>
      <AnimatedContent>
        <Testimonials />
      </AnimatedContent>
      <AnimatedContent>
        <Contact />
      </AnimatedContent>
    </>
  );
}

import { Hero } from '@/components/sections/hero';
import { Highlights } from '@/components/sections/highlights';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}

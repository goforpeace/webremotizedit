import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Contact() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-muted-foreground mt-2">Let's build the future of your IT together.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <div className="rounded-lg overflow-hidden h-full min-h-[400px]">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

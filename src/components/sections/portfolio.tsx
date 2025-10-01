"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "Project Alpha",
    description: "Cloud management dashboard for a SaaS platform.",
    category: "Web App"
  },
  {
    id: "portfolio-2",
    title: "Project Beta",
    description: "Cross-platform mobile app for logistics.",
    category: "Mobile App"
  },
  {
    id: "portfolio-3",
    title: "Project Gamma",
    description: "High-traffic e-commerce solution with custom CMS.",
    category: "E-Commerce"
  },
  {
    id: "portfolio-4",
    title: "Project Delta",
    description: "Scalable cloud infrastructure design for a fintech startup.",
    category: "IT Consultancy"
  }
];

export function Portfolio() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
          <p className="text-muted-foreground mt-2">A glimpse into our successful projects and client collaborations.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {portfolioItems.map((item, index) => {
              const image = getImage(item.id);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                      <Card className="overflow-hidden h-full flex flex-col bg-card/50 border-primary/20">
                        {image && (
                           <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={600}
                              height={400}
                              className="w-full h-48 object-cover"
                              data-ai-hint={image.imageHint}
                            />
                        )}
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

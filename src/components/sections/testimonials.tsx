"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, TechCorp",
    avatar: "JD",
    image: "https://picsum.photos/seed/avatar1/100/100",
    text: "Remotized IT transformed our infrastructure. Their 24/7 support is a game-changer for our global team. Truly a cutting-edge partner.",
  },
  {
    name: "John Smith",
    title: "CTO, Innovate LLC",
    avatar: "JS",
    image: "https://picsum.photos/seed/avatar2/100/100",
    text: "The cybersecurity solutions provided are top-notch. We've never felt more secure. Their team is knowledgeable and always responsive.",
  },
  {
    name: "Emily White",
    title: "Founder, Creative Solutions",
    avatar: "EW",
    image: "https://picsum.photos/seed/avatar3/100/100",
    text: "From concept to launch, the development team was incredible. They delivered a stunning web app that exceeded all our expectations.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-background/70">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-2">Real feedback from businesses we've empowered.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="bg-card/30 backdrop-blur-md border-primary/20 shadow-lg shadow-primary/10 overflow-hidden relative">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/30" />
                      <p className="text-lg italic text-foreground/80 mb-6">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Monitor, Shield, Smartphone, Briefcase, Wrench } from "lucide-react";
import ElectricBorder from "../ElectricBorder";

const services = [
  {
    icon: <Monitor className="h-8 w-8 mb-4 text-primary" />,
    title: "Managed IT Services",
    description: "Remote server monitoring, infrastructure management, and 24/7 support to keep your systems running smoothly."
  },
  {
    icon: <Shield className="h-8 w-8 mb-4 text-primary" />,
    title: "Cybersecurity",
    description: "Server & network protection, data backups, and advanced threat detection to safeguard your digital assets."
  },
  {
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    title: "Web & App Development",
    description: "Custom websites, scalable applications, and e-commerce solutions tailored to your business needs."
  },
  {
    icon: <Briefcase className="h-8 w-8 mb-4 text-primary" />,
    title: "IT Consultancy",
    description: "Expert guidance to help your business design, implement, and optimize a successful IT roadmap."
  },
  {
    icon: <Wrench className="h-8 w-8 mb-4 text-primary" />,
    title: "Website Maintenance",
    description: "Reliable hosting, regular updates, and ongoing support to ensure your website is always online and secure."
  }
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-background/70">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-2">Comprehensive tech solutions for the modern business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ElectricBorder key={index} color="hsl(var(--accent))" thickness={1} style={{ borderRadius: 'var(--radius)' }} suspendWhenOffscreen>
              <Card className="bg-card/50 backdrop-blur-sm border-transparent h-full">
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

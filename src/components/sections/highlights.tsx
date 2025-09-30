import { Card, CardContent } from "@/components/ui/card";
import { Server, ShieldCheck, Code, BrainCircuit } from "lucide-react";

const highlights = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Remote IT Management",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "24/7 Support & Security",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web & App Development",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "IT Consultancy & Cloud",
  },
];

export function Highlights() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="bg-transparent border-0 shadow-none text-center">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                {highlight.icon}
                <h3 className="text-lg font-semibold">{highlight.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

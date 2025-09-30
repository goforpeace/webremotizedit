"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageCircle } from "lucide-react";

export function ChatbotCta() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg shadow-primary/30"
            onClick={() => console.log("Chatbot activated")}
            aria-label="Talk to our IT experts"
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-primary-foreground">
          <p>Talk to Our IT Experts Now</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

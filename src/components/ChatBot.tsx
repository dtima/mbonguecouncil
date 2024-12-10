import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

const faqs = [
  {
    question: "How do I obtain a birth certificate in Mbonge Council?",
    answer: "To obtain a birth certificate in Mbonge Council, visit the Civil Status Registry office at the Council with the required documents: declaration of birth from the hospital, parents' identification, and marriage certificate (if applicable). The process typically takes 3-5 working days.",
  },
  {
    question: "What are the market days in Mbonge?",
    answer: "The main market day in Mbonge is every Thursday. The market operates from early morning until evening, featuring local produce, goods, and services. There's also a smaller daily market for essential items.",
  },
  {
    question: "How can I pay my council taxes?",
    answer: "Council taxes can be paid directly at the Mbonge Council Revenue Office during working hours (Monday to Friday, 7:30 AM - 3:30 PM). You can also pay through authorized mobile money agents in the municipality.",
  },
  {
    question: "What documents do I need for a building permit in Mbonge?",
    answer: "For a building permit in Mbonge, you need: architectural plans (3 copies), proof of land ownership, site plan, technical report, tax clearance certificate, and application letter to the Mayor. Submit these at the Technical Service office of the Council.",
  },
  {
    question: "How do I report issues in my neighborhood?",
    answer: "You can report neighborhood issues by: 1) Visiting the Mbonge Council office in person, 2) Calling our service desk at the published council number, or 3) Through your Quarter Head who will relay the information to the appropriate council department.",
  },
  {
    question: "What are the requirements for business registration in Mbonge?",
    answer: "To register a business in Mbonge, you need: valid ID, tax payer's card, business plan or description, location details, and applicable fees. Visit the Council's Economic Development office for guidance and processing.",
  },
];

const ChatBot = () => {
  const [selectedFaq, setSelectedFaq] = useState<typeof faqs[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="lg" className="rounded-full h-14 w-14">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>How can we help you with Mbonge Council services?</SheetTitle>
          </SheetHeader>
          <div className="mt-4 h-[80vh] flex flex-col">
            {selectedFaq ? (
              <div className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="mb-4"
                  onClick={() => setSelectedFaq(null)}
                >
                  ← Back to questions
                </Button>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{selectedFaq.question}</h3>
                  <p className="text-muted-foreground">{selectedFaq.answer}</p>
                </div>
              </div>
            ) : (
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search Mbonge Council services and information..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Frequently Asked Questions">
                    <ScrollArea className="h-[60vh]">
                      {faqs.map((faq, index) => (
                        <CommandItem
                          key={index}
                          onSelect={() => setSelectedFaq(faq)}
                          className="cursor-pointer"
                        >
                          {faq.question}
                        </CommandItem>
                      ))}
                    </ScrollArea>
                  </CommandGroup>
                </CommandList>
              </Command>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatBot;
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: "DTIMA Launch in Yaounde",
      description: "Mbonge Council joins 14 other participating councils to start its digital transformation.",
      date: "2024-02-28",
      image: "/lovable-uploads/8abd09c4-579f-414b-86ea-c30ba8354f63.png"
    },
    {
      id: 2,
      title: "Mbonge Council Leads in PIP Execution",
      description: "Mbonge Council in Meme Division of the South West Region, has emerged first in the execution of Public Investment Projects, PIP. The statistics were made public during the Meme third quarter Divisional Participatory Follow-up Committee meeting.",
      date: "2024-02-14",
      image: "/lovable-uploads/639c2931-b6cf-499e-9da9-619614daebde.png"
    },
    {
      id: 3,
      title: "Boosting Local Revenue: Mbonge, Kumba II Councils Acquire New Trucks",
      description: "The 40 ton trucks will be used to clear waste as well as to generate revenue through rents for the different municipalities.",
      date: "2024-02-13",
      image: "/lovable-uploads/7ac15d57-65eb-4a0c-bccf-b86ae5953c11.png"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest News</h2>
          <Button variant="outline" className="gap-2 text-sm md:text-base">
            Visit the Newsroom <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-40 md:h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{item.description}</CardDescription>
                <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
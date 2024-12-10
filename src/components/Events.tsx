import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Events() {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: "Mbonge Council Budgetary Session",
      date: "2024-12-11",
      time: "09:00 AM - 05:00 PM",
      month: "DEC",
      day: "11"
    },
    {
      id: 2,
      title: "Mbonge Cultural Festival",
      date: "2025-02-15",
      time: "10:00 AM - Feb, 17 06:00 PM",
      month: "FEB",
      day: "15"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t("events.title")}</h2>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow p-3 md:p-4 flex items-start gap-4 md:gap-6">
              <div className="bg-[#0EA5E9] text-white p-2 md:p-4 rounded text-center min-w-[70px] md:min-w-[90px]">
                <div className="text-base md:text-lg font-semibold">{event.month}</div>
                <div className="text-2xl md:text-4xl font-bold">{event.day}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{event.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{event.time}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            variant="default" 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-6 md:px-8 text-sm md:text-base"
          >
            {t("events.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
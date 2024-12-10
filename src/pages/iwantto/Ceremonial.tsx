import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText } from "lucide-react";

export default function Ceremonial() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Ceremonial Services</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Marriage Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Schedule your civil marriage ceremony at the Mbonge Council.</p>
              <Button>Book Appointment</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Get your documents authenticated by council officials.</p>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
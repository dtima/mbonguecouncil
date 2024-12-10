import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Info } from "lucide-react";

export default function EventsPermit() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Events Permit Application</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Apply for Permit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Submit an application for your event permit</p>
              <Button>Start Application</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Review event permit requirements and guidelines</p>
              <Button variant="outline">View Guidelines</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Check the list of required documents</p>
              <Button variant="outline">View Checklist</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
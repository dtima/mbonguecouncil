import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, HelpCircle } from "lucide-react";

export default function BusinessLicense() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Business License Application</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                New Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Apply for a new business license</p>
              <Button>Start Application</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Renewal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Renew your existing business license</p>
              <Button>Renew License</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn about license requirements</p>
              <Button variant="outline">View Guide</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
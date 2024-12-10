import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DollarSign, FileText, Calendar, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Grants() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Business Grants</h1>
            <p className="text-xl">Discover available grants and funding opportunities for your business in Mbonge</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <DollarSign className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Business Grants</h3>
              <p className="text-gray-600 mb-4">Financial support for small businesses and startups</p>
              <Button variant="outline" className="w-full">
                Apply Now
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grant Guidelines</h3>
              <p className="text-gray-600 mb-4">Learn about eligibility and requirements</p>
              <Button variant="outline" className="w-full">
                View Guidelines
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Calendar className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upcoming Deadlines</h3>
              <p className="text-gray-600 mb-4">Check important dates and deadlines</p>
              <Button variant="outline" className="w-full">
                View Calendar
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Available Grant Programs</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Business Development Grant</h3>
                <p className="text-gray-600 mt-2">Support for established businesses looking to expand operations</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Up to 5,000,000 FCFA in funding</li>
                  <li>Technical assistance included</li>
                  <li>Quarterly application cycles</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Startup Innovation Fund</h3>
                <p className="text-gray-600 mt-2">For new businesses with innovative solutions</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Up to 2,000,000 FCFA in seed funding</li>
                  <li>Mentorship program</li>
                  <li>Monthly workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
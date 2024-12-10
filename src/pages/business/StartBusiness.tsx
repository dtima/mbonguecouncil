import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartBusiness() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Start a Business</h1>
            <p className="text-xl">Your guide to starting a business in Mbonge</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Building className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Registration</h3>
              <p className="text-gray-600 mb-4">Register your new business with the council</p>
              <Button variant="outline" className="w-full">
                Start Registration
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
              <p className="text-gray-600 mb-4">Download and prepare necessary documents</p>
              <Button variant="outline" className="w-full">
                View Documents
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Scale className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Requirements</h3>
              <p className="text-gray-600 mb-4">Understand legal obligations and compliance</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Steps to Start Your Business</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">1. Business Planning</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Develop a business plan</li>
                  <li>Market research</li>
                  <li>Financial planning</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">2. Legal Requirements</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Business registration</li>
                  <li>Tax registration</li>
                  <li>Permits and licenses</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">3. Setup Operations</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Location selection</li>
                  <li>Equipment and supplies</li>
                  <li>Hiring employees</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">4. Launch Your Business</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Marketing strategy</li>
                  <li>Opening ceremony</li>
                  <li>Community engagement</li>
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
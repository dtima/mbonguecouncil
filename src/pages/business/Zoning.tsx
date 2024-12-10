import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building, Map, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Zoning() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Zoning Information</h1>
            <p className="text-xl">Understanding Mbonge's zoning regulations and land use guidelines</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Building className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zoning Districts</h3>
              <p className="text-gray-600 mb-4">Explore different zoning districts and their regulations</p>
              <Button variant="outline" className="w-full">
                View Districts
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Map className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zoning Map</h3>
              <p className="text-gray-600 mb-4">Interactive map of Mbonge's zoning districts</p>
              <Button variant="outline" className="w-full">
                Open Map
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Applications</h3>
              <p className="text-gray-600 mb-4">Apply for zoning permits and variances</p>
              <Button variant="outline" className="w-full">
                Start Application
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Zoning Districts Overview</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Commercial Districts</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Central Business District (CBD)</li>
                  <li>Neighborhood Commercial (NC)</li>
                  <li>Highway Commercial (HC)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Industrial Districts</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Light Industrial (LI)</li>
                  <li>Heavy Industrial (HI)</li>
                  <li>Industrial Park (IP)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Residential Districts</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Single Family Residential (R-1)</li>
                  <li>Multi-Family Residential (R-2)</li>
                  <li>Mixed Use Residential (MUR)</li>
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
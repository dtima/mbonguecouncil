import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Scale, FileText, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Bids() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Bids & Tenders</h1>
            <p className="text-xl">Current opportunities to work with Mbonge Council</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Scale className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Current Bids</h3>
              <p className="text-gray-600 mb-4">View active bidding opportunities</p>
              <Button variant="outline" className="w-full">
                View Bids
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bid Documents</h3>
              <p className="text-gray-600 mb-4">Download required forms and documents</p>
              <Button variant="outline" className="w-full">
                Download Forms
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Building className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vendor Registration</h3>
              <p className="text-gray-600 mb-4">Register as a vendor for future opportunities</p>
              <Button variant="outline" className="w-full">
                Register Now
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Active Bids</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Road Maintenance Project</h3>
                <p className="text-gray-600 mt-2">Maintenance of major roads in Mbonge township</p>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Bid Number: 2024-RM-001</p>
                  <p>Closing Date: April 30, 2024</p>
                  <p>Category: Infrastructure</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  View Details
                </Button>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Waste Management Services</h3>
                <p className="text-gray-600 mt-2">Collection and disposal of municipal waste</p>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Bid Number: 2024-WM-003</p>
                  <p>Closing Date: May 15, 2024</p>
                  <p>Category: Environmental Services</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
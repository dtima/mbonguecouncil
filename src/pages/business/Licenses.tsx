import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, Download, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Licenses() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Business Licenses</h1>
            <p className="text-xl">Everything you need to know about obtaining and maintaining business licenses in Mbonge</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">New Business License</h3>
              <p className="text-gray-600 mb-4">Apply for a new business license in Mbonge</p>
              <Button variant="outline" className="w-full">
                Start Application
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Download className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">License Renewal</h3>
              <p className="text-gray-600 mb-4">Renew your existing business license</p>
              <Button variant="outline" className="w-full">
                Renew License
              </Button>
            </div>

            <div className="p-6 border rounded-lg">
              <HelpCircle className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support & FAQ</h3>
              <p className="text-gray-600 mb-4">Get help with your business license</p>
              <Button variant="outline" className="w-full">
                View FAQs
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">License Requirements</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Required Documents</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Valid ID or passport</li>
                  <li>Tax clearance certificate</li>
                  <li>Proof of business location</li>
                  <li>Business registration documents</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Fees</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Application fee: 25,000 FCFA</li>
                  <li>Annual renewal fee: 15,000 FCFA</li>
                  <li>Late renewal penalty: 5,000 FCFA</li>
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
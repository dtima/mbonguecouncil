import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, Users, FileCheck } from "lucide-react";

export default function Suppliers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Supplier Registration</h1>
            <p className="text-xl">Partner with Mbonge Council as a registered supplier</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Building2 className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Register as Supplier</h3>
              <p className="text-gray-600">Complete our supplier registration process to be eligible for council contracts</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Users className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Current Suppliers</h3>
              <p className="text-gray-600">View our list of registered suppliers and their specialties</p>
            </div>
            <div className="p-6 border rounded-lg">
              <FileCheck className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <p className="text-gray-600">Learn about the requirements and documentation needed</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Supplier Categories</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold mb-2">Goods & Equipment</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Office Supplies</li>
                  <li>Construction Materials</li>
                  <li>IT Equipment</li>
                  <li>Vehicles & Machinery</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold mb-2">Services</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Construction & Maintenance</li>
                  <li>Professional Services</li>
                  <li>IT Services</li>
                  <li>Training & Development</li>
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
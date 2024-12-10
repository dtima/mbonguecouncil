import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Phone, AlertTriangle, Stethoscope } from "lucide-react";

export default function PublicSafety() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6">Public Safety</h1>
            <p className="text-xl">
              Ensuring the safety and security of all Mbonge residents through proactive measures and
              emergency preparedness.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border rounded-lg">
              <Shield className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Law Enforcement</h3>
              <p className="text-gray-600">24/7 police services to protect and serve our community</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Phone className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
              <p className="text-gray-600">Quick access to emergency services when you need them</p>
            </div>
            <div className="p-6 border rounded-lg">
              <AlertTriangle className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Preparedness</h3>
              <p className="text-gray-600">Resources and guidelines for emergency situations</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Stethoscope className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Services</h3>
              <p className="text-gray-600">Access to healthcare facilities and emergency medical care</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Emergency Contact Numbers</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Police Emergency</h3>
                <p className="text-xl text-cameroon-green">+237 123 456 789</p>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Fire Department</h3>
                <p className="text-xl text-cameroon-green">+237 123 456 790</p>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Ambulance</h3>
                <p className="text-xl text-cameroon-green">+237 123 456 791</p>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Council Emergency Line</h3>
                <p className="text-xl text-cameroon-green">+237 123 456 792</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
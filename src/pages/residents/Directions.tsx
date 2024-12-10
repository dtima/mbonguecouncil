import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Bus, Phone } from "lucide-react";

export default function Directions() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Directions to Council Hall</h1>
            <p className="text-xl">Find us easily and engage in community governance</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-cameroon-green" />
                  <h2 className="text-2xl font-bold">Our Location</h2>
                </div>
                <p className="text-gray-600">
                  Mbonge Council Hall<br />
                  Main Street, Mbonge<br />
                  South West Region, Cameroon
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-cameroon-green" />
                  <h2 className="text-2xl font-bold">Opening Hours</h2>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 8:00 AM - 4:30 PM</li>
                  <li>Saturday: 9:00 AM - 12:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Bus className="text-cameroon-green" />
                  <h2 className="text-2xl font-bold">Public Transport</h2>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>Bus Route 1: Stops directly in front of Council Hall</li>
                  <li>Bus Route 2: 5-minute walk from Market Square stop</li>
                  <li>Taxi services available</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="text-cameroon-green" />
                  <h2 className="text-2xl font-bold">Contact</h2>
                </div>
                <p className="text-gray-600">
                  Phone: +237 123 456 789<br />
                  Email: info@mbongecouncil.cm
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg h-[500px] flex items-center justify-center">
              <p className="text-gray-600 text-center">
                Interactive Map Placeholder<br />
                (Integration with Google Maps or similar service)
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
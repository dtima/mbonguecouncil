import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Car, Bus, Map, Info } from "lucide-react";

export default function GettingAround() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Getting Around Mbonge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Getting Around Mbonge</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border rounded-lg">
              <Car className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">By Car</h3>
              <p className="text-gray-600">
                Rent a car or use taxi services to explore Mbonge at your own pace
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Bus className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Public Transport</h3>
              <p className="text-gray-600">
                Regular bus services connecting major attractions and neighborhoods
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Map className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maps & Guides</h3>
              <p className="text-gray-600">
                Download our visitor maps and travel guides
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Info className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tourist Information</h3>
              <p className="text-gray-600">
                Visit our information centers for assistance
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Transportation Tips</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Taxi Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Available 24/7</li>
                  <li>Fixed rates for common routes</li>
                  <li>Book through our mobile app</li>
                  <li>Safe and reliable service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Bus Routes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Regular service from 6 AM to 10 PM</li>
                  <li>Major routes every 15 minutes</li>
                  <li>Tourist passes available</li>
                  <li>Air-conditioned vehicles</li>
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
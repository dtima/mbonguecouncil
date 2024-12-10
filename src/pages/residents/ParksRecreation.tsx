import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ParksRecreation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="Parks and Recreation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Parks & Recreation</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Parks</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Central Park</h3>
                  <p className="text-gray-600 mb-4">
                    A peaceful oasis in the heart of Mbonge, featuring walking trails,
                    picnic areas, and a children's playground.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Open daily from 6:00 AM to 6:00 PM</li>
                    <li>Free parking available</li>
                    <li>Public restrooms</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Riverside Park</h3>
                  <p className="text-gray-600 mb-4">
                    Located along the scenic river, perfect for fishing, boating,
                    and enjoying nature.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Boat rentals available</li>
                    <li>Fishing permits required</li>
                    <li>Picnic shelters</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Recreational Activities</h2>
              <div className="grid gap-6">
                <div className="border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Sports Facilities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Football fields</li>
                    <li>Basketball courts</li>
                    <li>Tennis courts</li>
                    <li>Running track</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Community Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Youth sports leagues</li>
                    <li>Fitness classes</li>
                    <li>Swimming lessons</li>
                    <li>Holiday events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
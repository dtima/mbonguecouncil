import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ThingsToDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Things to Do in Mbonge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Things to Do in Mbonge</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Natural Attractions</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Ekombe Waterfall</h3>
                  <p className="text-gray-600 mb-4">
                    A serene escape surrounded by lush greenery, perfect for nature lovers
                    and photographers.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Guided tours available</li>
                    <li>Picnic areas</li>
                    <li>Hiking trails</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Barombi Kotto Lake</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for nature enthusiasts and adventure seekers, offering
                    boat rides and fishing opportunities.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Boat rentals</li>
                    <li>Fishing spots</li>
                    <li>Lakeside restaurants</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Cultural Experiences</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Traditional Markets</h3>
                  <p className="text-gray-600 mb-4">
                    Experience local life and shop for authentic crafts and produce.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Local crafts</li>
                    <li>Fresh produce</li>
                    <li>Traditional food</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Cultural Shows</h3>
                  <p className="text-gray-600 mb-4">
                    Watch traditional dance performances and music shows.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Weekly performances</li>
                    <li>Interactive sessions</li>
                    <li>Traditional music</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Activities & Tours</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Guided Tours</h3>
                  <p className="text-gray-600 mb-4">
                    Explore Mbonge with knowledgeable local guides.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Historical tours</li>
                    <li>Nature walks</li>
                    <li>Cultural tours</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Adventure Sports</h3>
                  <p className="text-gray-600 mb-4">
                    Get your adrenaline pumping with outdoor activities.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Hiking</li>
                    <li>Mountain biking</li>
                    <li>Rock climbing</li>
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
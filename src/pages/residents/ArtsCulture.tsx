import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ArtsCulture() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
            alt="Arts and Culture in Mbonge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Arts & Culture</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Celebrate Our Diverse Culture</h2>
              <p className="text-lg text-gray-600">
                Immerse yourself in the vibrant cultural tapestry of Mbonge through our year-round events,
                festivals, and cultural programs. Our community celebrates its rich heritage while embracing
                modern artistic expressions.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4">
                    <div className="bg-cameroon-green text-white p-3 rounded-lg">
                      <span className="block text-center">JUN</span>
                      <span className="block text-2xl font-bold">15</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Annual Cultural Festival</h4>
                      <p className="text-gray-600">A celebration of traditional dance, music, and art</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-cameroon-green text-white p-3 rounded-lg">
                      <span className="block text-center">JUL</span>
                      <span className="block text-2xl font-bold">22</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Art Exhibition</h4>
                      <p className="text-gray-600">Showcasing local artists and their masterpieces</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Cultural Programs</h3>
              <div className="grid gap-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Traditional Dance Classes</h4>
                  <p className="text-gray-600">Learn the authentic dances of our region</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Music Workshops</h4>
                  <p className="text-gray-600">Experience traditional musical instruments and songs</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Craft Markets</h4>
                  <p className="text-gray-600">Shop for locally made arts and crafts</p>
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
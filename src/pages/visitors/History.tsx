import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="Historical Mbonge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">History of Mbonge</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Heritage</h2>
                <p className="text-gray-600">
                  Mbonge's rich history dates back centuries, marked by cultural diversity,
                  traditional governance, and significant historical events that have shaped
                  the region into what it is today.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">1800s</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Early settlements and traditional kingdoms</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">1900s</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Colonial period and infrastructure development</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">1960s</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Independence and local governance establishment</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">Present</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Modern development and cultural preservation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Historical Sites</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">German Bridge</h4>
                    <p className="text-gray-600">
                      A colonial-era landmark showcasing architectural brilliance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Traditional Palace</h4>
                    <p className="text-gray-600">
                      Home to the traditional authorities and cultural artifacts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">First Council Building</h4>
                    <p className="text-gray-600">
                      The original administrative center of Mbonge
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Cultural Heritage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Traditional festivals and ceremonies</li>
                  <li>Local customs and traditions</li>
                  <li>Arts and crafts heritage</li>
                  <li>Traditional governance systems</li>
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
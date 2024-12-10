import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MeetMayor = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Meet Our Mayor
                  </h1>
                  <p className="text-lg text-gray-600">
                    Our dynamic and dedicated Mayor welcomes every resident to actively participate in building a unified and prosperous Mbonge.
                  </p>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Vision for Mbonge</h2>
                    <p className="text-gray-600">
                      Under the leadership of our Mayor, the Mbonge Council strives to address the needs of its residents and develop infrastructure that supports progress and innovation.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900">Key Priorities</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Improving road networks and infrastructure</li>
                      <li>Advancing electrification projects</li>
                      <li>Supporting industrialization while preserving natural resources</li>
                      <li>Enhancing educational facilities</li>
                      <li>Strengthening community engagement</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/lovable-uploads/43369764-2dc3-4409-957a-f7466442ba0b.png"
                    alt="Mayor of Mbonge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default MeetMayor;
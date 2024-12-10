import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Building } from "lucide-react";

export default function FindBusiness() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find a Business</h1>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex gap-2">
            <Input placeholder="Search for businesses..." className="flex-1" />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="grid gap-4">
            <div className="p-4 border rounded-lg flex items-center gap-4">
              <Building className="h-8 w-8 text-gray-400" />
              <div>
                <h3 className="font-semibold">Business Directory</h3>
                <p className="text-sm text-gray-600">Browse our comprehensive list of local businesses</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
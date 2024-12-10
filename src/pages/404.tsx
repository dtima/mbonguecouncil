import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Page not found</p>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate("/")} variant="default">
            Return Home
          </Button>
          <Button onClick={() => navigate(-1)} variant="outline">
            Go Back
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
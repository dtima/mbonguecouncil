import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { MayorsCabinet } from "@/components/MayorsCabinet";
import { Footer } from "@/components/Footer";

const Cabinet = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <MayorsCabinet />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Cabinet;
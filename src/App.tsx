import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Cabinet from "./pages/Cabinet";
import MeetMayor from "./pages/MeetMayor";
import NotFound from "./pages/404";
import ArtsCulture from "./pages/residents/ArtsCulture";
import PublicSafety from "./pages/residents/PublicSafety";
import ParksRecreation from "./pages/residents/ParksRecreation";
import Directions from "./pages/residents/Directions";
import GettingAround from "./pages/visitors/GettingAround";
import History from "./pages/visitors/History";
import ThingsToDo from "./pages/visitors/ThingsToDo";
import Licenses from "./pages/business/Licenses";
import Suppliers from "./pages/business/Suppliers";
import Grants from "./pages/business/Grants";
import Zoning from "./pages/business/Zoning";
import Bids from "./pages/business/Bids";
import StartBusiness from "./pages/business/StartBusiness";
import Ceremonial from "./pages/iwantto/Ceremonial";
import FindBusiness from "./pages/iwantto/FindBusiness";
import BusinessLicense from "./pages/iwantto/BusinessLicense";
import EventsPermit from "./pages/iwantto/EventsPermit";

const App = () => (
  <ErrorBoundary>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin-dtima/*" element={<Admin />} />
            <Route path="/government/cabinet" element={<Cabinet />} />
            <Route path="/government/meet-mayor" element={<MeetMayor />} />
            
            {/* Residents Routes */}
            <Route path="/residents/arts-culture" element={<ArtsCulture />} />
            <Route path="/residents/public-safety" element={<PublicSafety />} />
            <Route path="/residents/parks-recreation" element={<ParksRecreation />} />
            <Route path="/residents/directions" element={<Directions />} />
            
            {/* Visitors Routes */}
            <Route path="/visitors/getting-around" element={<GettingAround />} />
            <Route path="/visitors/history" element={<History />} />
            <Route path="/visitors/things-to-do" element={<ThingsToDo />} />

            {/* Business Routes */}
            <Route path="/business/licenses" element={<Licenses />} />
            <Route path="/business/suppliers" element={<Suppliers />} />
            <Route path="/business/grants" element={<Grants />} />
            <Route path="/business/zoning" element={<Zoning />} />
            <Route path="/business/bids" element={<Bids />} />
            <Route path="/business/start" element={<StartBusiness />} />

            {/* I Want To Routes */}
            <Route path="/i-want-to/ceremonial" element={<Ceremonial />} />
            <Route path="/i-want-to/find-business" element={<FindBusiness />} />
            <Route path="/i-want-to/business-license" element={<BusinessLicense />} />
            <Route path="/i-want-to/events-permit" element={<EventsPermit />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </ErrorBoundary>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LifeInsurance from "./pages/LifeInsurance";
import WhyLifeInsurance from "./pages/WhyLifeInsurance";
import HowWeDiffer from "./pages/HowWeDiffer";
import AboutHDFCLife from "./pages/AboutHDFCLife";
import InsurancePlans from "./pages/InsurancePlans";
import InsuranceNews from "./pages/InsuranceNews";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          <Route path="/why-life-insurance" element={<WhyLifeInsurance />} />
          <Route path="/how-we-differ" element={<HowWeDiffer />} />
          <Route path="/about-hdfc-life" element={<AboutHDFCLife />} />
          <Route path="/insurance-plans" element={<InsurancePlans />} />
          <Route path="/insurance-news" element={<InsuranceNews />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

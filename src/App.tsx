import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import TechDossierPage from "./pages/TechDossierPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import ExperiencePage from "./pages/ExperiencePage";
import SmartBelt from "./pages/products/SmartBelt";
import TempControlJeans from "./pages/products/TempControlJeans";
import DigitalTwin from "./pages/products/DigitalTwin";
import TechnicalArchitecturePage from "./pages/TechnicalArchitecturePage";
import ContentStrategyPage from "./pages/ContentStrategyPage";
import CustomerServicePage from "./pages/CustomerServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/smart-belt" element={<SmartBelt />} />
          <Route path="/products/temp-control-jeans" element={<TempControlJeans />} />
          <Route path="/products/digital-twin" element={<DigitalTwin />} />
          <Route path="/tech-dossier" element={<TechDossierPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/technical-architecture" element={<TechnicalArchitecturePage />} />
          <Route path="/content-strategy" element={<ContentStrategyPage />} />
          <Route path="/customer-service" element={<CustomerServicePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

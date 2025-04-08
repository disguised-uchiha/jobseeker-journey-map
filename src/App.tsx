import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import JobDetail from "./pages/JobDetail";
import AboutUs from "./pages/AboutUs";
import ForCompanies from "./pages/ForCompanies";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <JobProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/for-companies" element={<ForCompanies />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </JobProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

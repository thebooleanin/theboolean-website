
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Helmet, HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Helmet>
            <title>theboolean | Tech, Automotive, and Cycling News</title>
            <meta name="description" content="The latest news, insights, and analysis on technology, automotive, and cycling. For tomorrow Today we are working." />
            <meta name="keywords" content="tech news, automotive news, cycling news, technology blog, car reviews, bike reviews" />
            <meta property="og:title" content="theboolean | Tech, Automotive, and Cycling News" />
            <meta property="og:description" content="The latest news, insights, and analysis on technology, automotive, and cycling." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://theboolean.com" />
            <meta property="og:image" content="/og-image.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="theboolean | Tech, Automotive, and Cycling News" />
            <meta name="twitter:description" content="The latest news, insights, and analysis on technology, automotive, and cycling." />
            <meta name="twitter:image" content="/og-image.png" />
          </Helmet>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;


import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="plans" element={<Plans />} />
            <Route path="heritage" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold text-slate-800">Module Giám sát Di tích</h2><p className="text-slate-600 mt-2">Tính năng đang được phát triển</p></div>} />
            <Route path="events" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold text-slate-800">Module Sự kiện Du lịch</h2><p className="text-slate-600 mt-2">Tính năng đang được phát triển</p></div>} />
            <Route path="promotion" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold text-slate-800">Module Xúc tiến Du lịch</h2><p className="text-slate-600 mt-2">Tính năng đang được phát triển</p></div>} />
            <Route path="statistics" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold text-slate-800">Module Thống kê Du khách</h2><p className="text-slate-600 mt-2">Tính năng đang được phát triển</p></div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

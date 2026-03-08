import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Locale } from "./i18n/translations";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const LocalePage = ({ locale }: { locale: Locale }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
    // Reveal body once React has rendered content
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.15s ease-in";
  }, [locale]);

  return (
    <LanguageProvider locale={locale}>
      <Index />
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default: English at root — no redirect, no flash */}
          <Route path="/" element={<LocalePage locale="en" />} />
          <Route path="/en" element={<Navigate to="/" replace />} />
          <Route path="/es" element={<LocalePage locale="es" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

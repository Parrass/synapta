
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Index from "./pages/Index";
import Assets from "./pages/Assets";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import DashboardLayout from "./components/layout/DashboardLayout";

const queryClient = new QueryClient();

const App = () => {
  // Em um app real, você verificaria a autenticação aqui
  const isAuthenticated = true;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="synapta-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/login" element={<Login />} />
              
              {/* Rotas protegidas */}
              <Route path="/dashboard" element={
                isAuthenticated ? (
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                ) : <Navigate to="/login" />
              } />
              
              <Route path="/consultas" element={
                isAuthenticated ? (
                  <DashboardLayout>
                    <div className="space-y-6">
                      <h1 className="text-3xl font-bold tracking-tight">Consultas</h1>
                      <p className="text-muted-foreground">Página de consultas em desenvolvimento</p>
                    </div>
                  </DashboardLayout>
                ) : <Navigate to="/login" />
              } />
              
              <Route path="/pacientes" element={
                isAuthenticated ? (
                  <DashboardLayout>
                    <div className="space-y-6">
                      <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>
                      <p className="text-muted-foreground">Página de pacientes em desenvolvimento</p>
                    </div>
                  </DashboardLayout>
                ) : <Navigate to="/login" />
              } />
              
              <Route path="/whatsapp" element={
                isAuthenticated ? (
                  <DashboardLayout>
                    <div className="space-y-6">
                      <h1 className="text-3xl font-bold tracking-tight">WhatsApp</h1>
                      <p className="text-muted-foreground">Integração WhatsApp em desenvolvimento</p>
                    </div>
                  </DashboardLayout>
                ) : <Navigate to="/login" />
              } />
              
              <Route path="/settings" element={
                isAuthenticated ? (
                  <DashboardLayout>
                    <div className="space-y-6">
                      <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
                      <p className="text-muted-foreground">Página de configurações em desenvolvimento</p>
                    </div>
                  </DashboardLayout>
                ) : <Navigate to="/login" />
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InvoiceAuthentication from "./pages/InvoiceAuthentication";
import NotFound from "./pages/NotFound";
import MyInvoices from "./pages/MyInvoices";
import FinancingOffers from "./pages/FinancingOffers";
import RepaymentSchedule from "./pages/RepaymentSchedule";
import PayoutLedger from "./pages/PayoutLedger";
import Documents from "./pages/Documents";
import CreditReports from "./pages/CreditReports";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import MyWallet from "./pages/MyWallet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/authentication" element={<InvoiceAuthentication />} />
          <Route path="/my-invoices" element={<MyInvoices />} />
          <Route path="/offers" element={<FinancingOffers />} />
          <Route path="/repayments" element={<RepaymentSchedule />} />
          <Route path="/ledger" element={<PayoutLedger />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/credit-reports" element={<CreditReports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/wallet" element={<MyWallet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import Layout from '@/components/dashboard/Layout';
import { Button } from '@/components/ui/button';
import WalletMetricCard from '@/components/wallet/WalletMetricCard';
import TransactionTable from '@/components/wallet/TransactionTable';
import BankAccountPanel from '@/components/wallet/BankAccountPanel';
import { Wallet, ArrowDownToLine, ArrowUpToLine } from 'lucide-react';

const MyWallet = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Wallet</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <ArrowUpToLine className="mr-2 h-4 w-4" />
              Withdraw
            </Button>
            <Button>
              <ArrowDownToLine className="mr-2 h-4 w-4" />
              Top Up
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <WalletMetricCard
            title="Wallet Balance"
            amount="₹2,35,000"
            description="Available for withdrawal or auto-repayment"
          />
          <WalletMetricCard
            title="Total Financed Received"
            amount="₹12,30,000"
            description="Against invoices uploaded by mill"
          />
          <WalletMetricCard
            title="Repayments Made"
            amount="₹5,60,000"
            description="To investors, as a buyer"
          />
          <WalletMetricCard
            title="Upcoming Repayments"
            amount="₹1,75,000"
            description="Due by Apr 30, 2025 (Auto-debit enabled)"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold">Transaction History</h2>
            <TransactionTable />
          </div>
          <div>
            <BankAccountPanel />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyWallet;

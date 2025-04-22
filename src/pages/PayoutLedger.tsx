
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, ArrowUpIcon, DownloadIcon } from 'lucide-react';

const PayoutLedger = () => {
  const transactions = [
    { date: '2025-04-20', type: 'Financed', invoiceId: 'INV-2025-003', counterparty: 'Global Traders', amount: '₹204,000', mode: 'Bank Transfer', direction: 'in' },
    { date: '2025-04-18', type: 'Repaid', invoiceId: 'INV-2024-076', counterparty: 'Rural Producers Network', amount: '₹105,000', mode: 'Auto-debit', direction: 'out' },
    { date: '2025-04-15', type: 'Fee', invoiceId: 'INV-2025-003', counterparty: 'Platform', amount: '₹2,500', mode: 'Deducted', direction: 'out' },
    { date: '2025-04-12', type: 'Repaid', invoiceId: 'INV-2024-065', counterparty: 'Agri Women Collective', amount: '₹95,000', mode: 'UPI', direction: 'out' },
    { date: '2025-04-05', type: 'Financed', invoiceId: 'INV-2025-002', counterparty: 'XYZ Corporation', amount: '₹80,000', mode: 'Bank Transfer', direction: 'in' },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Payout Ledger</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <DownloadIcon className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Financed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₹284,000</div>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Repaid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">₹200,000</div>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Net Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">₹84,000</div>
              <p className="text-sm text-gray-500">Current Balance</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction Ledger</CardTitle>
            <CardDescription>All financial transactions related to invoice financing</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Counterparty</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.invoiceId}</TableCell>
                    <TableCell>{transaction.counterparty}</TableCell>
                    <TableCell className="flex items-center">
                      {transaction.direction === 'in' ? (
                        <ArrowDownIcon className="h-4 w-4 mr-1 text-green-600" />
                      ) : (
                        <ArrowUpIcon className="h-4 w-4 mr-1 text-red-600" />
                      )}
                      {transaction.amount}
                    </TableCell>
                    <TableCell>{transaction.mode}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PayoutLedger;

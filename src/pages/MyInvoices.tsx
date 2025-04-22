
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const MyInvoices = () => {
  const sampleInvoices = [
    { id: 'INV-2025-001', buyer: 'ABC Industries', date: '2025-04-01', amount: '₹120,000', status: 'Under Review', maturity: '2025-06-01' },
    { id: 'INV-2025-002', buyer: 'XYZ Corporation', date: '2025-04-05', amount: '₹85,000', status: 'Bidding', maturity: '2025-06-05' },
    { id: 'INV-2025-003', buyer: 'Global Traders', date: '2025-04-10', amount: '₹210,000', status: 'Financed', maturity: '2025-06-10' },
    { id: 'INV-2025-004', buyer: 'Local Processors', date: '2025-04-15', amount: '₹95,000', status: 'Rejected', maturity: '2025-06-15' },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Invoices</h1>
          <Button>Upload New Invoice</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Invoice for Financing</CardTitle>
            <CardDescription>Fill in the invoice details to submit for financing</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyer">Buyer Name</Label>
                <Input id="buyer" placeholder="Enter buyer name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input id="invoiceNumber" placeholder="Enter invoice number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Invoice Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="terms">Payment Terms (Days)</Label>
                <Input id="terms" type="number" placeholder="e.g. 45" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="upload">Upload Invoice (PDF/Image)</Label>
                <Input id="upload" type="file" />
              </div>
              <div className="col-span-2">
                <Button className="mt-4 w-full">Submit for Financing</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Invoices</CardTitle>
            <CardDescription>Track the status of your submitted invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Maturity Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.buyer}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.maturity}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View Details</Button>
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

export default MyInvoices;

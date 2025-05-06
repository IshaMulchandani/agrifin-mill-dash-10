
import React, { useState } from 'react';
import Layout from '../components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Calendar, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ApplyForFinancing = () => {
  const [date, setDate] = useState<Date>();
  
  // Dummy data for uploaded invoices
  const uploadedInvoices = [
    {
      id: '1',
      date: new Date(2025, 4, 1),
      buyer: 'Acme Corp',
      amount: 5000,
      paymentTerms: 'Net 30',
      status: 'Approved'
    },
    {
      id: '2',
      date: new Date(2025, 4, 2),
      buyer: 'XYZ Industries',
      amount: 3500,
      paymentTerms: 'Net 45',
      status: 'Pending'
    },
    {
      id: '3',
      date: new Date(2025, 4, 3),
      buyer: 'Global Enterprises',
      amount: 7200,
      paymentTerms: 'Net 60',
      status: 'Approved'
    },
    {
      id: '4',
      date: new Date(2025, 4, 5),
      buyer: 'Local Business Inc.',
      amount: 2100,
      paymentTerms: 'Net 15',
      status: 'Pending'
    }
  ];
  
  // Format amount to INR
  const formatAmountToINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Apply for Financing</h1>
          <p className="text-muted-foreground">Submit an invoice for financing approval</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Details</CardTitle>
            <CardDescription>
              Enter your invoice information for financing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="buyer">Buyer Name</Label>
                  <Input id="buyer" placeholder="Enter buyer name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input id="invoiceNumber" placeholder="Enter invoice number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="invoiceDate">Invoice Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="invoiceDate"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (INR)</Label>
                  <Input id="amount" placeholder="Enter amount" type="number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="paymentTerms">Payment Terms</Label>
                  <Input id="paymentTerms" placeholder="e.g., Net 30, Net 45" />
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <Label>Upload Invoice</Label>
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg border-gray-300 bg-gray-50">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Drag and drop your invoice here</p>
                  <p className="text-xs text-gray-500 mb-4">Supports PDF, JPG, PNG formats</p>
                  <Button>Browse Files</Button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">Submit for Financing</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Invoices</CardTitle>
            <CardDescription>
              Review your previously uploaded invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice Date</TableHead>
                  <TableHead>Buyer Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Terms</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploadedInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>{format(invoice.date, "MMM d, yyyy")}</TableCell>
                    <TableCell>{invoice.buyer}</TableCell>
                    <TableCell>{formatAmountToINR(invoice.amount)}</TableCell>
                    <TableCell>{invoice.paymentTerms}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        invoice.status === "Approved" 
                          ? "bg-status-approved bg-opacity-10 text-status-approved" 
                          : "bg-status-pending bg-opacity-10 text-status-pending"
                      }`}>
                        {invoice.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
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

export default ApplyForFinancing;

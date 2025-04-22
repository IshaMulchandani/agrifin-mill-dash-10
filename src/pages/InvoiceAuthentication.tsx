
import React, { useState } from 'react';
import Layout from '@/components/dashboard/Layout';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Search, Filter, FileText, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data
const invoices = [
  {
    id: 'INV-2025-0415',
    seller: 'Sunrise Traders',
    amount: 120000,
    date: '2025-04-15',
    maturity: '2025-05-30',
    status: 'pending',
  },
  {
    id: 'INV-2025-0414',
    seller: 'Green Harvest FPO',
    amount: 85000,
    date: '2025-04-14',
    maturity: '2025-06-14',
    status: 'pending',
  },
  {
    id: 'INV-2025-0410',
    seller: 'Farmtech Suppliers',
    amount: 250000,
    date: '2025-04-10',
    maturity: '2025-05-25',
    status: 'approved',
  },
  {
    id: 'INV-2025-0405',
    seller: 'AgriGrow Cooperative',
    amount: 175000,
    date: '2025-04-05',
    maturity: '2025-05-20',
    status: 'rejected',
  },
  {
    id: 'INV-2025-0402',
    seller: 'Rural Producers Ltd',
    amount: 320000,
    date: '2025-04-02',
    maturity: '2025-06-02',
    status: 'approved',
  },
];

const InvoiceAuthentication = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [previewInvoice, setPreviewInvoice] = useState<any | null>(null);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  const handleSelectInvoice = (invoiceId: string) => {
    setSelected((prev) =>
      prev.includes(invoiceId)
        ? prev.filter((id) => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === invoices.length) {
      setSelected([]);
    } else {
      setSelected(invoices.map((invoice) => invoice.id));
    }
  };

  const handlePreviewInvoice = (invoice: any) => {
    setPreviewInvoice(invoice);
  };

  const handleBulkApprove = () => {
    setShowApproveDialog(true);
  };

  const confirmApprove = () => {
    // Process approval
    setShowApproveDialog(false);
    setSelected([]);
  };

  const handleReject = (invoice: any) => {
    setPreviewInvoice(invoice);
    setShowRejectDialog(true);
  };

  const confirmReject = () => {
    // Process rejection
    setShowRejectDialog(false);
    setPreviewInvoice(null);
    setRejectReason('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Invoice Authentication</h1>
        <p className="text-gray-500">Manage invoices where you are listed as the buyer</p>
      </div>

      <div className="bg-white rounded-lg border mb-6">
        <div className="p-4 border-b flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center">
            <div className="relative max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search invoices..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon" className="ml-2">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div>
            {selected.length > 0 && (
              <Button 
                onClick={handleBulkApprove} 
                className="bg-agricred-green hover:bg-agricred-green-dark"
              >
                <Check className="mr-2 h-4 w-4" /> Approve Selected ({selected.length})
              </Button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selected.length === invoices.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Invoice Date</TableHead>
                <TableHead>Maturity Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow 
                  key={invoice.id}
                  onClick={() => handlePreviewInvoice(invoice)}
                  className={cn("cursor-pointer", previewInvoice?.id === invoice.id && "bg-blue-50")}
                >
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selected.includes(invoice.id)}
                      onCheckedChange={() => handleSelectInvoice(invoice.id)}
                      disabled={invoice.status !== 'pending'}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.seller}</TableCell>
                  <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                  <TableCell>{formatDate(invoice.date)}</TableCell>
                  <TableCell>{formatDate(invoice.maturity)}</TableCell>
                  <TableCell>
                    <StatusBadge status={invoice.status as any} />
                  </TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handlePreviewInvoice(invoice)}
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                      {invoice.status === 'pending' && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                            onClick={() => handleBulkApprove()}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleReject(invoice)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Invoice Preview Panel */}
      {previewInvoice && (
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Invoice Preview: {previewInvoice.id}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Seller</h3>
                  <p className="font-medium">{previewInvoice.seller}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Amount</h3>
                  <p className="font-medium">{formatCurrency(previewInvoice.amount)}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Invoice Date</h3>
                  <p>{formatDate(previewInvoice.date)}</p>
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                  <StatusBadge status={previewInvoice.status as any} />
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Maturity Date</h3>
                  <p>{formatDate(previewInvoice.maturity)}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Terms</h3>
                  <p>Net 45 days</p>
                </div>
              </div>
            </div>

            {/* Placeholder for invoice document */}
            <div className="border border-dashed rounded-lg p-8 flex justify-center items-center bg-gray-50">
              <div className="text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Invoice Document Preview</p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Full Document
                </Button>
              </div>
            </div>

            {previewInvoice.status === 'pending' && (
              <div className="mt-6 flex space-x-3">
                <Button 
                  onClick={() => handleBulkApprove()}
                  className="bg-agricred-green hover:bg-agricred-green-dark"
                >
                  <Check className="mr-2 h-4 w-4" /> Approve Invoice
                </Button>
                <Button 
                  variant="outline"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => handleReject(previewInvoice)}
                >
                  <X className="mr-2 h-4 w-4" /> Reject
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Approve Dialog */}
      <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve {selected.length > 1 ? 'Invoices' : 'Invoice'}</DialogTitle>
            <DialogDescription>
              You are about to approve {selected.length > 1 ? `${selected.length} invoices` : 'this invoice'}. 
              This will confirm that you have received the goods or services and agree to pay on the maturity date.
            </DialogDescription>
          </DialogHeader>
          <div className="py-3">
            <p className="text-sm text-gray-500 mb-4">
              By approving, you are entering into a legally binding agreement to pay the invoice amount on the maturity date.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApproveDialog(false)}>Cancel</Button>
            <Button 
              onClick={confirmApprove}
              className="bg-agricred-green hover:bg-agricred-green-dark"
            >
              Confirm Approval
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Invoice</DialogTitle>
            <DialogDescription>
              Please provide a reason why you are rejecting this invoice.
            </DialogDescription>
          </DialogHeader>
          <div className="py-3">
            <label className="text-sm font-medium">Reason for rejection</label>
            <Input
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="e.g., Goods not received, incorrect amount, etc."
              className="mt-1"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectDialog(false)}>Cancel</Button>
            <Button 
              onClick={confirmReject}
              variant="destructive"
            >
              Confirm Rejection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default InvoiceAuthentication;

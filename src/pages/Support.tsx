
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const Support = () => {
  const tickets = [
    { 
      id: 'TKT-2025-001',
      category: 'Invoice Dispute',
      date: '2025-04-10',
      subject: 'Invoice amount discrepancy',
      status: 'Open'
    },
    { 
      id: 'TKT-2025-002',
      category: 'Platform Bug',
      date: '2025-04-05',
      subject: 'Unable to upload invoice images',
      status: 'In Review'
    },
    { 
      id: 'TKT-2025-003',
      category: 'Repayment Error',
      date: '2025-03-25',
      subject: 'Payment made but not reflected',
      status: 'Resolved'
    }
  ];

  const faqs = [
    {
      question: 'How do I submit an invoice for financing?',
      answer: 'Navigate to the "My Invoices" section, fill in the invoice details in the form, upload a copy of the invoice, and click "Submit for Financing".'
    },
    {
      question: 'What happens after I authenticate an invoice as a buyer?',
      answer: 'After authentication, a legally binding contract is created. The seller can then proceed with getting this invoice financed. You will be responsible for repaying the financed amount on the due date.'
    },
    {
      question: 'How do repayments work?',
      answer: 'Repayments can be made through auto-debit (if set up), UPI, or bank transfer. You\'ll receive reminders before due dates, and all successful payments are recorded in your payout ledger.'
    },
    {
      question: 'What documents are needed for KYC?',
      answer: 'Business documents (GST Certificate, CIN/Registration Certificate, PAN Card) and authorized signatory documents (ID proof and address proof) are required for KYC verification.'
    },
    {
      question: 'How is my credit tier calculated?',
      answer: 'Your credit tier is based on repayment history, business volume, years in operation, and financial health indicators. Maintaining on-time repayments is the most significant factor.'
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Support & Help Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Our support team is available 24/7</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Call Support</div>
                  <div className="text-sm text-gray-500">+91 1800-123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Email Support</div>
                  <div className="text-sm text-gray-500">support@agricred.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Live Chat</div>
                  <div className="text-sm text-gray-500">Available 9 AM - 6 PM</div>
                </div>
              </div>
              <Button className="mt-2">Start Live Chat</Button>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Raise a Support Ticket</CardTitle>
              <CardDescription>We'll respond within 2 business hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invoice-dispute">Invoice Dispute</SelectItem>
                      <SelectItem value="repayment-error">Repayment Error</SelectItem>
                      <SelectItem value="platform-bug">Platform Bug</SelectItem>
                      <SelectItem value="kyc-verification">KYC Verification</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="related-invoice">Related Invoice (Optional)</Label>
                  <Select>
                    <SelectTrigger id="related-invoice">
                      <SelectValue placeholder="Select invoice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inv-2025-001">INV-2025-001</SelectItem>
                      <SelectItem value="inv-2025-002">INV-2025-002</SelectItem>
                      <SelectItem value="inv-2025-003">INV-2025-003</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of the issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Provide details of your issue or question" rows={4} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachment (Optional)</Label>
                  <Input id="attachment" type="file" />
                </div>
                <Button type="submit">Submit Ticket</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>My Support Tickets</CardTitle>
            <CardDescription>Track the status of your support requests</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{ticket.date}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          ticket.status === 'Open' ? 'bg-blue-500' :
                          ticket.status === 'In Review' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Support;

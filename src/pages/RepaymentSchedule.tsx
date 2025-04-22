
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const RepaymentSchedule = () => {
  const repayments = [
    { id: 'INV-2024-112', seller: 'FPO Farmers Collective', amount: '₹120,000', dueDate: '2025-05-01', status: 'Unpaid', daysLeft: 9 },
    { id: 'INV-2024-098', seller: 'Organic Growers Assoc.', amount: '₹85,000', dueDate: '2025-04-25', status: 'Unpaid', daysLeft: 3 },
    { id: 'INV-2024-087', seller: 'Local Harvest Co-op', amount: '₹65,500', dueDate: '2025-04-20', status: 'Overdue', daysLeft: -2 },
    { id: 'INV-2024-076', seller: 'Rural Producers Network', amount: '₹105,000', dueDate: '2025-04-15', status: 'Paid', daysLeft: null },
    { id: 'INV-2024-065', seller: 'Agri Women Collective', amount: '₹95,000', dueDate: '2025-04-10', status: 'Paid', daysLeft: null },
  ];

  const getStatusBadge = (status: string, daysLeft: number | null) => {
    if (status === 'Paid') {
      return <Badge className="bg-green-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Paid</Badge>;
    }
    if (status === 'Overdue') {
      return <Badge variant="destructive" className="flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Overdue</Badge>;
    }
    if (daysLeft && daysLeft < 5) {
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300 flex items-center gap-1"><Clock className="w-3 h-3" /> Due Soon</Badge>;
    }
    return <Badge variant="outline" className="flex items-center gap-1"><Clock className="w-3 h-3" /> Upcoming</Badge>;
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Repayment Schedule</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Repayments</CardTitle>
            <CardDescription>Your upcoming invoice repayment obligations</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {repayments.map((repayment) => (
                  <TableRow key={repayment.id}>
                    <TableCell className="font-medium">{repayment.id}</TableCell>
                    <TableCell>{repayment.seller}</TableCell>
                    <TableCell>{repayment.amount}</TableCell>
                    <TableCell>{repayment.dueDate}</TableCell>
                    <TableCell>
                      {getStatusBadge(repayment.status, repayment.daysLeft)}
                    </TableCell>
                    <TableCell>
                      {repayment.status !== 'Paid' && (
                        <div className="flex gap-2">
                          <Button size="sm">Pay Now</Button>
                          <Button size="sm" variant="outline">Raise Issue</Button>
                        </div>
                      )}
                      {repayment.status === 'Paid' && (
                        <Button size="sm" variant="outline">View Receipt</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Repayment Methods</CardTitle>
            <CardDescription>Your configured repayment options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Auto-Debit</h3>
                <p className="text-sm text-gray-600 mb-4">HDFC Bank - XXXX5678</p>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Active</Badge>
              </div>
              <div className="flex-1 border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">UPI</h3>
                <p className="text-sm text-gray-600 mb-4">millprocessing@okhdfcbank</p>
                <Button variant="outline" size="sm">Make Default</Button>
              </div>
              <div className="flex-1 border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Bank Transfer</h3>
                <p className="text-sm text-gray-600 mb-1">A/C: 987654321012</p>
                <p className="text-sm text-gray-600 mb-4">IFSC: HDFC0001234</p>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RepaymentSchedule;

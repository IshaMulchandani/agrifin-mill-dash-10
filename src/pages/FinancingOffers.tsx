
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const FinancingOffers = () => {
  const offers = [
    { 
      id: 'INV-2025-002', 
      buyer: 'XYZ Corporation', 
      amount: '₹85,000', 
      bidCount: 3, 
      timeLeft: '23 hours', 
      bids: [
        { investor: 'AgriFinance Ltd', rate: '12.5%', amount: '₹82,000', fees: '₹1,500', net: '₹80,500', repayment: '2025-06-05' },
        { investor: 'Rural Investors', rate: '13.2%', amount: '₹81,500', fees: '₹1,500', net: '₹80,000', repayment: '2025-06-05' },
        { investor: 'Growth Capital', rate: '11.8%', amount: '₹83,000', fees: '₹1,700', net: '₹81,300', repayment: '2025-06-05' },
      ]
    },
    { 
      id: 'INV-2025-005', 
      buyer: 'Agri Processors', 
      amount: '₹150,000', 
      bidCount: 2, 
      timeLeft: '12 hours',
      bids: [
        { investor: 'AgriFinance Ltd', rate: '13.0%', amount: '₹145,000', fees: '₹2,500', net: '₹142,500', repayment: '2025-06-15' },
        { investor: 'Rural Investors', rate: '13.5%', amount: '₹144,000', fees: '₹2,400', net: '₹141,600', repayment: '2025-06-15' },
      ] 
    },
    { 
      id: 'INV-2025-007', 
      buyer: 'Farm Fresh Ltd', 
      amount: '₹200,000', 
      bidCount: 1, 
      timeLeft: '5 hours',
      bids: [
        { investor: 'Growth Capital', rate: '12.2%', amount: '₹195,000', fees: '₹3,000', net: '₹192,000', repayment: '2025-06-20' },
      ]
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Financing Offers</h1>
        <Card>
          <CardHeader>
            <CardTitle>Active Financing Offers</CardTitle>
            <CardDescription>Review and accept investor bids on your invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Bid Count</TableHead>
                  <TableHead>Time Left</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {offers.map((offer) => (
                  <TableRow key={offer.id}>
                    <TableCell className="font-medium">{offer.id}</TableCell>
                    <TableCell>{offer.buyer}</TableCell>
                    <TableCell>{offer.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{offer.bidCount}</Badge>
                    </TableCell>
                    <TableCell>{offer.timeLeft}</TableCell>
                    <TableCell>
                      <Button size="sm">View Bids</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recently Financed</CardTitle>
            <CardDescription>Your recently accepted financing offers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Financed Amount</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Investor</TableHead>
                  <TableHead>Repayment Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV-2025-003</TableCell>
                  <TableCell>Global Traders</TableCell>
                  <TableCell>₹204,000</TableCell>
                  <TableCell>11.5%</TableCell>
                  <TableCell>AgriFinance Ltd</TableCell>
                  <TableCell>2025-06-10</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500">Disbursed</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FinancingOffers;

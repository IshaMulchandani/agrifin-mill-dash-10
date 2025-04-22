
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Download, Eye } from 'lucide-react';

const Documents = () => {
  const buyerDocuments = [
    { type: 'Invoice Agreement', counterparty: 'FPO Farmers Collective', invoiceId: 'INV-2024-112', date: '2025-03-15', signatureStatus: 'Complete' },
    { type: 'Invoice Agreement', counterparty: 'Organic Growers Assoc.', invoiceId: 'INV-2024-098', date: '2025-03-10', signatureStatus: 'Complete' },
    { type: 'Invoice Agreement', counterparty: 'Local Harvest Co-op', invoiceId: 'INV-2024-087', date: '2025-03-05', signatureStatus: 'Complete' },
    { type: 'Invoice Agreement', counterparty: 'Rural Producers Network', invoiceId: 'INV-2024-076', date: '2025-02-28', signatureStatus: 'Complete' },
    { type: 'Invoice Agreement', counterparty: 'Agri Women Collective', invoiceId: 'INV-2024-065', date: '2025-02-20', signatureStatus: 'Complete' },
  ];

  const sellerDocuments = [
    { type: 'Financing Agreement', counterparty: 'AgriFinance Ltd', invoiceId: 'INV-2025-003', date: '2025-04-05', signatureStatus: 'Complete' },
    { type: 'Financing Agreement', counterparty: 'Rural Investors', invoiceId: 'INV-2025-002', date: '2025-03-25', signatureStatus: 'Complete' },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Documents & Digital Contracts</h1>
        
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="buyer">
              <TabsList className="mb-4">
                <TabsTrigger value="buyer">Buyer-Side Agreements</TabsTrigger>
                <TabsTrigger value="seller">Seller-Side Agreements</TabsTrigger>
              </TabsList>
              <TabsContent value="buyer">
                <div className="mb-4">
                  <CardDescription>Contracts for invoices where you are the buyer</CardDescription>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Type</TableHead>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Signature Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {buyerDocuments.map((doc, index) => (
                      <TableRow key={index}>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.counterparty}</TableCell>
                        <TableCell>{doc.invoiceId}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> {doc.signatureStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Eye className="h-4 w-4" /> View
                            </Button>
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Download className="h-4 w-4" /> Download
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="seller">
                <div className="mb-4">
                  <CardDescription>Contracts for invoices where you requested financing</CardDescription>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Type</TableHead>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Signature Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sellerDocuments.map((doc, index) => (
                      <TableRow key={index}>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.counterparty}</TableCell>
                        <TableCell>{doc.invoiceId}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> {doc.signatureStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Eye className="h-4 w-4" /> View
                            </Button>
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Download className="h-4 w-4" /> Download
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Platform Agreements</CardTitle>
            <CardDescription>Your agreements with the AgriCred platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Terms of Service</TableCell>
                  <TableCell>2025-01-15</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Accepted
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" /> View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Privacy Policy</TableCell>
                  <TableCell>2025-01-15</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Accepted
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" /> View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Auto-Debit Mandate</TableCell>
                  <TableCell>2025-01-20</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Active
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" /> View
                    </Button>
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

export default Documents;

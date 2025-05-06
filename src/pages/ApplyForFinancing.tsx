
import React from 'react';
import Layout from '../components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const ApplyForFinancing = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Apply for Financing</h1>
          <p className="text-muted-foreground">Submit an invoice for financing approval</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upload Invoice</CardTitle>
              <CardDescription>
                Upload an invoice to apply for financing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg border-gray-300 bg-gray-50">
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">Drag and drop your invoice here</p>
                <p className="text-xs text-gray-500 mb-4">Supports PDF, JPG, PNG formats</p>
                <Button>Browse Files</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financing Options</CardTitle>
              <CardDescription>
                Learn about our financing options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Quick Financing</h3>
                <p className="text-sm text-gray-600">Get approval within 24 hours with our expedited process</p>
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Flexible Terms</h3>
                <p className="text-sm text-gray-600">Choose from various repayment schedules that suit your business</p>
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Competitive Rates</h3>
                <p className="text-sm text-gray-600">Enjoy industry-leading rates on all approved invoices</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyForFinancing;


import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, BarChart, LineChart as LucideLineChart } from 'lucide-react';
import { 
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Line as RechartsLine,
  LineChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis
} from 'recharts';

const CreditReports = () => {
  // Sample data for charts
  const repaymentData = [
    { month: 'Jan', onTime: 4, late: 0 },
    { month: 'Feb', onTime: 3, late: 1 },
    { month: 'Mar', onTime: 5, late: 0 },
    { month: 'Apr', onTime: 4, late: 0 },
    { month: 'May', onTime: 5, late: 1 },
    { month: 'Jun', onTime: 6, late: 0 },
    { month: 'Jul', onTime: 5, late: 0 },
    { month: 'Aug', onTime: 7, late: 0 },
    { month: 'Sep', onTime: 6, late: 1 },
    { month: 'Oct', onTime: 8, late: 0 },
    { month: 'Nov', onTime: 7, late: 0 },
    { month: 'Dec', onTime: 5, late: 0 },
  ];
  
  const invoiceVolumeData = [
    { month: 'Jan', count: 4 },
    { month: 'Feb', count: 5 },
    { month: 'Mar', count: 5 },
    { month: 'Apr', count: 6 },
    { month: 'May', count: 7 },
    { month: 'Jun', count: 8 },
    { month: 'Jul', count: 6 },
    { month: 'Aug', count: 9 },
    { month: 'Sep', count: 8 },
    { month: 'Oct', count: 10 },
    { month: 'Nov', count: 9 },
    { month: 'Dec', count: 7 },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Creditworthiness Reports</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Credit Tier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <Badge className="text-3xl p-4 bg-green-500">A</Badge>
                <p className="mt-2 text-sm text-gray-500">Good Risk Profile</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Avg. Repayment Delay</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold">2 days</div>
                <p className="text-sm text-gray-500">Last 12 months</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Defaulted Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold">0</div>
                <p className="text-sm text-gray-500">All time</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Repayment Timeliness</CardTitle>
            <CardDescription>Last 12 months performance</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={repaymentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="onTime" name="On Time" fill="#22c55e" />
                <Bar dataKey="late" name="Late" fill="#f59e0b" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Invoices Financed Over Time</CardTitle>
            <CardDescription>Growth in financing activity</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={invoiceVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <RechartsLine type="monotone" dataKey="count" name="Invoice Count" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Investor Ratings</CardTitle>
            <CardDescription>How investors rate your business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <div className="text-3xl font-bold">4.6/5</div>
              <div className="flex items-center gap-1 text-yellow-500 text-2xl mt-2">
                ★★★★★
              </div>
              <p className="text-sm text-gray-500 mt-1">Based on 14 investor reviews</p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Tips to Improve Your Score</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Maintain on-time repayments for all invoices</li>
                <li>Increase invoice volumes to demonstrate consistent business</li>
                <li>Provide complete and accurate documentation</li>
                <li>Build relationships with recurring buyers</li>
                <li>Complete your business profile with all certifications</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreditReports;

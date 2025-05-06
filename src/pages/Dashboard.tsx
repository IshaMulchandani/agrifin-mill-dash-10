
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import ActionCard from '@/components/dashboard/ActionCard';
import ChartCard from '@/components/dashboard/ChartCard';
import { FileCheck, Upload, Wallet, Calendar, AlertTriangle, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  // Sample data for charts
  const barChartData = [
    { name: 'Jan', value: 5, value2: 3 },
    { name: 'Feb', value: 7, value2: 4 },
    { name: 'Mar', value: 8, value2: 6 },
    { name: 'Apr', value: 12, value2: 8 },
    { name: 'May', value: 10, value2: 9 },
    { name: 'Jun', value: 15, value2: 7 },
  ];

  const lineChartData = [
    { name: 'Jan', value: 100000 },
    { name: 'Feb', value: 150000 },
    { name: 'Mar', value: 200000 },
    { name: 'Apr', value: 180000 },
    { name: 'May', value: 220000 },
    { name: 'Jun', value: 300000 },
  ];

  const pieChartData = [
    { name: 'Approved', value: 65 },
    { name: 'Rejected', value: 10 },
    { name: 'Financed', value: 20 },
    { name: 'Expired', value: 5 },
  ];
  
  // Payment schedule data (first 3 entries from RepaymentSchedule)
  const paymentSchedulePreview = [
    { id: 'INV-2024-112', seller: 'FPO Farmers Collective', amount: '₹120,000', dueDate: '2025-05-01', status: 'Unpaid', daysLeft: 9 },
    { id: 'INV-2024-098', seller: 'Organic Growers Assoc.', amount: '₹85,000', dueDate: '2025-04-25', status: 'Unpaid', daysLeft: 3 },
    { id: 'INV-2024-087', seller: 'Local Harvest Co-op', amount: '₹65,500', dueDate: '2025-04-20', status: 'Overdue', daysLeft: -2 },
  ];
  
  // Status badge helper function (copied from RepaymentSchedule)
  const getStatusBadge = (status: string, daysLeft: number | null) => {
    if (status === 'Paid') {
      return <Badge className="bg-green-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Paid</Badge>;
    }
    if (status === 'Overdue') {
      return <Badge variant="destructive" className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Overdue</Badge>;
    }
    if (daysLeft && daysLeft < 5) {
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300 flex items-center gap-1"><Clock className="w-3 h-3" /> Due Soon</Badge>;
    }
    return <Badge variant="outline" className="flex items-center gap-1"><Clock className="w-3 h-3" /> Upcoming</Badge>;
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500">Welcome back to your AgriCred Mill Dashboard</p>
        </div>
        <div>
          <Button asChild>
            <Link to="/apply-for-financing" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload New Invoice
            </Link>
          </Button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <MetricCard 
          title="Invoices Raised on Me" 
          value="6"
          subtitle="Pending: 2" 
          icon={<FileCheck className="h-6 w-6" />} 
        />
        <MetricCard 
          title="Invoices Uploaded by Me" 
          value="9" 
          subtitle="Financed: 7"
          icon={<Upload className="h-6 w-6" />} 
        />
        <MetricCard 
          title="Total Amount Financed" 
          value="₹12,30,000" 
          icon={<Wallet className="h-6 w-6" />} 
        />
        <MetricCard 
          title="Upcoming Payments" 
          value="₹3,60,000" 
          subtitle="in next 7 days"
          badgeText="Due Soon"
          badgeColor="bg-agricred-yellow-light text-agricred-yellow-dark"
          icon={<Calendar className="h-6 w-6" />} 
        />
        <MetricCard 
          title="Credit Tier" 
          value="A" 
          subtitle="Good Risk Profile"
          badgeText="Good"
          badgeColor="bg-agricred-green-light text-agricred-green-dark"
        />
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <ActionCard 
          icon={<FileCheck className="h-5 w-5" />}
          title="Invoice Authentication Pending"
          description="2 invoices need your approval"
          actionText="Review Now"
          onClick={() => {}} // Navigate to authentication page
          variant="warning"
        />
        <ActionCard 
          icon={<Calendar className="h-5 w-5" />}
          title="Upcoming Payment"
          description="₹1,20,000 due in 3 days"
          actionText="View Details"
          onClick={() => {}} // Navigate to repayments page
          variant="warning"
        />
        <ActionCard 
          icon={<Bell className="h-5 w-5" />}
          title="New Financing Offer"
          description="1 offer received on invoice INV-2025-0410"
          actionText="View Offer"
          onClick={() => {}} // Navigate to offers page
          variant="success"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard 
          title="Invoice Volumes (Last 6 Months)" 
          type="bar" 
          data={barChartData} 
        />
        <ChartCard 
          title="Financing History (₹)" 
          type="line" 
          data={lineChartData} 
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard 
          title="Invoice Outcomes" 
          type="pie" 
          data={pieChartData} 
          className="lg:col-span-1"
        />
        <div className="bg-white p-6 rounded-lg border lg:col-span-2">
          <h3 className="font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center border-b pb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <FileCheck className="h-4 w-4 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm">Invoice <span className="font-medium">INV-2025-0415</span> approved</p>
                <p className="text-xs text-gray-500">Today at 10:30 AM</p>
              </div>
            </div>
            <div className="flex items-center border-b pb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Wallet className="h-4 w-4 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm">Received <span className="font-medium">₹2,50,000</span> for invoice INV-2025-0408</p>
                <p className="text-xs text-gray-500">Yesterday at 3:15 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-full">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm">New invoice received from <span className="font-medium">Sunrise Traders</span></p>
                <p className="text-xs text-gray-500">April 20, 2025 at 11:45 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Schedule Preview */}
      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Schedule</CardTitle>
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentSchedulePreview.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.seller}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{payment.dueDate}</TableCell>
                    <TableCell>
                      {getStatusBadge(payment.status, payment.daysLeft)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4">
              <Link to="/repayments" className="text-blue-600 hover:text-blue-800 underline flex items-center">
                See More... <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;

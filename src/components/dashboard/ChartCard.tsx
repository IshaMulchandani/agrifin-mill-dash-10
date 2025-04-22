
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bar, 
  BarChart as RechartsBarChart, 
  Line, 
  LineChart as RechartsLineChart,
  Pie, 
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

interface ChartCardProps {
  title: string;
  type: 'bar' | 'line' | 'pie';
  data: any[];
  className?: string;
  height?: number;
}

const ChartCard = ({
  title,
  type,
  data,
  className,
  height = 250,
}: ChartCardProps) => {
  // Colors for pie chart
  const COLORS = ['#4CAF50', '#2196F3', '#FFC107', '#F44336', '#9C27B0'];
  
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4CAF50" />
              {data[0] && data[0].value2 && <Bar dataKey="value2" fill="#2196F3" />}
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#4CAF50" activeDot={{ r: 8 }} />
              {data[0] && data[0].value2 && 
                <Line type="monotone" dataKey="value2" stroke="#2196F3" />
              }
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartsPieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-0">
        <CardTitle className="text-md">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {renderChart()}
      </CardContent>
    </Card>
  );
};

export default ChartCard;

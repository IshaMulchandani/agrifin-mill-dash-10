
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  badgeText?: string;
  badgeColor?: string;
}

const MetricCard = ({
  title,
  value,
  subtitle,
  icon,
  className,
  badgeText,
  badgeColor = 'bg-agricred-green-light text-agricred-green-dark',
}: MetricCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="flex items-center mt-1">
              <h3 className="text-2xl font-bold">{value}</h3>
              {badgeText && (
                <span className={cn("ml-2 text-xs font-medium px-2 py-0.5 rounded", badgeColor)}>
                  {badgeText}
                </span>
              )}
            </div>
            {subtitle && <p className="mt-1 text-xs text-gray-500">{subtitle}</p>}
          </div>
          {icon && <div className="text-agricred-blue">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;

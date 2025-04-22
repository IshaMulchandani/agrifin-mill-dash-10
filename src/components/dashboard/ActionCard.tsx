
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  onClick: () => void;
  variant?: 'default' | 'warning' | 'success';
}

const ActionCard = ({
  icon,
  title,
  description,
  actionText,
  onClick,
  variant = 'default',
}: ActionCardProps) => {
  const variantClasses = {
    default: 'border-blue-200 bg-blue-50',
    warning: 'border-yellow-200 bg-yellow-50',
    success: 'border-green-200 bg-green-50',
  };

  const iconClasses = {
    default: 'text-agricred-blue',
    warning: 'text-agricred-yellow-dark',
    success: 'text-agricred-green',
  };

  return (
    <Card className={cn("border-l-4", variantClasses[variant])}>
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className={cn("p-2 rounded-md", iconClasses[variant])}>
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-medium text-sm">{title}</h3>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
            <Button 
              variant="link" 
              className="mt-2 p-0 h-auto text-sm font-medium"
              onClick={onClick}
            >
              {actionText}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionCard;


import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'pending' | 'approved' | 'rejected' | 'financed' | 'under-review' | 'overdue' | 'paid';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusConfig = {
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      label: 'Pending'
    },
    'under-review': {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      label: 'Under Review'
    },
    approved: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      label: 'Approved'
    },
    rejected: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      label: 'Rejected'
    },
    financed: {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      label: 'Financed'
    },
    overdue: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      label: 'Overdue'
    },
    paid: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      label: 'Paid'
    }
  };

  const config = statusConfig[status];

  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", 
        config.bg, 
        config.text,
        className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;

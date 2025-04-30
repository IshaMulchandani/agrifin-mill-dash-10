
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  FileCheck,
  Upload,
  Wallet,
  Calendar,
  FileText,
  BarChart,
  Settings,
  HelpCircle,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const navItems = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Invoice Authentication', href: '/authentication', icon: FileCheck },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
    { name: 'Payment Schedule', href: '/repayments', icon: Calendar },
    { name: 'Documents & Contracts', href: '/documents', icon: FileText },
    { name: 'Credit Reports', href: '/credit-reports', icon: BarChart },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Support', href: '/support', icon: HelpCircle },
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 bg-white border-r z-40 transform transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="h-16 flex items-center px-4 border-b">
        <div className={cn("flex items-center", !open && "justify-center w-full")}>
          {open ? (
            <div className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="AgriCred Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="font-semibold text-xl">AgriCred</span>
            </div>
          ) : (
            <img
              src="/placeholder.svg"
              alt="AgriCred Logo"
              className="h-8 w-8"
            />
          )}
        </div>
      </div>
      <nav className="p-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
              "hover:bg-gray-100",
              window.location.pathname === item.href
                ? "bg-agricred-green-light text-agricred-green-dark font-medium"
                : "text-gray-600",
              !open && "justify-center"
            )}
          >
            <item.icon className={cn("flex-shrink-0 h-5 w-5", !open && "mx-auto")} />
            {open && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;


import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WalletMetricCardProps {
  title: string;
  amount: string;
  description: string;
  className?: string;
}

const WalletMetricCard = ({ title, amount, description, className }: WalletMetricCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="pt-6">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="mt-2 text-2xl font-bold">{amount}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default WalletMetricCard;

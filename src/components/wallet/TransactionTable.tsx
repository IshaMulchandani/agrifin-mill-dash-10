
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search } from "lucide-react";

const transactions = [
  {
    date: "22 Apr '25",
    type: "Financed Received",
    description: "Invoice INV-2025-0422 from AgroMart",
    amount: "+ ₹2,00,000",
    status: "Settled",
    balance: "₹2,35,000",
  },
  {
    date: "18 Apr '25",
    type: "Repayment Made",
    description: "To FPO KrishiKart for INV-2025-0412",
    amount: "- ₹1,00,000",
    status: "Completed",
    balance: "₹35,000",
  },
  {
    date: "15 Apr '25",
    type: "Platform Fee",
    description: "Invoice INV-2025-0410 financing charge",
    amount: "- ₹5,000",
    status: "Deducted",
    balance: "₹1,35,000",
  },
  {
    date: "10 Apr '25",
    type: "Wallet Top-up",
    description: "Via UPI (Ref. UPI009231KS)",
    amount: "+ ₹50,000",
    status: "Credited",
    balance: "₹1,40,000",
  },
];

const TransactionTable = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">All</Button>
          <Button variant="outline" size="sm">Received</Button>
          <Button variant="outline" size="sm">Repayments</Button>
          <Button variant="outline" size="sm">Fees</Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              className="pl-8 w-[250px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Balance After</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className={transaction.amount.includes('+') ? 'text-green-600' : 'text-red-600'}>
                  {transaction.amount}
                </TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;

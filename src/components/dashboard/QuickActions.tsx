import { Button } from "@/components/ui/button";
import { Plus, Minus, CreditCard, RotateCw } from "lucide-react";

export function QuickActions() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">Quick Actions</h2>
      <div className="flex flex-wrap gap-4">
        <Button>
          <Plus /> Add Meal
        </Button>
        <Button variant="destructive">
          <Minus /> Add Expense
        </Button>
        <Button variant="secondary">
          <CreditCard /> Record Payment
        </Button>
        <Button variant="outline">
          <RotateCw /> Petty Cash Adjustment
        </Button>
      </div>
    </div>
  );
}

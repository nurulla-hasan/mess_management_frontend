"use client";

import { ExpenseStats } from "@/components/dashboard/expenses/ExpenseStats";
import { ExpenseTable } from "@/components/dashboard/expenses/ExpenseTable";
import PageHeader from "@/components/ui/custom/page-header";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ExpensesPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <PageHeader 
        title="Market Expenses" 
        description="Track and manage bazar/market tracking for current cycle."
      >
        <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add Expense
        </Button>
      </PageHeader>
      <ExpenseStats />
      <ExpenseTable />
    </div>
  );
}

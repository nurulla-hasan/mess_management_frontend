"use client";

import { ExpenseDistribution } from "@/components/dashboard/reports/ExpenseDistribution";
import { MealRateChart } from "@/components/dashboard/reports/MealRateChart";
import { SettlementTable } from "@/components/dashboard/reports/SettlementTable";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/custom/page-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <PageHeader
        title="Financial Reports"
        description="Detailed overview of monthly trends and settlements."
      >
        <div className="flex items-center gap-2">
          <Select defaultValue="oct-2023">
            <SelectTrigger className="w-35 bg-background">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="oct-2023">October 2023</SelectItem>
              <SelectItem value="sep-2023">September 2023</SelectItem>
              <SelectItem value="aug-2023">August 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2 bg-background">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MealRateChart />
        <ExpenseDistribution />
      </div>

      <SettlementTable />
    </div>
  );
}

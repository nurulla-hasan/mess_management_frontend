"use client";

import { MealCalendar } from "@/components/dashboard/meals/MealCalendar";
import { MessFundStatus } from "@/components/dashboard/meals/MessFundStatus";
import { MonthlySummary } from "@/components/dashboard/meals/MonthlySummary";
import PageHeader from "@/components/ui/custom/page-header";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { PlusCircle } from "lucide-react";

export default function MealsPage() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <PageHeader 
        title="Meal Management (Step 3)" 
        description="Review and record daily meal consumption for members."
      >
        <div className="flex items-center gap-3 bg-secondary/30 px-4 py-2 rounded-lg border border-border/40">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none">Custom Mode</span>
                <span className="text-sm font-semibold leading-none">Ramadan Mode (Default count)</span>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
        </div>
        <Button className="h-10">
            <PlusCircle />
            Daily Meal Entry
        </Button>
      </PageHeader>

      {/* Calendar Section */}
      <div className="flex-1 min-h-125">
        <MealCalendar />
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <MonthlySummary />
        </div>
        <div className="lg:col-span-1">
          <MessFundStatus />
        </div>
      </div>
    </div>
  );
}

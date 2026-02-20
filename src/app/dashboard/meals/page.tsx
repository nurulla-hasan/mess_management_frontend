"use client";

import { MealCalendar } from "@/components/dashboard/meals/MealCalendar";
import { MessFundStatus } from "@/components/dashboard/meals/MessFundStatus";
import { MonthlySummary } from "@/components/dashboard/meals/MonthlySummary";

export default function MealsPage() {
  return (
    <div className="flex flex-col gap-6 h-full">
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

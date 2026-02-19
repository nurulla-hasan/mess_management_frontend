import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { MealHistory } from "@/components/dashboard/meal-history"
import { MessSummary } from "@/components/dashboard/mess-summary"
import { DepositHistory } from "@/components/dashboard/deposit-history"
import { MessManagement } from "@/components/dashboard/mess-management"
import { MealOffDeadline } from "@/components/dashboard/meal-off-deadline"

export default function Home() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MealHistory />
        </div>
        <div>
          <MessSummary />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DepositHistory />
        </div>
        <div className="space-y-6">
          <MessManagement />
          <MealOffDeadline />
        </div>
      </div>
    </div>
  )
}

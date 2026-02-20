import { DashboardHeader } from "@/components/members/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { MealHistory } from "@/components/members/meal-history"
import { MessSummary } from "@/components/members/mess-summary"
import { DepositHistory } from "@/components/members/deposit-history"
import { MessManagement } from "@/components/members/mess-management"
import { MealOffDeadline } from "@/components/members/meal-off-deadline"

export default function MemberPage() {
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

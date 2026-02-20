import {
  Users,
  Wallet,
  Receipt,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { PaymentAlerts } from "@/components/dashboard/PaymentAlerts";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Stats Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Members"
          value="12"
          icon={Users}
          trend="+2 new"
          trendUp={true}
          description="this month"
        />
        <StatCard
          title="Mess Balance (Cash)"
          value="৳18,500"
          icon={Wallet}
          className="bg-primary dark:bg-primary/20 text-primary-foreground dark:text-primary-foreground"
          iconClassName="bg-primary-foreground/20 text-primary-foreground"
          titleClassName="text-primary-foreground/80 dark:text-primary-foreground/80"
          descriptionClassName="text-primary-foreground/80 dark:text-primary-foreground/80"
          description="Net: Collected - Expenses"
          action={
            <Button
              variant="link"
              className="p-0 h-auto text-primary-foreground hover:text-primary-foreground/90"
            >
              Quick Adjustment <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          }
        />
        <StatCard
          title="Total Expenses"
          value="৳1,24,000"
          icon={Receipt}
          trend="+12%"
          trendUp={false} // Expenses up is bad usually, but depends on context. Image shows red +12%.
          description="vs last month"
        />
        <StatCard
          title="Current Meal Rate"
          value="৳35.50"
          icon={BarChart3}
          trend="-1%"
          trendUp={true} // Lower meal rate is good? Image shows green -1%.
          description="efficient management"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentActivities />
        <div className="lg:col-span-1">
          <PaymentAlerts />
        </div>
      </div>
    </div>
  );
}

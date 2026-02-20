import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  statusText?: string;
  statusType?: "success" | "warning" | "neutral";
  icon?: React.ReactNode;
}

function StatCard({ title, value, statusText, statusType = "neutral", icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold mb-2", statusType === "warning" ? "text-red-500" : "")}>
          {value}
        </div>
        {statusText && (
          <div className="flex items-center text-xs">
            {icon && <span className="mr-1">{icon}</span>}
            <span
              className={cn(
                statusType === "success" && "text-green-500 font-medium",
                statusType === "warning" && "text-red-500 font-medium",
                statusType === "neutral" && "text-muted-foreground"
              )}
            >
              {statusText}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function MemberStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Current Balance"
        value="BDT 15,420"
        statusText="Verified today"
        statusType="success"
        icon={<CheckCircle2 className="h-3 w-3 text-green-500" />}
      />
      <StatCard
        title="Avg. Meal Cost"
        value="BDT 45.50"
        statusText="Based on current month"
        statusType="neutral"
      />
      <StatCard
        title="Pending Settlements"
        value="BDT 2,150"
        statusText="Needs attention"
        statusType="warning"
        icon={<AlertCircle className="h-3 w-3 text-red-500" />}
      />
    </div>
  );
}

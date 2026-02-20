import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Info } from "lucide-react";

const alerts = [
  {
    id: 1,
    name: "Mike Ross",
    avatar: "/avatars/mike.png",
    amount: "৳4,500",
  },
  {
    id: 2,
    name: "Rachel Zane",
    avatar: "/avatars/rachel.png",
    amount: "৳1,250",
  },
  {
    id: 3,
    name: "Louis Litt",
    avatar: "/avatars/louis.png",
    amount: "৳500",
  },
];

export function PaymentAlerts() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Payment Alerts</CardTitle>
          <Button variant="ghost" size="icon">
            <MoreHorizontal />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between p-3 border rounded-lg bg-card"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={alert.avatar} alt={alert.name} />
                  <AvatarFallback>
                    {alert.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{alert.name}</p>
                  <p className="text-xs text-red-500 font-medium">
                    Owes {alert.amount}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {Number(alert.amount.replace(/[^0-9]/g, "")) > 1000
                  ? "Remind"
                  : "Details"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="rounded-lg border bg-green-50 p-4 text-green-900 dark:bg-green-900/20 dark:text-green-300">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 mt-0.5 text-green-600 dark:text-green-400" />
          <div>
            <h4 className="font-medium mb-1">Settlement Period Ends Soon</h4>
            <p className="text-sm opacity-90">
              Current cycle ends in 3 days. Send reminders to all members with
              pending dues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

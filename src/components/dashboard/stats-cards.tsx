import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Banknote, Landmark, Wallet } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "My Total Meals",
      value: "45.5",
      change: "12% from last month",
      icon: Utensils,
      trend: "up",
      color: "text-chart-1",
      bg: "bg-chart-1/10"
    },
    {
      title: "Meal Rate",
      value: "৳42.50",
      change: "৳1.20 less than average",
      icon: Banknote,
      trend: "down",
      color: "text-chart-2",
      bg: "bg-chart-2/10"
    },
    {
      title: "My Total Deposit",
      value: "৳2,500",
      change: "Verified: ৳2,000",
      icon: Landmark,
      trend: "neutral",
      color: "text-chart-3",
      bg: "bg-chart-3/10"
    },
    {
      title: "Current Balance",
      value: "+৳688.75",
      change: "SURPLUS Funds available",
      icon: Wallet,
      trend: "up",
      color: "text-chart-4",
      bg: "bg-chart-4/10",
      highlight: true
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className={stat.highlight ? "border-primary/20 bg-primary/5" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bg}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.highlight ? "text-primary-foreground" : ""}`}>{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

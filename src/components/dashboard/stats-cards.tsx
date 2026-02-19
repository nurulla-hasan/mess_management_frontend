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
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Meal Rate",
      value: "৳42.50",
      change: "৳1.20 less than average",
      icon: Banknote,
      trend: "down",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "My Total Deposit",
      value: "৳2,500",
      change: "Verified: ৳2,000",
      icon: Landmark,
      trend: "neutral",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Current Balance",
      value: "+৳688.75",
      change: "SURPLUS Funds available",
      icon: Wallet,
      trend: "up",
      color: "text-green-500",
      bg: "bg-green-50",
      highlight: true
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className={stat.highlight ? "border-green-200 bg-green-50/30" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bg}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.highlight ? "text-green-600" : ""}`}>{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

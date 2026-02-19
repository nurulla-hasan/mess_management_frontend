import { Button } from "@/components/ui/button"
import { Plus, Wallet } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Ariful!</h1>
        <p className="text-muted-foreground mt-1">
          Personal Mess Overview for <span className="font-semibold text-foreground">October 2023</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Meals
        </Button>
        <Button variant="outline">
          <Wallet className="mr-2 h-4 w-4" /> Deposit
        </Button>
      </div>
    </div>
  )
}

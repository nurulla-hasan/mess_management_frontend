import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator } from "lucide-react"

export function MessSummary() {
  return (
    <Card className="h-full bg-primary/20 text-primary-foreground">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-primary-foreground">
          <Calculator className="h-5 w-5 text-primary-foreground/80" />
          Mess Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-start mb-1">
            <span className="text-primary-foreground/70 text-sm">Total Market Cost</span>
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30 bg-primary-foreground/10 text-[10px] h-5">Current Month</Badge>
          </div>
          <div className="text-3xl font-bold">৳32,450</div>
        </div>
        
        <div className="pt-4 border-t border-primary-foreground/20">
          <div className="flex justify-between items-start mb-1">
            <span className="text-primary-foreground/70 text-sm">Total Mess Meals</span>
            <span className="text-primary-foreground/70 text-xs">12 Members</span>
          </div>
          <div className="text-2xl font-bold">762.5</div>
        </div>

        <div className="pt-4 border-t border-primary-foreground/20">
          <div className="text-primary-foreground/70 text-sm mb-1">Base Meal Rate</div>
          <div className="text-2xl font-bold text-primary-foreground">৳42.50</div>
        </div>
      </CardContent>
    </Card>
  )
}

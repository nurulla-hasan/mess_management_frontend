import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator } from "lucide-react"

export function MessSummary() {
  return (
    <Card className="bg-[#0f172a] text-white border-none shadow-lg h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
          <Calculator className="h-5 w-5 text-green-400" />
          Mess Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-start mb-1">
            <span className="text-slate-400 text-sm">Total Market Cost</span>
            <Badge variant="outline" className="text-green-400 border-green-400/30 bg-green-400/10 text-[10px] h-5">Current Month</Badge>
          </div>
          <div className="text-3xl font-bold">৳32,450</div>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <div className="flex justify-between items-start mb-1">
            <span className="text-slate-400 text-sm">Total Mess Meals</span>
            <span className="text-slate-500 text-xs">12 Members</span>
          </div>
          <div className="text-2xl font-bold">762.5</div>
        </div>

        <div className="pt-4 border-t border-slate-700">
          <div className="text-slate-400 text-sm mb-1">Base Meal Rate</div>
          <div className="text-2xl font-bold text-green-400">৳42.50</div>
        </div>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShoppingBasket, Wallet, TrendingUp } from "lucide-react";

export function ExpenseStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Total Market Expense Card */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between space-y-0">
            <p className="text-sm font-medium text-muted-foreground">
              Total Market Expense
            </p>
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <ShoppingBasket className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">12,450</span>
              <span className="text-sm font-medium text-muted-foreground">
                BDT
              </span>
            </div>
            <div className="flex items-center text-xs text-red-500 font-medium">
              <TrendingUp className="mr-1 h-3 w-3" />
              +1,200 since last week
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Remaining Budget Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">
              Remaining Budget
            </p>
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">7,550</span>
              <span className="text-sm font-medium text-muted-foreground">
                BDT
              </span>
            </div>
            <div className="space-y-1">
              <Progress value={62} className="h-2 bg-blue-100 dark:bg-blue-900/20" indicatorClassName="bg-blue-600 dark:bg-blue-500" />
              <p className="text-xs text-muted-foreground">
                62% of collection used
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

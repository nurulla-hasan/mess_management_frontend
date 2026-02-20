import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export function MessFundStatus() {
  return (
    <Card className="bg-slate-950 text-slate-50 border-slate-800 h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-green-500 flex items-center justify-center">
            <Wallet className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Monthly Estimation
            </p>
            <CardTitle className="text-xl font-bold">Fund Status</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-slate-400">Total Collected</p>
            <p className="text-2xl font-bold">25,000</p>
          </div>
          <span className="text-lg font-bold">৳</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-slate-400">Total Expenses</p>
            <p className="text-2xl font-bold">23,725</p>
          </div>
          <span className="text-lg font-bold">৳</span>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "May", rate: 45 },
  { month: "Jun", rate: 52 },
  { month: "Jul", rate: 48 },
  { month: "Aug", rate: 60 },
  { month: "Sep", rate: 55 },
  { month: "Oct", rate: 72.5 },
];

export function MealRateChart() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Monthly Meal Rate Trend (BDT)</CardTitle>
        <span className="text-xs text-muted-foreground uppercase">Last 6 Months</span>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-50 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
                domain={[0, 80]}
                ticks={[0, 20, 40, 60, 80]}
              />
              <Tooltip 
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                itemStyle={{ color: "#333", fontWeight: "bold" }}
                formatter={(value) => [`৳${value}`, "Rate"]}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

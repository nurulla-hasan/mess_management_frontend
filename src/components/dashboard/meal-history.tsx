"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/custom/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { Calendar } from "lucide-react"

type MealRecord = {
  id: string
  date: string
  breakfast: number
  lunch: number
  dinner: number
  total: number
}

const columns: ColumnDef<MealRecord>[] = [
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => <div className="font-medium text-sm">{row.getValue("date")}</div>
  },
  {
    accessorKey: "breakfast",
    header: "BREAKFAST",
    cell: ({ row }) => (
      <div className={`text-sm ${row.getValue("breakfast") === 0 ? "text-muted-foreground/40" : ""}`}>
        {row.getValue("breakfast")}
      </div>
    )
  },
  {
    accessorKey: "lunch",
    header: "LUNCH",
    cell: ({ row }) => (
      <div className={`text-sm ${row.getValue("lunch") === 0 ? "text-muted-foreground/40" : ""}`}>
        {row.getValue("lunch")}
      </div>
    )
  },
  {
    accessorKey: "dinner",
    header: "DINNER",
    cell: ({ row }) => (
      <div className={`text-sm ${row.getValue("dinner") === 0 ? "text-muted-foreground/40" : ""}`}>
        {row.getValue("dinner")}
      </div>
    )
  },
  {
    accessorKey: "total",
    header: "TOTAL",
    cell: ({ row }) => <div className="font-bold text-sm">{row.getValue("total")}</div>
  },
]

const data: MealRecord[] = [
  { id: "1", date: "Oct 05, Thu", breakfast: 1, lunch: 1, dinner: 1, total: 3.0 },
  { id: "2", date: "Oct 04, Wed", breakfast: 0, lunch: 1, dinner: 0, total: 1.0 },
  { id: "3", date: "Oct 03, Tue", breakfast: 1, lunch: 1, dinner: 1, total: 3.0 },
  { id: "4", date: "Oct 02, Mon", breakfast: 0, lunch: 1, dinner: 1, total: 2.0 },
  { id: "5", date: "Oct 01, Sun", breakfast: 1, lunch: 1, dinner: 1, total: 3.0 },
]

export function MealHistory() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          Meal History
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50 font-medium h-8">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

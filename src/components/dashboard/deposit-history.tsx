"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/custom/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Wallet, CreditCard, Banknote, History } from "lucide-react"

type DepositRecord = {
  id: string
  date: string
  amount: string
  method: "bkash" | "cash" | "bank"
  status: "verified" | "pending" | "rejected"
}

const columns: ColumnDef<DepositRecord>[] = [
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => <div className="font-medium text-sm">{row.getValue("date")}</div>
  },
  {
    accessorKey: "amount",
    header: "AMOUNT (BDT)",
    cell: ({ row }) => <div className="font-bold text-sm">{row.getValue("amount")}</div>
  },
  {
    accessorKey: "method",
    header: "PAYMENT METHOD",
    cell: ({ row }) => {
      const method = row.getValue("method") as string
      return (
        <div className="flex items-center gap-2">
          {method === "bkash" && <div className="h-6 w-6 rounded bg-pink-100 flex items-center justify-center text-pink-600"><Wallet className="h-3 w-3" /></div>}
          {method === "cash" && <div className="h-6 w-6 rounded bg-orange-100 flex items-center justify-center text-orange-600"><Banknote className="h-3 w-3" /></div>}
          {method === "bank" && <div className="h-6 w-6 rounded bg-purple-100 flex items-center justify-center text-purple-600"><CreditCard className="h-3 w-3" /></div>}
          <span className="capitalize text-sm">{method === "bkash" ? "Bkash Transfer" : method === "cash" ? "Cash Deposit" : "Bank Transfer"}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const variant = status === "verified" ? "success" : status === "pending" ? "warning" : "destructive"
      
      return (
        <Badge variant={variant} className="capitalize">
          {status}
        </Badge>
      )
    }
  },
  {
    id: "actions",
    header: "ACTION",
    cell: ({ row }) => {
      const status = row.original.status
      if (status === "pending") {
        return (
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Request Verification
          </Button>
        )
      }
      return <span className="text-xs text-muted-foreground px-3">No Action</span>
    }
  },
]

const data: DepositRecord[] = [
  { id: "1", date: "Oct 01, 2023", amount: "৳1,500.00", method: "bkash", status: "verified" },
  { id: "2", date: "Sep 28, 2023", amount: "৳1,000.00", method: "cash", status: "pending" },
  { id: "3", date: "Sep 25, 2023", amount: "৳500.00", method: "bank", status: "verified" },
]

export function DepositHistory() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <History className="h-5 w-5 text-muted-foreground" />
          Detailed Deposit History
        </CardTitle>
        <Button variant="ghost" size="sm" className="font-medium h-8">
          Download Report
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

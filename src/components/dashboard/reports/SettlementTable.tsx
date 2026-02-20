"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { DataTable } from "@/components/ui/custom/data-table";
import { ColumnDef } from "@tanstack/react-table";

interface SettlementData {
  id: number;
  name: string;
  avatar: string;
  meals: number;
  mealCost: number;
  fixedShare: number;
  totalLiability: number;
  deposited: number;
  balance: number;
}

const settlementData: SettlementData[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/avatars/john.png",
    meals: 45.0,
    mealCost: 3262.5,
    fixedShare: 1037.5,
    totalLiability: 4300.0,
    deposited: 5000.0,
    balance: 700.0,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/avatars/jane.png",
    meals: 42.0,
    mealCost: 3045.0,
    fixedShare: 1037.5,
    totalLiability: 4082.5,
    deposited: 3500.0,
    balance: -582.5,
  },
  {
    id: 3,
    name: "Mike Ross",
    avatar: "/avatars/mike.png",
    meals: 50.0,
    mealCost: 3625.0,
    fixedShare: 1037.5,
    totalLiability: 4662.5,
    deposited: 4000.0,
    balance: -662.5,
  },
  {
    id: 4,
    name: "Rachel Zane",
    avatar: "/avatars/rachel.png",
    meals: 38.0,
    mealCost: 2755.0,
    fixedShare: 1037.5,
    totalLiability: 3792.5,
    deposited: 5000.0,
    balance: 1207.5,
  },
];

export function SettlementTable() {
  const totals = settlementData.reduce(
    (acc, curr) => ({
      meals: acc.meals + curr.meals,
      mealCost: acc.mealCost + curr.mealCost,
      fixedShare: acc.fixedShare + curr.fixedShare,
      totalLiability: acc.totalLiability + curr.totalLiability,
      deposited: acc.deposited + curr.deposited,
      balance: acc.balance + curr.balance,
    }),
    { meals: 0, mealCost: 0, fixedShare: 0, totalLiability: 0, deposited: 0, balance: 0 }
  );

  const columns: ColumnDef<SettlementData>[] = [
    {
      accessorKey: "name",
      header: "Member Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={row.original.avatar} />
            <AvatarFallback>{row.original.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{row.original.name}</span>
        </div>
      ),
      footer: () => <div className="font-bold pl-2">Total</div>,
    },
    {
      accessorKey: "meals",
      header: "Meals",
      cell: ({ row }) => <div>{row.original.meals.toFixed(1)}</div>,
      footer: () => <div className="font-bold">{totals.meals.toFixed(1)}</div>,
    },
    {
      accessorKey: "mealCost",
      header: () => (
        <div>
          <div>Meal Cost</div>
          <div className="text-[10px] normal-case text-muted-foreground">(Meals x Rate)</div>
        </div>
      ),
      cell: ({ row }) => (
        <div className="text-muted-foreground">
          ৳{row.original.mealCost.toLocaleString()}
        </div>
      ),
      footer: () => <div className=" font-bold">৳{totals.mealCost.toLocaleString()}</div>,
    },
    {
      accessorKey: "fixedShare",
      header: () => (
        <div>
          <div>Fixed Share</div>
          <div className="text-[10px] normal-case text-muted-foreground">(Rent+Utility)</div>
        </div>
      ),

      cell: ({ row }) => (
        <div className=" text-muted-foreground">
          ৳{row.original.fixedShare.toLocaleString()}
        </div>
      ),
      footer: () => <div className=" font-bold">৳{totals.fixedShare.toLocaleString()}</div>,
    },
    {
      accessorKey: "totalLiability",
      header: "Total Liability",

      cell: ({ row }) => (
        <div className=" font-medium">
          ৳{row.original.totalLiability.toLocaleString()}
        </div>
      ),
      footer: () => <div className=" font-bold">৳{totals.totalLiability.toLocaleString()}</div>,
    },
    {
      accessorKey: "deposited",
      header: "Deposited",
      cell: ({ row }) => (
        <div className=" text-muted-foreground">
          ৳{row.original.deposited.toLocaleString()}
        </div>
      ),
      footer: () => <div className=" font-bold">৳{totals.deposited.toLocaleString()}</div>,
    },
    {
      accessorKey: "balance",
      header: ()=> <div>Balance</div>,
      cell: ({ row }) => {
        const balance = row.original.balance;
        return (
          <div
            className={cn(
              " font-bold",
              balance >= 0 ? "text-green-600" : "text-red-500"
            )}
          >
            {balance > 0 ? "+" : ""} ৳{balance.toLocaleString()}
          </div>
        );
      },
      footer: () => (
        <div className=" font-bold">
          {totals.balance > 0 ? "+" : ""} ৳{totals.balance.toLocaleString()} (Net)
        </div>
      ),
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">Monthly Settlement Preview</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Calculated based on ৳72.50 meal rate for Oct 2023.</span>
            <Info className="h-4 w-4" />
          </div>
        </div>
        <Button variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100 border-green-200">
          Notify All Members
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={settlementData}
        />
      </CardContent>
    </Card>
  );
}

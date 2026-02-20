
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/custom/data-table";
import { Expense } from "@/services/expense";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { PaginationMeta } from "@/types/global.types";

const categoryStyles: Record<string, string> = {
  "Meat & Fish": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  Vegetables: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
  Groceries: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  Utility: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  Other: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700",
};

const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground whitespace-nowrap">
        {format(new Date(row.getValue("date")), "MMM dd, yyyy")}
      </div>
    ),
  },
  {
    accessorKey: "buyerId",
    header: "BUYER",
    cell: ({ row }) => {
      const buyer = row.original.buyerId?.userId;
      if (!buyer) return <span className="text-sm text-muted-foreground">Unknown</span>;
      
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={buyer.profilePicture} alt={buyer.fullName} />
            <AvatarFallback>
              {buyer.fullName.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{buyer.fullName}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return (
        <Badge
          variant="outline"
          className={`font-normal ${categoryStyles[category] || categoryStyles.Other}`}
        >
          {category}
        </Badge>
      );
    },
  },
  {
    accessorKey: "items",
    header: "ITEMS",
    cell: ({ row }) => (
      <div className="max-w-50 truncate text-sm text-muted-foreground" title={row.getValue("items")}>
        {row.getValue("items")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => (
      <div className="font-bold text-sm">
        {formatCurrency(row.getValue("amount"))}
      </div>
    ),
  },
];

interface ExpenseTableProps {
  expenses: Expense[];
  pagination: PaginationMeta;
}

export function ExpenseTable({ expenses, pagination }: ExpenseTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={expenses} meta={pagination} />
      </CardContent>
    </Card>
  );
}

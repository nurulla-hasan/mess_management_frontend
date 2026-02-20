"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/custom/data-table";
import { SearchInput } from "@/components/ui/custom/search-input";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { FileText, MoreVertical, SlidersHorizontal } from "lucide-react";

type Expense = {
  id: string;
  date: string;
  buyer: {
    name: string;
    avatar?: string;
  };
  category: "Meat & Fish" | "Vegetables" | "Groceries" | "Utility";
  items: string;
  amount: number;
};

const expenses: Expense[] = [
  {
    id: "1",
    date: "Oct 24, 2023",
    buyer: {
      name: "John Doe",
      avatar: "/avatars/john.png",
    },
    category: "Meat & Fish",
    items: "Chicken 2kg, Beef 1kg, Tilapia...",
    amount: 1450.0,
  },
  {
    id: "2",
    date: "Oct 23, 2023",
    buyer: {
      name: "Jane Smith",
      avatar: "/avatars/jane.png",
    },
    category: "Vegetables",
    items: "Potato, Onion, Tomato, Green...",
    amount: 520.0,
  },
  {
    id: "3",
    date: "Oct 22, 2023",
    buyer: {
      name: "Mike Ross",
      avatar: "/avatars/mike.png",
    },
    category: "Groceries",
    items: "Rice 25kg, Soybean Oil 5L, ...",
    amount: 3200.0,
  },
  {
    id: "4",
    date: "Oct 21, 2023",
    buyer: {
      name: "Admin User",
    },
    category: "Utility",
    items: "Dish Soap, Floor Cleaner, Tis...",
    amount: 450.0,
  },
];

const categoryStyles = {
  "Meat & Fish": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  Vegetables: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
  Groceries: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  Utility: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
};

const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground whitespace-nowrap">
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "buyer",
    header: "BUYER",
    cell: ({ row }) => {
      const buyer = row.original.buyer;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={buyer.avatar} alt={buyer.name} />
            <AvatarFallback>
              {buyer.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{buyer.name}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => {
      const category = row.getValue("category") as keyof typeof categoryStyles;
      return (
        <Badge
          variant="outline"
          className={cn("font-normal border", categoryStyles[category])}
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
      <div className="text-sm text-muted-foreground max-w-50 truncate" title={row.getValue("items")}>
        {row.getValue("items")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">AMOUNT (BDT)</div>,
    cell: ({ row }) => (
      <div className="text-right font-bold">
        {row.getValue<number>("amount").toLocaleString("en-BD", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    ),
  },
  {
    id: "receipt",
    header: "RECEIPT",
    cell: () => (
      <Button variant="ghost" size="icon">
        <FileText />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <Button variant="ghost" size="icon">
        <MoreVertical />
      </Button>
    ),
  },
];

export function ExpenseTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-bold">Expense History</CardTitle>
        <div className="flex items-center gap-2">
          <SearchInput
            placeholder="Search items or buyers..."
            className="w-62.5"
          />
          <Button variant="outline" className="rounded-full">
            <SlidersHorizontal />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={expenses} />
      </CardContent>
    </Card>
  );
}

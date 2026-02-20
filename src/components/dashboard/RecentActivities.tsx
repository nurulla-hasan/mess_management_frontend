"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/custom/data-table";

type Activity = {
  id: number;
  date: string;
  user: {
    name: string;
    avatar: string;
    description: string;
    isSystem?: boolean;
  };
  type: string;
  amount: string;
  status: string;
};

const activities: Activity[] = [
  {
    id: 1,
    date: "Oct 24, 2023",
    user: {
      name: "John Doe",
      avatar: "/avatars/john.png",
      description: "Lunch",
    },
    type: "Meal",
    amount: "1.0",
    status: "Recorded",
  },
  {
    id: 2,
    date: "Oct 24, 2023",
    user: {
      name: "Grocery Shopping",
      avatar: "/icons/cart.png",
      description: "Weekly supplies",
      isSystem: true,
    },
    type: "Expense",
    amount: "৳5,000",
    status: "Approved",
  },
  {
    id: 3,
    date: "Oct 23, 2023",
    user: {
      name: "Jane Smith",
      avatar: "/avatars/jane.png",
      description: "Monthly Contribution",
    },
    type: "Payment",
    amount: "৳10,000",
    status: "Completed",
  },
  {
    id: 4,
    date: "Oct 23, 2023",
    user: {
      name: "Mike Ross",
      avatar: "/avatars/mike.png",
      description: "Dinner",
    },
    type: "Meal",
    amount: "1.0",
    status: "Recorded",
  },
  {
    id: 5,
    date: "Oct 22, 2023",
    user: {
      name: "Water Bill",
      avatar: "/icons/water.png",
      description: "Utility",
      isSystem: true,
    },
    type: "Expense",
    amount: "৳2,500",
    status: "Pending",
  },
];

const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => (
      <div className="font-medium text-muted-foreground text-xs">
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "user",
    header: "DESCRIPTION",
    cell: ({ row }) => {
      const user = row.original.user;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{user.name}</span>
            <span className="text-xs text-muted-foreground">
              {user.description}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge
          variant="secondary"
          className={
            type === "Meal"
              ? "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
              : type === "Expense"
              ? "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300"
              : "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300"
          }
        >
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => <div className="font-medium">{row.getValue("amount")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="flex justify-end">STATUS</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div>
          <Badge
            variant="outline"
            className={
              status === "Pending"
                ? "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800"
                : "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
            }
          >
            {status}
          </Badge>
        </div>
      );
    },
  },
];

export function RecentActivities() {
  return (
    <Card className="col-span-1 lg:col-span-2 min-w-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activities</CardTitle>
        <Button variant="ghost" size="sm">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={activities} />
      </CardContent>
    </Card>
  );
}

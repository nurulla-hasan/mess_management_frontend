"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/custom/data-table";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Member = {
  id: string;
  name: string;
  avatar: string;
  memberId: string;
  phone: string;
  email: string;
  role: "Admin" | "Member";
  joinDate: string;
  status: "Active" | "Inactive";
};

const members: Member[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/avatars/john.png",
    memberId: "#M1001",
    phone: "+880 1712-345678",
    email: "john.doe@email.com",
    role: "Admin",
    joinDate: "Oct 12, 2023",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "/avatars/jane.png",
    memberId: "#M1002",
    phone: "+880 1812-445566",
    email: "jane.smith@email.com",
    role: "Member",
    joinDate: "Oct 15, 2023",
    status: "Active",
  },
  {
    id: "3",
    name: "Mike Ross",
    avatar: "/avatars/mike.png",
    memberId: "#M1003",
    phone: "+880 1912-778899",
    email: "mike.ross@email.com",
    role: "Member",
    joinDate: "Nov 01, 2023",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Rachel Zane",
    avatar: "/avatars/rachel.png",
    memberId: "#M1004",
    phone: "+880 1512-990011",
    email: "rachel.zane@email.com",
    role: "Member",
    joinDate: "Nov 05, 2023",
    status: "Active",
  },
];

const StatusCell = ({ initialStatus }: { initialStatus: string }) => {
  const [isActive, setIsActive] = useState(initialStatus === "Active");
  return (
    <div className="flex items-center gap-2">
      <div
        role="switch"
        aria-checked={isActive}
        onClick={() => setIsActive(!isActive)}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          isActive ? "bg-green-500" : "bg-input",
        )}
      >
        <span
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
            isActive ? "translate-x-4" : "translate-x-0",
          )}
        />
      </div>
      <span className="text-sm text-muted-foreground">
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const member = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>
              {member.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{member.name}</span>
            <span className="text-xs text-muted-foreground">
              {member.memberId}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "PHONE",
    cell: ({ row }) => <div className="text-sm">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "email",
    header: "EMAIL",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "ROLE",
    cell: ({ row }) => (
      <Badge
        variant={row.getValue("role") === "Admin" ? "default" : "secondary"}
      >
        {row.getValue("role")}
      </Badge>
    ),
  },
  {
    accessorKey: "joinDate",
    header: "JOIN DATE",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("joinDate")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => <StatusCell initialStatus={row.getValue("status")} />,
  },
  {
    id: "actions",
    header: "ACTIONS",
    cell: () => (
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Pencil className="h-4 w-4 text-muted-foreground" />
      </Button>
    ),
  },
];

export function MemberTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Members</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={members} />
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { MakeDepositModal } from "./make-deposit-modal";

interface MessManagementProps {
  user?: {
    role?: string;
  };
}

export function MessManagement({ user }: MessManagementProps) {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <MakeDepositModal />
        {user?.role === 'admin' && (
          <Button asChild className="w-full justify-start gap-2" variant="outline">
            <Link href="/dashboard/expenses">
              <PlusCircle className="h-4 w-4 text-blue-500" />
              Add Expense
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

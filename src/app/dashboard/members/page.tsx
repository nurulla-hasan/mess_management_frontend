"use client";

import { MemberStats } from "@/components/dashboard/members/MemberStats";
import { MemberTable } from "@/components/dashboard/members/MemberTable";
import { SearchInput } from "@/components/ui/custom/search-input";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import PageHeader from "@/components/ui/custom/page-header";

export default function MembersPage() {
  return (
    <div className="flex flex-col gap-6 w-full p-1">
      <PageHeader 
        title="Member Management" 
        description="Manage your mess members, roles, and status."
      >
        <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
          <UserPlus className="h-4 w-4" />
          Add Member
        </Button>
      </PageHeader>

      <MemberStats />

      <div className="flex items-center justify-start">
        <SearchInput
          placeholder="Search members by name, email or phone..."
          className="w-72"
        />
      </div>
      <MemberTable />
    </div>
  );
}

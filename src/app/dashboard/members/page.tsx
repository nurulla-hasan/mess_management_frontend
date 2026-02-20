
import { MemberStats } from "@/components/dashboard/members/MemberStats";
import { MemberTable } from "@/components/dashboard/members/MemberTable";
import { SearchInput } from "@/components/ui/custom/search-input";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function MembersPage() {
  return (
    <div className="flex flex-col gap-6 w-full p-1">
      <MemberStats />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <SearchInput
          placeholder="Search members by name, email or phone..."
          className="w-72"
        />
        <Button className="w-full sm:w-auto">
          <UserPlus />
          Add Member
        </Button>
      </div>
      <MemberTable />
    </div>
  );
}

"use server";

import { serverFetch } from "@/lib/fetcher";

export async function getAllMembersAction() {
  try {
    const response = await serverFetch("/members?limit=100");
    if (response?.success) {
      return response.data.members;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return [];
  }
}

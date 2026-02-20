"use server";

import { serverFetch } from "@/lib/fetcher";
import { revalidatePath } from "next/cache";

export async function addDepositAction(data: any) {
  try {
    const response = await serverFetch("/deposits", {
      method: "POST",
      body: data,
    });
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/reports");
    return response;
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

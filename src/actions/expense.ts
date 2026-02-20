/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/fetcher";
import { revalidatePath } from "next/cache";

export async function addExpenseAction(data: any) {
  try {
    const response = await serverFetch("/expenses", {
      method: "POST",
      body: data,
    });
    revalidatePath("/dashboard/expenses");
    return response;
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

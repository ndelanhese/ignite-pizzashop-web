"use server";

import { api } from "@/services/api";
import { revalidatePath, revalidateTag } from "next/cache";
import { ApproveOrderProps } from "./order.types";

export const approveOrder = async ({ orderId }: ApproveOrderProps) => {
	await api(`/orders/${orderId}/approve`, undefined, { method: "PATCH" });
};

export const revalidateOrderData = async (tag: string, path: string) => {
	revalidateTag(tag);
	revalidatePath(path);
};

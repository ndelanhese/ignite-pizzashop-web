"use server";

import { api } from "@/services/api";
import { revalidatePath, revalidateTag } from "next/cache";
import { CancelOrderProps } from "./order.types";

export const cancelOrder = async ({ orderId }: CancelOrderProps) => {
	await api(`/orders/${orderId}/cancel`, undefined, { method: "PATCH" });
};

export const revalidateOrderData = async (tag: string, path: string) => {
	revalidateTag(tag);
	revalidatePath(path);
};

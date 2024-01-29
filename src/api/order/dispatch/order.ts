"use server";

import { api } from "@/services/api";
import { revalidatePath, revalidateTag } from "next/cache";
import { DispatchOrderProps } from "./order.types";

export const dispatchOrder = async ({ orderId }: DispatchOrderProps) => {
	await api(`/orders/${orderId}/dispatch`, undefined, { method: "PATCH" });
};

export const revalidateOrderData = async (tag: string, path: string) => {
	revalidateTag(tag);
	revalidatePath(path);
};

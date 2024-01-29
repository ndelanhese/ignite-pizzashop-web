"use server";

import { api } from "@/services/api";
import { revalidatePath, revalidateTag } from "next/cache";
import { DeliverOrderProps } from "./order.types";

export const deliverOrder = async ({ orderId }: DeliverOrderProps) => {
	await api(`/orders/${orderId}/deliver`, undefined, { method: "PATCH" });
};

export const revalidateOrderData = async (tag: string, path: string) => {
	revalidateTag(tag);
	revalidatePath(path);
};

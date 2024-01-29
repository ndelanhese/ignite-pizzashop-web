"use server";

import { api } from "@/services/api";
import { GetOrderDetailsProps, GetOrderDetailsResponse } from "./order.types";

export const getOrderDetails = async ({ orderId }: GetOrderDetailsProps) => {
	return await api<GetOrderDetailsResponse>(`/orders/${orderId}`);
};

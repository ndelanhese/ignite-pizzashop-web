import { api } from "@/services/api";
import { GetOrdersProps, GetOrdersResponse } from "./orders.types";

export const getOrders = async ({ pageIndex = 0 }: GetOrdersProps) => {
	return await api<GetOrdersResponse>(
		`/orders?pageIndex=${pageIndex}`,
		undefined,
	);
};

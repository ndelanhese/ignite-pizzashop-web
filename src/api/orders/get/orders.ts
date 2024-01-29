import { api } from "@/services/api";
import { GetOrdersProps, GetOrdersResponse } from "./orders.types";

export const getOrders = async ({
	pageIndex = 0,
	customerName,
	orderId,
	status,
}: GetOrdersProps) => {
	return await api<GetOrdersResponse>(
		`/orders?pageIndex=${pageIndex}&orderId=${orderId}&customerName=${customerName}${
			status !== "all" ? `&status=${status}` : ""
		}`,
	);
};

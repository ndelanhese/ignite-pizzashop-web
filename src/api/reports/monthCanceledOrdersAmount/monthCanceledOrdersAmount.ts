import { api } from "@/services/api";
import { MonthCanceledOrdersAmountResponse } from "./monthCanceledOrdersAmount.types";

export const getMonthCanceledOrdersAmount = async () => {
	return await api<MonthCanceledOrdersAmountResponse>(
		"/metrics/month-canceled-orders-amount",
	);
};

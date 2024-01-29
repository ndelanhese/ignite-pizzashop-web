import { api } from "@/services/api";
import { MonthOrdersAmountResponse } from "./monthOrdersAmount.types";

export const getMonthOrdersAmount = async () => {
	return await api<MonthOrdersAmountResponse>("/metrics/month-orders-amount");
};

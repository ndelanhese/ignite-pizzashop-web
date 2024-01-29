import { api } from "@/services/api";
import { DayOrdersAmountResponse } from "./dayOrdersAmount.types";

export const getDayOrdersAmount = async () => {
	return api<DayOrdersAmountResponse>("/metrics/day-orders-amount");
};

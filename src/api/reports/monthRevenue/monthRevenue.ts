import { api } from "@/services/api";
import { MonthRevenueResponse } from "./monthRevenue.types";

export const getMonthRevenue = async () => {
	return await api<MonthRevenueResponse>("/metrics/month-receipt");
};

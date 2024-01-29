"use server";

import { api } from "@/services/api";
import {
	GetDailyRevenueDataProps,
	GetDailyRevenueDataResponse,
} from "./dailyRevenueInPeriod.types";

export const getDailyRevenueInPeriod = async ({
	from,
	to,
}: GetDailyRevenueDataProps) => {
	return await api<GetDailyRevenueDataResponse>(
		`/metrics/daily-receipt-in-period?from=${from ?? ""}&to=${to ?? ""}`,
	);
};

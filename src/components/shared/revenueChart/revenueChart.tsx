"use client";

import { getDailyRevenueInPeriod } from "@/api/reports/dailyRevenueInPeriod";
import { GetDailyRevenueDataResponse } from "@/api/reports/dailyRevenueInPeriod/dailyRevenueInPeriod.types";
import { DatePickerWithRange } from "@/components/ui/dateRangePicker";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import { Skeleton } from "@components/ui/skeleton";
import { subDays } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { DailyRevenueInPeriodLineChart } from "./components/chart";

export const RevenueChart = () => {
	const [dailyRevenueInPeriod, setDayRevenueInPeriod] = useState<
		GetDailyRevenueDataResponse | undefined
	>(undefined);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 7),
		to: new Date(),
	});

	const getDailyRevenueData = useCallback(async () => {
		const response = await getDailyRevenueInPeriod({
			from: dateRange?.from,
			to: dateRange?.to,
		});
		setDayRevenueInPeriod(response);
	}, [dateRange]);

	useEffect(() => {
		getDailyRevenueData();
	}, [getDailyRevenueData]);

	const chartData = useMemo(() => {
		return dailyRevenueInPeriod?.map((chartItem) => ({
			date: chartItem.date,
			receipt: chartItem.receipt / 100,
		}));
	}, [dailyRevenueInPeriod]);

	return (
		<Card className="col-span-6">
			<CardHeader className="flex-row items-center justify-between pb-8">
				<div className="space-y-1">
					<CardTitle className="text-base font-medium">
						Receita no período
					</CardTitle>
					<CardDescription>Receita diária no período</CardDescription>
				</div>
				<div className="flex items-center gap-3">
					<Label>Período</Label>
					<DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
				</div>
			</CardHeader>
			<CardContent>
				{chartData ? (
					<DailyRevenueInPeriodLineChart data={chartData} />
				) : (
					<Skeleton className="w-full h-[15rem]" />
				)}
			</CardContent>
		</Card>
	);
};

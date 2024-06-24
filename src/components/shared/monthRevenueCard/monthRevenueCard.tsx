import { getMonthRevenue } from "@/api/reports/monthRevenue";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { DollarSign } from "lucide-react";

export const MonthRevenueCard = async () => {
	const monthRevenue = await getMonthRevenue();
	return (
		<Card>
			<CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
				<CardTitle className="text-base font-semibold">
					Recita total (mês)
				</CardTitle>
				<DollarSign className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				<span className="text-2xl font-bold tracking-tight">
					{((monthRevenue?.receipt ?? 0) / 100).toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<p className="text-xs text-muted-foreground">
					{monthRevenue?.diffFromLastMonth &&
					monthRevenue?.diffFromLastMonth >= 0 ? (
						<>
							<span className="text-emerald-500 dark:text-emerald-400">
								+{monthRevenue?.diffFromLastMonth}%
							</span>{" "}
							em ao mês passado
						</>
					) : (
						<>
							<span className="text-rose-500 dark:text-rose-400">
								{monthRevenue?.diffFromLastMonth}%
							</span>{" "}
							em ao mês passado
						</>
					)}
				</p>
			</CardContent>
		</Card>
	);
};

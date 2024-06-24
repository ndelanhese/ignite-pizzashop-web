import { getMonthOrdersAmount } from "@/api/reports/monthOrdersAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Utensils } from "lucide-react";

export const MonthOrdersAmountCard = async () => {
	const monthOrdersAmount = await getMonthOrdersAmount();

	return (
		<Card>
			<CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
				<CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				<span className="text-2xl font-bold tracking-tight">
					{monthOrdersAmount?.amount.toLocaleString("pt-BR")}
				</span>
				<p className="text-xs text-muted-foreground">
					{monthOrdersAmount?.diffFromLastMonth &&
					monthOrdersAmount?.diffFromLastMonth >= 0 ? (
						<>
							<span className="text-emerald-500 dark:text-emerald-400">
								+{monthOrdersAmount?.diffFromLastMonth}%
							</span>{" "}
							em ao mês passado
						</>
					) : (
						<>
							<span className="text-rose-500 dark:text-rose-400">
								{monthOrdersAmount?.diffFromLastMonth}%
							</span>{" "}
							em ao mês passado
						</>
					)}
				</p>
			</CardContent>
		</Card>
	);
};

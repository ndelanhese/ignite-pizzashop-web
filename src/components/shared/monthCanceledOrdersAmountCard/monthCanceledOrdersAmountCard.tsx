import { getMonthCanceledOrdersAmount } from "@/api/reports/monthCanceledOrdersAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { DollarSign } from "lucide-react";

export const MonthCanceledOrdersAmountCard = async () => {
	const monthCanceledOrdersAmount = await getMonthCanceledOrdersAmount();

	return (
		<Card>
			<CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
				<CardTitle className="text-base font-semibold">
					Cancelamentos (mês)
				</CardTitle>
				<DollarSign className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				<span className="text-2xl font-bold tracking-tight">
					{monthCanceledOrdersAmount?.amount.toLocaleString("pt-BR")}
				</span>
				<p className="text-xs text-muted-foreground">
					{monthCanceledOrdersAmount?.diffFromLastMonth &&
					monthCanceledOrdersAmount?.diffFromLastMonth < 0 ? (
						<>
							<span className="text-emerald-500 dark:text-emerald-400">
								{monthCanceledOrdersAmount?.diffFromLastMonth}%
							</span>{" "}
							em ao mês passado
						</>
					) : (
						<>
							<span className="text-rose-500 dark:text-rose-400">
								+{monthCanceledOrdersAmount?.diffFromLastMonth}%
							</span>{" "}
							em ao mês passado
						</>
					)}
				</p>
			</CardContent>
		</Card>
	);
};

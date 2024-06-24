import { getDayOrdersAmount } from "@/api/reports/dayOrdersAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Utensils } from "lucide-react";

export const DayOrdersAmountCard = async () => {
	const dayOrdersAmount = await getDayOrdersAmount();

	return (
		<Card>
			<CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
				<CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				<span className="text-2xl font-bold tracking-tight">
					{dayOrdersAmount?.amount.toLocaleString("pt-BR")}
				</span>
				<p className="text-xs text-muted-foreground">
					{dayOrdersAmount?.diffFromYesterday &&
					dayOrdersAmount?.diffFromYesterday >= 0 ? (
						<>
							<span className="text-emerald-500 dark:text-emerald-400">
								+{dayOrdersAmount?.diffFromYesterday}%
							</span>{" "}
							em relação a ontem
						</>
					) : (
						<>
							<span className="text-rose-500 dark:text-rose-400">
								{dayOrdersAmount?.diffFromYesterday}%
							</span>{" "}
							em relação a ontem
						</>
					)}
				</p>
			</CardContent>
		</Card>
	);
};

import { getPopularProducts } from "@/api/reports/popularProducts";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { BarChart } from "lucide-react";
import { PopularProductsPieChart } from "./components/chart/chart";

export const PopularProductsChart = async () => {
	const popularProducts = await getPopularProducts();

	return (
		<Card className="col-span-3">
			<CardHeader className=" pb-8">
				<div className="flex items-center justify-between">
					<CardTitle className="text-base font-medium">
						Produtos populares
					</CardTitle>
					<BarChart className="h-4 w-4 text-muted-foreground" />
				</div>
			</CardHeader>
			<CardContent>
				<PopularProductsPieChart data={popularProducts} />
			</CardContent>
		</Card>
	);
};

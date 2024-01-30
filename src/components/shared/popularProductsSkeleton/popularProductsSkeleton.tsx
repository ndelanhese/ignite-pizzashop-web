import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart } from "lucide-react";

export const PopularProductsSkeleton = () => (
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
			<Skeleton className="h-[15rem] w-full" />
		</CardContent>
	</Card>
);

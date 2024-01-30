import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MetricCardsSkeletonProps } from "./metricCardsSkeleton.types";

export const MetricCardsSkeleton = ({
	icon: Icon,
	title,
}: MetricCardsSkeletonProps) => (
	<Card>
		<CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
			<CardTitle className="text-base font-semibold">{title}</CardTitle>
			<Icon className="h-4 w-4 text-muted-foreground" />
		</CardHeader>
		<CardContent className="space-y-1">
			<Skeleton className="h-7 w-36 mt-1" />
			<Skeleton className="h-4 w-52" />
		</CardContent>
	</Card>
);

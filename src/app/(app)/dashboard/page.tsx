import { PopularProductsSkeleton } from "@/components/shared/popularProductsSkeleton";
import { DayOrdersAmountCard } from "@components/shared/dayOrdersAmountCard";
import { MetricCardsSkeleton } from "@components/shared/metricCardsSkeleton";
import { MonthCanceledOrdersAmountCard } from "@components/shared/monthCanceledOrdersAmountCard";
import { MonthOrdersAmountCard } from "@components/shared/monthOrdersAmountCard";
import { MonthRevenueCard } from "@components/shared/monthRevenueCard";
import { PopularProductsChart } from "@components/shared/popularProductsChart";
import { RevenueChart } from "@components/shared/revenueChart";
import { DollarSign, Utensils } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Dashboard",
};

const DashboardPage = () => (
	<section className="flex flex-col gap-4">
		<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
		<div className="grid grid-cols-4 gap-4 mt-4">
			<Suspense
				fallback={
					<MetricCardsSkeleton icon={DollarSign} title="Recita total (mês)" />
				}
			>
				<MonthRevenueCard />
			</Suspense>

			<Suspense
				fallback={<MetricCardsSkeleton icon={Utensils} title="Pedidos (mês)" />}
			>
				<MonthOrdersAmountCard />
			</Suspense>

			<Suspense
				fallback={<MetricCardsSkeleton icon={Utensils} title="Pedidos (dia)" />}
			>
				<DayOrdersAmountCard />
			</Suspense>

			<Suspense
				fallback={
					<MetricCardsSkeleton icon={DollarSign} title="Cancelamentos (mês)" />
				}
			>
				<MonthCanceledOrdersAmountCard />
			</Suspense>
		</div>

		<div className="grid grid-cols-9 gap-4">
			<RevenueChart />

			<Suspense fallback={<PopularProductsSkeleton />}>
				<PopularProductsChart />
			</Suspense>
		</div>
	</section>
);

export default DashboardPage;

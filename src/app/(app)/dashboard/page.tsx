import { DayOrdersAmountCard } from "@components/shared/dayOrdersAmountCard";
import { MonthCanceledOrdersAmountCard } from "@components/shared/monthCanceledOrdersAmountCard";
import { MonthOrdersAmountCard } from "@components/shared/monthOrdersAmountCard";
import { MonthRevenueCard } from "@components/shared/monthRevenueCard";
import { PopularProductsChart } from "@components/shared/popularProductsChart";
import { RevenueChart } from "@components/shared/revenueChart";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
};

const DashboardPage = () => (
	<section className="flex flex-col gap-4">
		<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
		<div className="grid grid-cols-4 gap-4 mt-4">
			<MonthRevenueCard />
			<MonthOrdersAmountCard />
			<DayOrdersAmountCard />
			<MonthCanceledOrdersAmountCard />
		</div>

		<div className="grid grid-cols-9 gap-4">
			<RevenueChart />
			<PopularProductsChart />
		</div>
	</section>
);

export default DashboardPage;

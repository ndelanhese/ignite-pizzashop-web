import { OrderTableSkeleton } from "@components/shared/orderTable/orderTableSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Orders",
};

const LoadingOrdersPage = async () => {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
			<div className="space-y-2.5">
				<OrderTableSkeleton />
			</div>
		</section>
	);
};

export default LoadingOrdersPage;

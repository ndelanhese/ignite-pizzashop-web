import { OrderTable } from "@components/shared/orderTable";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Orders",
};

const OrdersPage = () => (
	<section>
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
		</div>
		<div className="space-y-2.5 mt-4">
			<OrderTable />
		</div>
	</section>
);

export default OrdersPage;

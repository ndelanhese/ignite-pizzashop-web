import { OrderTable } from "@components/shared/orderTable";
import { Metadata } from "next";
import { Suspense } from "react";
import { PageProps } from "./page.types";

export const metadata: Metadata = {
	title: "Orders",
};

const OrdersPage = async ({ searchParams }: PageProps) => {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
			<div className="space-y-2.5">
				<Suspense>
					<OrderTable searchParams={searchParams} />
				</Suspense>
			</div>
		</section>
	);
};

export default OrdersPage;

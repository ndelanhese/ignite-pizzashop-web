import { getOrders } from "@/api/orders/get";
import { TablePagination } from "@components/shared/pagination";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";
import { z } from "zod";
import { OrderTableFilters } from "../orderTableFilters";
import { OrderTableRow } from "../orderTableRow";
import { OrderTableProps } from "./orderTable.types";

export const OrderTable = async ({ searchParams }: OrderTableProps) => {
	const pageIndex = z.coerce
		.number()
		.transform((page) => page - 1)
		.parse(searchParams.page ?? "1");
	const orderId = z.coerce
		.string()
		.optional()
		.parse(searchParams.order_id ?? "");
	const customerName = z.coerce
		.string()
		.optional()
		.parse(searchParams.customer_name ?? "");
	const status = z.coerce
		.string()
		.optional()
		.parse(searchParams.status ?? "all");
	const ordersResult = await getOrders({
		pageIndex,
		orderId,
		customerName,
		status,
	});

	return (
		<div className="space-y-2.5 mt-4">
			<OrderTableFilters />
			<div className="border rounded-md">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-16" />
							<TableHead className="w-36">Identificador</TableHead>
							<TableHead className="w-44">Realizado há</TableHead>
							<TableHead className="w-36">Status</TableHead>
							<TableHead>Cliente</TableHead>
							<TableHead className="w-36">Total do pedido</TableHead>
							<TableHead className="w-40" />
							<TableHead className="w-32" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{ordersResult?.orders.map((order) => (
							<OrderTableRow key={order.orderId} order={order} />
						))}
					</TableBody>
				</Table>
			</div>
			{ordersResult && (
				<TablePagination
					pageIndex={ordersResult.meta.pageIndex}
					perPage={ordersResult.meta.perPage}
					totalCount={ordersResult.meta.totalCount}
				/>
			)}
		</div>
	);
};

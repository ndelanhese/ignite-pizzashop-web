import { getOrders } from "@/api/orders/get";
import { Pagination } from "@components/shared/pagination";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";
import { OrderTableFilters } from "./orderTableFilters";
import { OrderTableRow } from "./orderTableRow";

export const OrderTable = async () => {
	const ordersResult = await getOrders({});

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
			<Pagination pageIndex={0} perPage={105} totalCount={10} />
		</div>
	);
};

"use client";

import { approveOrder } from "@/api/order/approve";
import { cancelOrder, revalidateOrderData } from "@/api/order/cancel";
import { deliverOrder } from "@/api/order/deliver";
import { dispatchOrder } from "@/api/order/dispatch";
import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { TableCell, TableRow } from "@components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, Search, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { OrderDetails } from "../orderDetails";
import { OrderStatus } from "../orderStatus";
import { OrderTableRowProps } from "./orderTableRow.types";

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isCanceling, setCanceling] = useState(false);
	const searchParams = useSearchParams();

	const revalidateCache = async () => {
		const params = new URLSearchParams(searchParams.toString()).toString();
		await revalidateOrderData(
			`/orders/${order.orderId}`,
			`/orders${searchParams.toString() ? `?${params}` : ""} `,
		);
	};

	const cancelOrderById = async (orderId: string) => {
		setCanceling(true);
		await cancelOrder({ orderId });
		await revalidateCache();
		setCanceling(false);
	};

	const approveOrderById = async (orderId: string) => {
		setIsLoading(true);
		await approveOrder({ orderId });
		await revalidateCache();
		setIsLoading(false);
	};

	const deliverOrderById = async (orderId: string) => {
		setIsLoading(true);
		await deliverOrder({ orderId });
		await revalidateCache();
		setIsLoading(false);
	};

	const dispatchOrderById = async (orderId: string) => {
		setIsLoading(true);
		await dispatchOrder({ orderId });
		await revalidateCache();
		setIsLoading(false);
	};

	return (
		<TableRow>
			<TableCell>
				<Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="h-3 w-3" />
						</Button>
					</DialogTrigger>
					<OrderDetails orderId={order.orderId} isOpen={isDetailsOpen} />
				</Dialog>
			</TableCell>
			<TableCell className="font-mono text-sm font-medium">
				{order.orderId}
			</TableCell>
			<TableCell className="text-muted-foreground">
				{formatDistanceToNow(order.createdAt, {
					locale: ptBR,
					addSuffix: true,
				})}
			</TableCell>
			<TableCell>
				<OrderStatus status={order.status} />
			</TableCell>
			<TableCell className="font-medium">{order.customerName}</TableCell>
			<TableCell className="font-medium">
				{(order.total / 100).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</TableCell>
			<TableCell>
				{order.status === "pending" && (
					<Button
						variant="outline"
						size="xs"
						onClick={() => approveOrderById(order.orderId)}
						disabled={isLoading || isCanceling}
					>
						<ArrowRight className="mr-2 h-3 w-3" /> Aprovar
					</Button>
				)}
				{order.status === "processing" && (
					<Button
						variant="outline"
						size="xs"
						onClick={() => dispatchOrderById(order.orderId)}
						disabled={isLoading || isCanceling}
					>
						<ArrowRight className="mr-2 h-3 w-3" /> Em entrega
					</Button>
				)}
			</TableCell>
			{order.status === "delivering" && (
				<Button
					variant="outline"
					size="xs"
					onClick={() => deliverOrderById(order.orderId)}
					disabled={isLoading || isCanceling}
				>
					<ArrowRight className="mr-2 h-3 w-3" /> Entregue
				</Button>
			)}
			<TableCell>
				<Button
					variant="ghost"
					size="xs"
					disabled={
						!["pending", "processing"].includes(order.status) || isCanceling
					}
					onClick={() => {
						cancelOrderById(order.orderId);
					}}
				>
					<X className="mr-2 h-3 w-3" /> Cancelar
				</Button>
			</TableCell>
		</TableRow>
	);
};

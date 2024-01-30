import { getOrderDetails } from "@/api/order/get";
import { GetOrderDetailsResponse } from "@/api/order/get/order.types";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import { OrderDetailsSkeleton } from "../orderDetailsSkeleton";
import { OrderStatus } from "../orderStatus";
import { OrderDetailsProps } from "./orderDetails.types";

export const OrderDetails = ({ orderId, isOpen }: OrderDetailsProps) => {
	const [orderDetails, setOrderDetails] = useState<
		GetOrderDetailsResponse | undefined
	>(undefined);

	const getOrderDetailsData = useCallback(async () => {
		const response = await getOrderDetails({ orderId });
		setOrderDetails(response);
	}, [orderId]);

	useEffect(() => {
		if (isOpen) getOrderDetailsData();
	}, [isOpen, getOrderDetailsData]);

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Pedido: {orderId}</DialogTitle>
				<DialogDescription>Detalhes do pedido</DialogDescription>
			</DialogHeader>
			{orderDetails ? (
				<div className="space-y-6">
					<Table>
						<TableBody>
							<TableRow>
								<TableCell className="text-muted-foreground">Status</TableCell>
								<TableCell className="flex justify-end">
									<OrderStatus status={orderDetails.status} />
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="text-muted-foreground">Cliente</TableCell>
								<TableCell className="flex justify-end">
									{orderDetails.customer.name}
								</TableCell>
							</TableRow>{" "}
							<TableRow>
								<TableCell className="text-muted-foreground">
									Telefone
								</TableCell>
								<TableCell className="flex justify-end">
									{orderDetails.customer.phone ?? "Não informado"}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="text-muted-foreground">E-mail</TableCell>
								<TableCell className="flex justify-end">
									{orderDetails.customer.email}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="text-muted-foreground">
									Realizado há
								</TableCell>
								<TableCell className="flex justify-end">
									{" "}
									{formatDistanceToNow(orderDetails.createdAt, {
										locale: ptBR,
										addSuffix: true,
									})}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<Table>
						<TableHeader>
							<TableHead>Produto</TableHead>
							<TableHead className="text-right">Qtd. </TableHead>
							<TableHead className="text-right">Preço</TableHead>
							<TableHead className="text-right">Subtotal</TableHead>
						</TableHeader>
						<TableBody>
							{orderDetails.orderItems.map((product) => (
								<TableRow key={nanoid()}>
									<TableCell>{product.product.name}</TableCell>
									<TableCell className="text-right">
										{product.quantity}
									</TableCell>
									<TableCell className="text-right">
										{(product.priceInCents / 100).toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
									</TableCell>
									<TableCell className="text-right">
										{(
											(product.priceInCents * product.quantity) /
											100
										).toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Total do pedido</TableCell>
								<TableCell className="text-right font-medium">
									{(orderDetails.totalInCents / 100).toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
			) : (
				<OrderDetailsSkeleton />
			)}
		</DialogContent>
	);
};

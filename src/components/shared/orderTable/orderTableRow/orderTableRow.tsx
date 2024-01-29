"use client";

import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { TableCell, TableRow } from "@components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, Search, X } from "lucide-react";
import { useState } from "react";
import { OrderDetails } from "../orderDetails";
import { OrderStatus } from "../orderStatus";
import { OrderTableRowProps } from "./orderTableRow.types";

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
				<Button variant="outline" size="xs">
					<ArrowRight className="mr-2 h-3 w-3" /> Aprovar
				</Button>
			</TableCell>
			<TableCell>
				<Button variant="ghost" size="xs">
					<X className="mr-2 h-3 w-3" /> Cancelar
				</Button>
			</TableCell>
		</TableRow>
	);
};

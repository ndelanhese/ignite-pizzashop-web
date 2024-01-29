import { twMerge } from "tailwind-merge";
import {
	OrderStatus as StatusTypes,
	OrderStatusProps,
} from "./orderStatus.types";

const orderStatusMap: Record<StatusTypes, string> = {
	pending: "Pendente",
	canceled: "Cancelado",
	delivered: "Entregue",
	delivering: "Em entrega",
	processing: "Em preparo",
};

const orderStatusColorMap: Record<StatusTypes, string> = {
	pending: "bg-slate-400",
	canceled: "bg-rose-500",
	delivered: "bg-emerald-500",
	delivering: "bg-amber-500",
	processing: "bg-amber-500",
};

export const OrderStatus = ({ status }: OrderStatusProps) => (
	<div className="flex items-center gap-2">
		<span
			className={twMerge("h-2 w-2 rounded-full", orderStatusColorMap[status])}
		/>
		<span className="font-medium text-muted-foreground">
			{orderStatusMap[status]}
		</span>
	</div>
);

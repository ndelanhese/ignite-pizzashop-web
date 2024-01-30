"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ordersFiltersSchema } from "./orderTableFilters.schema";
import { OrderFiltersSchema } from "./orderTableFilters.types";

export const OrderTableFilters = () => {
	const { get: getSearchParam, entries } = useSearchParams();
	const { push } = useRouter();
	const pathname = usePathname();

	const customerName = getSearchParam("customer_name");
	const orderID = getSearchParam("order_id");
	const status = getSearchParam("status") ?? "all";

	const { register, handleSubmit, reset, control } =
		useForm<OrderFiltersSchema>({
			resolver: zodResolver(ordersFiltersSchema),
			defaultValues: {
				customerName: customerName ?? "",
				orderId: orderID ?? "",
				status: status ?? "all",
			},
		});

	const handleFilter: SubmitHandler<OrderFiltersSchema> = ({
		customerName,
		orderId,
		status,
	}) => {
		const current = new URLSearchParams(Array.from(entries()));

		if (customerName) {
			current.set("customer_name", customerName);
		} else {
			current.delete("customer_name");
		}

		if (orderId) {
			current.set("order_id", orderId);
		} else {
			current.delete("order_id");
		}

		if (status) {
			current.set("status", status);
		} else {
			current.delete("status");
		}

		const search = current.toString();
		const query = search ? `?${search}` : "";

		push(`${pathname}${query}`);
	};

	const handleClearFilters = () => {
		push(pathname);
		reset({
			customerName: "",
			orderId: "",
			status: undefined,
		});
	};

	return (
		<form
			className="flex items-center gap-2"
			onSubmit={handleSubmit(handleFilter)}
		>
			<span className="text-sm font-semibold">Filtros:</span>
			<Input
				placeholder="ID do pedido"
				className="h-8 w-48"
				{...register("orderId")}
			/>
			<Input
				placeholder="Nome do cliente"
				className="h-8 w-80"
				{...register("customerName")}
			/>

			<Controller
				name="status"
				control={control}
				defaultValue="all"
				render={({ field: { name, onChange, value, disabled } }) => (
					<Select
						defaultValue="all"
						name={name}
						onValueChange={onChange}
						value={value}
						disabled={disabled}
					>
						<SelectTrigger className="h-8 w-44">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos status</SelectItem>
							<SelectItem value="pending">Pendente</SelectItem>
							<SelectItem value="canceled">Cancelado</SelectItem>
							<SelectItem value="processing">Em preparo</SelectItem>
							<SelectItem value="delivering">Em entrega</SelectItem>
							<SelectItem value="delivered">Entregue</SelectItem>
						</SelectContent>
					</Select>
				)}
			/>

			<Button type="submit" variant="secondary" size="xs">
				<Search className="mr-2 w-4 h-4" />
				Filtrar resultados
			</Button>

			<Button
				type="button"
				variant="outline"
				size="xs"
				onClick={handleClearFilters}
			>
				<X className="mr-2 w-4 h-4" />
				Remover filtros
			</Button>
		</form>
	);
};

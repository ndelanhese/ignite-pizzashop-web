export type OrderStatus =
	| "pending"
	| "canceled"
	| "processing"
	| "delivering"
	| "delivered";

export type OrderStatusProps = {
	status: OrderStatus;
};

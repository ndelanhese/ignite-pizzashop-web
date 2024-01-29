export type GetOrdersProps = {
	pageIndex?: number | null;
};

export type GetOrdersResponse = {
	orders: {
		orderId: string;
		createdAt: string;
		status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
		customerName: string;
		total: number;
	}[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
};

export type GetOrderDetailsProps = {
	orderId?: string | null;
};

export type GetOrderDetailsResponse = {
	status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
	id: string;
	createdAt: string;
	totalInCents: number;
	customer: {
		name: string;
		email: string;
		phone: string | null;
	};
	orderItems: {
		id: string;
		priceInCents: number;
		quantity: number;
		product: {
			name: string;
		};
	}[];
};

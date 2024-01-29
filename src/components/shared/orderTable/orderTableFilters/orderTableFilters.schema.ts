import { z } from "zod";

export const ordersFiltersSchema = z.object({
	orderId: z.string().optional(),
	customerName: z.string().optional(),
	status: z.string().optional(),
});

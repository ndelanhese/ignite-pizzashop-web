import { z } from "zod";
import { ordersFiltersSchema } from "./orderTableFilters.schema";

export type OrderFiltersSchema = z.infer<typeof ordersFiltersSchema>;

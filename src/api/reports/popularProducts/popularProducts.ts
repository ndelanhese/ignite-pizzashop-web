import { api } from "@/services/api";
import { PopularProductsResponse } from "./popularProducts.types";

export const getPopularProducts = async () => {
	return await api<PopularProductsResponse>("/metrics/popular-products");
};

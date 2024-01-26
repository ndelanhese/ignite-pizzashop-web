import { api } from "@services/api";
import { GetManagedRestaurant } from "./managedRestaurant.types";

export const getManagedRestaurant = async () => {
	return await api<GetManagedRestaurant>("/managed-restaurant");
};

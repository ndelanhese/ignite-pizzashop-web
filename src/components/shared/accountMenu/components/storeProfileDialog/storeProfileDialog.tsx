import { getManagedRestaurant } from "@/api/managedRestaurant/managedRestaurant";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
} from "@components/ui/dialog";
import { StoreProfileForm } from "./components/form";

export const StoreProfileDialog = async () => {
	const managedRestaurantData = await getManagedRestaurant();

	return (
		<DialogContent>
			<DialogHeader>Perfil da loja</DialogHeader>
			<DialogDescription>
				Atualize as informações do seu estabelecimento visíveis ao seu cliente
			</DialogDescription>

			<StoreProfileForm
				description={managedRestaurantData?.description ?? ""}
				name={managedRestaurantData?.name ?? ""}
			/>
		</DialogContent>
	);
};

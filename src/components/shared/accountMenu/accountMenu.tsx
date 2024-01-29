import { getManagedRestaurant } from "@/api/managedRestaurant/managedRestaurant";
import { getProfile } from "@api/profile/get";
import { Button } from "@components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/ui/dropdownMenu";

import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { Building, ChevronDown, User } from "lucide-react";
import { StoreProfileDialog } from "./components/storeProfileDialog";
import { SignOutButton } from "./components/storeProfileDialog/components/signOutButton";

export const AccountMenu = async () => {
	const profileData = await getProfile();
	const managedRestaurantData = await getManagedRestaurant();

	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						className="flex items-center gap-2 select-none"
					>
						<span className="hidden sm:block">
							{managedRestaurantData?.name}
						</span>

						<User className="w-5 h-5 sm:hidden" />
						<ChevronDown className="w-4 h-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-56">
					<DropdownMenuLabel className="flex flex-col">
						<span>{profileData?.name}</span>{" "}
						<span className="text-sm font-normal text-muted-foreground">
							{profileData?.email}
						</span>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DialogTrigger asChild>
						<DropdownMenuItem>
							<Building className="w-4 h-4 mr-2" />
							<span>Perfil da loja</span>
						</DropdownMenuItem>
					</DialogTrigger>
					<DropdownMenuItem className="text-rose-500 dark:text-rose-400">
						<SignOutButton />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<StoreProfileDialog />
		</Dialog>
	);
};

import { Button } from "@components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/ui/dropdownMenu";
import { Skeleton } from "@components/ui/skeleton";

import { Building, ChevronDown, LogOut, User } from "lucide-react";

export const AccountMenuSkeleton = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex items-center gap-2 select-none"
				>
					<span className="hidden sm:block">
						<Skeleton className="h-4 w-36" />
					</span>

					<User className="w-5 h-5 sm:hidden" />
					<ChevronDown className="w-4 h-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel className="flex flex-col">
					<div className="space-y-1.5">
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-3 w-24" />
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Building className="w-4 h-4 mr-2" />
					<span>Perfil da loja</span>
				</DropdownMenuItem>
				<DropdownMenuItem className="text-rose-500 dark:text-rose-400">
					<LogOut className="w-4 h-4 mr-2" />
					<span>Sair</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@components/ui/dropdownMenu";

import { ChevronDown, User } from "lucide-react";

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
				<div />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

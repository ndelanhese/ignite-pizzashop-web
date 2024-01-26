import { NavLink } from "@components/shared/navLink";
import { ThemeToggle } from "@components/theme/themeToggle";
import { Separator } from "@components/ui/separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Suspense } from "react";
import { AccountMenu, AccountMenuSkeleton } from "../accountMenu";

export const Header = () => {
	return (
		<header className="border-b flex h-16 items-center gap-4 sm:gap-6 px-4 sm:px-6">
			<div className="inline-flex sm:gap-6 gap-4">
				<Pizza className="h-6 w-6" />
				<Separator orientation="vertical" className="h-6" />
			</div>

			<nav className="flex items-center space-x-4 lg:space-x-6">
				<NavLink href={"/dashboard"}>
					<Home className="h-4 w-4" />
					Início
				</NavLink>
				<NavLink href={"/orders"}>
					<UtensilsCrossed className="h-4 w-4" />
					Pedidos
				</NavLink>
			</nav>
			<div className="ml-auto flex items-center gap-2">
				<ThemeToggle />
				<Suspense fallback={<AccountMenuSkeleton />}>
					<AccountMenu />
				</Suspense>
			</div>
		</header>
	);
};

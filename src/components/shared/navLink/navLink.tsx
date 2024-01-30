"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinkProps } from "./navLink.types";

export const NavLink = (props: NavLinkProps) => {
	const pathName = usePathname();
	return (
		<Link
			{...props}
			data-current={pathName === props.href}
			className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
		/>
	);
};

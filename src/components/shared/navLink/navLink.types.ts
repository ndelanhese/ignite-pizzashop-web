import { LinkProps } from "next/link";
import { ReactNode } from "react";

export type NavLinkProps = LinkProps & {
	children: ReactNode;
};

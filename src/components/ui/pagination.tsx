import { MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button, ButtonProps, buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import Link from "next/link";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
	<nav
		role="navigation"
		aria-label="pagination"
		className={cn("mx-auto flex w-full justify-center", className)}
		{...props}
	/>
);

const PaginationContent = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("flex flex-row items-center gap-1", className)}
		{...props}
	/>
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ButtonProps, "size"> &
	React.ComponentProps<typeof Link>;

const PaginationLink = ({
	className,
	isActive,
	size = "icon",
	...props
}: PaginationLinkProps) => (
	<PaginationItem>
		<Link
			aria-current={isActive ? "page" : undefined}
			className={cn(
				buttonVariants({
					variant: isActive ? "outline" : "ghost",
					size,
				}),
				className,
				"h-8 w-8 p-0",
			)}
			{...props}
		/>
	</PaginationItem>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
	className,
	label,
	icon: Icon,
	...props
}: React.ComponentProps<typeof PaginationLink> & {
	label?: string;
	icon: React.ElementType;
}) => (
	<PaginationLink
		aria-label="Go to previous page"
		size="default"
		className={cn("gap-1 pl-2.5", className)}
		{...props}
	>
		<Button variant="outline" className="h-8 w-8 p-0">
			<Icon className="h-4 w-4" />
			{label && <span className="sr-only">{label}</span>}
		</Button>
	</PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
	className,
	label,
	icon: Icon,
	...props
}: React.ComponentProps<typeof PaginationLink> & {
	label?: string;
	icon: React.ElementType;
}) => (
	<PaginationLink
		aria-label="Go to next page"
		size="default"
		className={cn("gap-1 pr-2.5", className)}
		{...props}
	>
		<Button variant="outline" className="h-8 w-8 p-0">
			<Icon className="h-4 w-4" />
			{label && <span className="sr-only">{label}</span>}
		</Button>
	</PaginationLink>
);

const PaginationEllipsis = ({
	className,
	...props
}: React.ComponentProps<"span">) => (
	<span
		aria-hidden
		className={cn("flex h-9 w-9 items-center justify-center", className)}
		{...props}
	>
		<MoreHorizontal className="h-4 w-4" />
		<span className="sr-only">More pages</span>
	</span>
);

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};

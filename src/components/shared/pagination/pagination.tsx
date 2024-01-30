"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@components/ui/pagination";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { PaginationProps } from "./pagination.types";

export const TablePagination = ({
	pageIndex,
	perPage,
	totalCount,
}: PaginationProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const pages = Math.ceil(totalCount / perPage) || 1;
	const previousPage = pageIndex <= 1 ? 1 : pageIndex;
	const nextPage = pageIndex >= pages ? pages : pageIndex + 2;

	const handleChangePage = useCallback(
		(page: number) => {
			const entries = searchParams?.entries();
			if (!entries) return "";
			const current = new URLSearchParams(Array.from(entries));

			current.set("page", page.toString());

			const search = current.toString();
			const query = search ? `?${search}` : "";

			return `${pathname}${query}`;
		},
		[pathname, searchParams?.entries],
	);

	return (
		<div className="flex items-center justify-between">
			<span className="text-sm text-muted-foreground">
				Total de {totalCount} item(s)
			</span>

			<div className="flex items-center gap-6 lg:gap-8">
				<span className="w-full text-sm font-medium">
					Página {pageIndex + 1} de {pages}
				</span>

				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href={handleChangePage(1)}
								icon={ChevronsLeft}
								label="Primeira página"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious
								href={handleChangePage(previousPage)}
								icon={ChevronLeft}
								label="Página anterior"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								href={handleChangePage(nextPage)}
								icon={ChevronRight}
								label="Próxima página"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								href={handleChangePage(pages)}
								icon={ChevronsRight}
								label="Ultima página"
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

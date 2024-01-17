import {
	Pagination as ShadcnPagination,
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
import { PaginationProps } from "./pagination.types";

export const Pagination = ({
	pageIndex,
	perPage,
	totalCount,
}: PaginationProps) => {
	const pages = Math.ceil(totalCount / perPage) || 1;
	return (
		<div className="flex items-center justify-between">
			<span className="text-sm text-muted-foreground">
				Total de {totalCount} item(s)
			</span>

			<div className="flex items-center gap-6 lg:gap-8">
				<span className="w-full text-sm font-medium">
					Página {pageIndex + 1} de {pages}
				</span>

				<ShadcnPagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href={"#"}
								icon={ChevronsLeft}
								label="Primeira página"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious
								href={"#"}
								icon={ChevronLeft}
								label="Página anterior"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								href={"#"}
								icon={ChevronRight}
								label="Próxima página"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								href={"#"}
								icon={ChevronsRight}
								label="Ultima página"
							/>
						</PaginationItem>
					</PaginationContent>
				</ShadcnPagination>
			</div>
		</div>
	);
};

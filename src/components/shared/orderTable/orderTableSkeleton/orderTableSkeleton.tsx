import { Pagination } from "@components/shared/pagination";
import { Button } from "@components/ui/button";
import { Skeleton } from "@components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";
import { Search } from "lucide-react";
import { nanoid } from "nanoid";
import { OrderTableFilters } from "../orderTableFilters";

export const OrderTableSkeleton = async () => {
	return (
		<div className="space-y-2.5 mt-4">
			<OrderTableFilters />
			<div className="border rounded-md">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-16" />
							<TableHead className="w-36">Identificador</TableHead>
							<TableHead className="w-44">Realizado há</TableHead>
							<TableHead className="w-36">Status</TableHead>
							<TableHead>Cliente</TableHead>
							<TableHead className="w-36">Total do pedido</TableHead>
							<TableHead className="w-40" />
							<TableHead className="w-32" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 10 }).map(() => (
							<TableRow key={nanoid()}>
								<TableCell>
									<Button disabled variant="outline" size="xs">
										<Search className="h-3 w-3" />
									</Button>
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[10.75rem]" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[9.25rem]" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[6.875rem]" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[12.5rem]" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[4rem]" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[5.75rem]" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-[5.75rem]" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			{<Pagination pageIndex={0} perPage={10} totalCount={10} />}
		</div>
	);
};

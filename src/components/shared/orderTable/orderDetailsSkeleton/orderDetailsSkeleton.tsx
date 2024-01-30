import { Skeleton } from "@components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";
import { nanoid } from "nanoid";

export const OrderDetailsSkeleton = () => {
	return (
		<div className="space-y-6">
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="text-muted-foreground">Status</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-20" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">Cliente</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-[10.25rem]" />
						</TableCell>
					</TableRow>{" "}
					<TableRow>
						<TableCell className="text-muted-foreground">Telefone</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-[8.75rem]" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">E-mail</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-[12.5rem]" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">
							Realizado há
						</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-[9.25rem]" />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<Table>
				<TableHeader>
					<TableHead>Produto</TableHead>
					<TableHead className="text-right">Qtd. </TableHead>
					<TableHead className="text-right">Preço</TableHead>
					<TableHead className="text-right">Subtotal</TableHead>
				</TableHeader>
				<TableBody>
					{[Array.from({ length: 2 })].map(() => (
						<TableRow key={nanoid()}>
							<TableCell>
								<Skeleton className="h-5 w-[8.75rem]" />
							</TableCell>
							<TableCell className="text-right">
								<Skeleton className="ml-auto h-5 w-3" />
							</TableCell>
							<TableCell className="text-right">
								<Skeleton className="ml-auto h-5 w-12" />
							</TableCell>
							<TableCell className="text-right">
								<Skeleton className="ml-auto h-5 w-12" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total do pedido</TableCell>
						<TableCell className="text-right font-medium">
							<Skeleton className="h-5 w-20" />
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
};

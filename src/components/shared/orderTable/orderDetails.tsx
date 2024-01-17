import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";

export const OrderDetails = () => (
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Pedido: asda121o2uh3i1u2hg</DialogTitle>
			<DialogDescription>Detalhes do pedido</DialogDescription>
		</DialogHeader>
		<div className="space-y-6">
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="text-muted-foreground">Status</TableCell>
						<TableCell className="flex justify-end">
							<div className="flex items-center gap-2">
								<span className="rounded-full h-2 w-2 bg-slate-200" />
								<span className="font-medium text-muted-foreground">
									Pendente
								</span>
							</div>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">Cliente</TableCell>
						<TableCell className="flex justify-end">Nathan Delanhese</TableCell>
					</TableRow>{" "}
					<TableRow>
						<TableCell className="text-muted-foreground">Telefone</TableCell>
						<TableCell className="flex justify-end">(11) 1234-5678)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">E-mail</TableCell>
						<TableCell className="flex justify-end">
							ndelanhese@gmail.com
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-muted-foreground">
							Realizado há
						</TableCell>
						<TableCell className="flex justify-end">há 3 minutos</TableCell>
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
					<TableRow>
						<TableCell>Pizza Peperoni Família</TableCell>
						<TableCell className="text-right">2</TableCell>
						<TableCell className="text-right">R$ 69,90</TableCell>
						<TableCell className="text-right">R$ 139,80</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Pizza Calabresa</TableCell>
						<TableCell className="text-right">1</TableCell>
						<TableCell className="text-right">R$ 50,00</TableCell>
						<TableCell className="text-right">R$ 50,00</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total do pedido</TableCell>
						<TableCell className="text-right font-medium">R$ 189,80</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	</DialogContent>
);

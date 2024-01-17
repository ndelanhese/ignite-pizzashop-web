import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { TableCell, TableRow } from "@components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./orderDetails";

export const OrderTableRow = () => (
	<TableRow>
		<TableCell>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline" size="xs">
						<Search className="h-3 w-3" />
					</Button>
				</DialogTrigger>
				<OrderDetails />
			</Dialog>
		</TableCell>
		<TableCell className="font-mono text-sm font-medium">
			ad11231i2h3gb1i2hg3
		</TableCell>
		<TableCell className="text-muted-foreground">há 15 minutos</TableCell>
		<TableCell>
			<div className="flex items-center gap-2">
				<span className="rounded-full h-2 w-2 bg-slate-200" />
				<span className="font-medium text-muted-foreground">Pendente</span>
			</div>
		</TableCell>
		<TableCell className="font-medium">Nathan Delanhese</TableCell>
		<TableCell className="font-medium">R$ 149,90</TableCell>
		<TableCell>
			<Button variant="outline" size="xs">
				<ArrowRight className="mr-2 h-3 w-3" /> Aprovar
			</Button>
		</TableCell>
		<TableCell>
			<Button variant="ghost" size="xs">
				<X className="mr-2 h-3 w-3" /> Cancelar
			</Button>
		</TableCell>
	</TableRow>
);

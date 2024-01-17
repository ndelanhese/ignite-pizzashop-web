import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-2">
			<h1 className="text-4xl font-bold tracking-tight">
				Página não encontrada
			</h1>
			<p>
				Voltar para o{" "}
				<Link href="/" className="text-sky-500 dark:text-sky-400">
					Dashboard
				</Link>
			</p>
		</div>
	);
};

export default NotFound;

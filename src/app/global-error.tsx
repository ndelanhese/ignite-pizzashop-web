"use client";

const GlobalErrorPage = ({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) => {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-2">
			<h1 className="text-4xl font-bold tracking-tight">
				Whoops, algo aconteceu
			</h1>
			<p className="text-accent-foreground">
				Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
			</p>
			<pre>{error.message || JSON.stringify(error)}</pre>
			<p>
				Tentar novamente:
				<button
					type="button"
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</button>
			</p>
		</div>
	);
};

export default GlobalErrorPage;

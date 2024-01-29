import { Button } from "@components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

import { SignInForm } from "./client/form";

export const metadata: Metadata = {
	title: "Login",
};

const SignInPage = async () => {
	return (
		<div className="w-full max-w-[24rem] p-8">
			<Button asChild className="absolute right-8 top-8" variant="ghost">
				<Link href={"sign-up"}>Novo estabelecimento</Link>
			</Button>
			<div className="flex flex-col justify-center gap-6">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Acessar painel
					</h1>
					<p className="text-sm text-muted-foreground">
						Acompanhe suas vendas pelo painel do parceiro
					</p>
				</div>
				<SignInForm />
			</div>
		</div>
	);
};

export default SignInPage;

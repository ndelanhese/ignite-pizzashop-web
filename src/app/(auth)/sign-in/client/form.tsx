"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { signIn } from "@api/signIn";
import { useSearchParams } from "next/navigation";
import { SignInFormSchema, signInFormSchema } from "./form.schema";

export const SignInForm = () => {
	const { get } = useSearchParams();

	const {
		register,
		handleSubmit,
		setFocus,
		formState: { isSubmitting, errors },
	} = useForm<SignInFormSchema>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: get("email") ?? "",
		},
	});

	const retrySignIn: SubmitHandler<SignInFormSchema> = useCallback(
		async (data) => {
			await handleSignIn(data);
		},
		[],
	);

	const handleSignIn: SubmitHandler<SignInFormSchema> = useCallback(
		async (data) => {
			await signIn(data);

			toast.success("Enviamos um link de autenticação para seu e-mail", {
				action: {
					label: "Reenviar",
					onClick: () => retrySignIn(data),
				},
			});
		},
		[retrySignIn],
	);

	useEffect(() => {
		setFocus("email");
	}, [setFocus]);

	return (
		<form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
			<div className="space-y-2">
				<Label htmlFor="email">Seu e-mail</Label>
				<Input
					id="email"
					type="email"
					placeholder="name@example.com"
					{...register("email")}
				/>
				{errors.email && (
					<span className="text-xs text-destructive">
						{errors.email.message}
					</span>
				)}
			</div>
			<Button
				type="submit"
				className="text-md w-full font-semibold tracking-tighter"
				disabled={isSubmitting}
			>
				Acessar painel
			</Button>
		</form>
	);
};

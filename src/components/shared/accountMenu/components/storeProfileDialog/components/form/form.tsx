"use client";

import { revalidateProfileData, updateProfile } from "@/api/profile/update";
import { Button } from "@components/ui/button";
import { DialogClose, DialogFooter } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { storeProfileSchema } from "./form.schema";
import { StoreProfileFormProps, StoreProfileSchema } from "./form.types";

export const StoreProfileForm = ({
	description,
	name,
}: StoreProfileFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<StoreProfileSchema>({
		resolver: zodResolver(storeProfileSchema),
		values: {
			name: name ?? "",
			description: description ?? "",
		},
	});

	const handleUpdateProfile: SubmitHandler<StoreProfileSchema> = useCallback(
		async ({ description, name }) => {
			try {
				await updateProfile({
					name,
					description,
				});
				revalidateProfileData("/me");
				toast.success("Perfil atualizado com sucesso!");
			} catch {
				toast.error("Falha ao atualizar o perfil, tente novamente!");
			}
		},
		[],
	);

	return (
		<form onSubmit={handleSubmit(handleUpdateProfile)}>
			<div className="space-y-4 py-4">
				<div className="grid grid-cols-4 items-center gap-4">
					<Label className="text-right" htmlFor="name">
						Nome
					</Label>
					<Input className="col-span-3" id="name" {...register("name")} />
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label className="text-right" htmlFor="description">
						Descrição
					</Label>
					<Textarea
						className="col-span-3"
						id="description"
						{...register("description")}
					/>
				</div>
			</div>
			<DialogFooter>
				<DialogClose asChild>
					<Button variant="ghost" type="button">
						Cancelar
					</Button>
				</DialogClose>
				<Button type="submit" variant="success" disabled={isSubmitting}>
					Salvar
				</Button>
			</DialogFooter>
		</form>
	);
};

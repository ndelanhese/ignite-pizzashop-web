import { api } from "@services/api";
import { SignInBody } from "./signIn.types";

export const signIn = async ({ email }: SignInBody) => {
	try {
		await api(
			"/authenticate",
			{ email },
			{
				method: "POST",
			},
		);
	} catch (error) {
		console.error(error);
	}
};

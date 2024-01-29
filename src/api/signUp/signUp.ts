import { api } from "@services/api";
import { SignUpBody } from "./signUp.types";

export const signUp = async (data: SignUpBody) => {
	try {
		await api("/restaurants", data, {
			method: "POST",
		});
	} catch (error) {
		console.error(error);
	}
};

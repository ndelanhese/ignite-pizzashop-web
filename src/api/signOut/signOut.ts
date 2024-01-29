import { api } from "@services/api";

export const signOut = async () => {
	await api("/sign-out", undefined, {
		method: "POST",
	});
};

import { api } from "@services/api";
import { GetProfileResponse } from "./profile.types";

export const getProfile = async () => {
	return await api<GetProfileResponse>("/me");
};

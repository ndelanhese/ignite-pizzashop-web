"use server";

import { api } from "@services/api";
import { revalidateTag } from "next/cache";
import { UpdateProfileBody } from "./profile.types";

export const updateProfile = async (data: UpdateProfileBody) => {
	return await api("/profile", data, { method: "PUT" });
};

export const revalidateProfileData = (tag: string) => {
	revalidateTag(tag);
};

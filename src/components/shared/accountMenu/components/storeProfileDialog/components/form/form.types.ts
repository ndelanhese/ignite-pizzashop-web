import { z } from "zod";
import { storeProfileSchema } from "./form.schema";

export type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export type StoreProfileFormProps = {
	name: string | null;
	description: string | null;
};

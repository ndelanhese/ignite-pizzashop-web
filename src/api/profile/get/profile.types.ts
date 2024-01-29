export type GetProfileResponse = {
	id: string;
	name: string;
	email: string;
	phone: string | null;
	role: "manager" | "customer";
	createdAt: Date | null;
	updatedAt: Date | null;
};

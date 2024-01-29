export type GetManagedRestaurant = {
	name: string;
	id: string;
	createdAt: Date | null;
	updatedAt: Date | null;
	description: string | null;
	managerId: string | null;
};

export type GetDailyRevenueDataResponse = {
	date: string;
	receipt: number;
}[];

export type GetDailyRevenueDataProps = {
	from?: Date;
	to?: Date;
};

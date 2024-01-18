import { env } from "@env";

export const api = async <T>(
	path: string,
	isNextApi = false,
	init?: RequestInit,
) => {
	const BASE_URL = env.NEXT_PUBLIC_APP_URL;
	const PORT = env.NEXT_PUBLIC_APP_PORT;

	const apiPrefix = "/api";
	const route = isNextApi ? apiPrefix.concat(path) : path;
	const url = new URL(route, `${BASE_URL}:${PORT}`);

	const response = await fetch(url, init);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data: T = await response.json();

	return data;
};

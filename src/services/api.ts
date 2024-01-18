import { env } from "@env";

export const api = async <T>(
	path: string,
	body?: object,
	init?: RequestInit,
	isNextApi = false,
) => {
	const BASE_URL = env.NEXT_PUBLIC_API_URL;
	const PORT = env.NEXT_PUBLIC_API_PORT;

	const apiPrefix = "/api";
	const route = isNextApi ? apiPrefix.concat(path) : path;
	const url = new URL(route, `${BASE_URL}:${PORT}`);

	const response = await fetch(url, {
		...init,
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		...(body ? { body: JSON.stringify(body) } : undefined),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data: T = await response.json();

	return data;
};

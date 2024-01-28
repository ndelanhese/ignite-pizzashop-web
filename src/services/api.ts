import { env } from "@env";

export const api = async <T>(
	path: string,
	body?: object,
	init?: RequestInit & { isNextApi?: boolean },
) => {
	const BASE_URL = env.NEXT_PUBLIC_API_URL;
	const PORT = env.NEXT_PUBLIC_API_PORT;
	const BASE_APP_URL = env.NEXT_PUBLIC_APP_URL;
	const APP_PORT = env.NEXT_PUBLIC_APP_PORT;

	const apiPrefix = "/api";
	const { isNextApi, ...restInit } = init ?? {};
	const route = isNextApi ? apiPrefix.concat(path) : path;
	const base = isNextApi
		? `${BASE_APP_URL}:${APP_PORT}`
		: `${BASE_URL}:${PORT}`;
	const url = new URL(route, base);

	const isServer = typeof window === "undefined";
	const { cookies } = isServer
		? await import("next/headers")
		: { cookies: () => "" };

	const { next } = restInit ?? {};
	const { tags } = next ?? {};
	const cacheTag = tags ?? [path];

	const response = await fetch(url, {
		...restInit,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			...(isServer ? { Cookie: cookies().toString() } : undefined),
		},
		...(body ? { body: JSON.stringify(body) } : undefined),
		...(!isServer ? { credentials: "include" } : undefined),
		...(next ? { next } : { next: { tags: cacheTag } }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data: T = response.body ? await response.json() : undefined;

	if (env.NEXT_PUBLIC_API_DELAY) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
	}

	return data;
};

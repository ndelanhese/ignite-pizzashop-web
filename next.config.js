/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

module.exports = nextConfig;

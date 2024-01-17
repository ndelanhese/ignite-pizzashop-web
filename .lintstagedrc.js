const path = require("path");

const handleBuildEslintCommand = (filenames) =>
	`biome check --apply ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" ")}`;

module.exports = {
	"*.{js,ts,tsx}": ["biome check --apply", handleBuildEslintCommand],
};

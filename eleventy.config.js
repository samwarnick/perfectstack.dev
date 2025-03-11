export default async function(eleventyConfig) {
	eleventyConfig.setLiquidOptions({
		dynamicPartials: false,
		jsTruthy: true,
	});

	eleventyConfig.addGlobalData("layout", "layouts/base.liquid");

	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})

}

export const config = {
	dir: {
		input: "content",
		includes: "../_includes",
	}
}
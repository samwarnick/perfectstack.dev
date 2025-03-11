import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import {
	transformerNotationFocus,
} from "@shikijs/transformers";

export default async function(eleventyConfig) {
	const options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	let markdownLib = MarkdownIt(options)
		.use(
			await Shiki({
				theme: "everforest-light",
				transformers: [transformerNotationFocus()],
			}),
		);
	eleventyConfig.setLibrary("md", markdownLib);

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
module.exports = {
	tags: [
		"me"
	],
	"layout": "layouts/page.njk",
	eleventyComputed: {
		pageGraphic: data => "graphic_page-" + data.graphic,
		openGraph: data => "opengraph-" + data.graphic
	}
};

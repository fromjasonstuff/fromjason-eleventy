module.exports = {
	tags: [
		"homepage"
	],
	"layout": "layouts/home.njk",
	permalink: "/p/{{ page.fileSlug }}/",
	"numberOfLatestPostsToShow": "10",
	eleventyComputed: {
		openGraph: data => "opengraph-" + data.plot + ".png",
		logo: data => "logo-" + data.plot + ".svg"
	}
};

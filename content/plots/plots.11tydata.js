module.exports = {
	tags: [
		"homepage"
	],
	"layout": "layouts/home.njk",
	permalink: "/p/{{ page.fileSlug }}/",
	"numberOfLatestPostsToShow": "10",
	eleventyComputed: {
		openGraph: data => data.plot,
		logo: data => "logo-" + data.plot + ".svg"
	}
};

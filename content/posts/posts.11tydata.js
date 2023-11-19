module.exports = {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	"permalink": "/p/{{ sub | slugify }}/{{ title | slugify }}/",
	eleventyComputed: {
		rssDir: data => '/p/' + data.sub,
		postGraphic: data => "graphic-" + data.graphic,
		openGraph: data => "opengraph-" + data.graphic
	}
};

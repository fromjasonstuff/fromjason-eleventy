module.exports = {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	"permalink": "/p/{{ sub | slugify }}/{{ title | slugify }}/",
	eleventyComputed: {
		rssDir: data => '/p/' + data.sub
	}
};

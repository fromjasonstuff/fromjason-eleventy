module.exports = {
	"layout": "layouts/page.njk",
	permalink: "/p/{{ plot | slugify }}/all/",
	eleventyComputed: {
		title: data => "All " + data.plot + " posts"
	}
};

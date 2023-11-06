// series home pages go in the series input folder.
// series posts still go in the posts input folder with seriesTitle and sub front matter.
module.exports = {
	"layout": "layouts/page.njk",
	permalink: "/p/{{ sub | slugify }}/s/{{ seriesID | slugify }}/"
};
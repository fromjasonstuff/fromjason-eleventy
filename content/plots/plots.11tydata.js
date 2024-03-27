module.exports = {
	tags: [
		"homepage"
	],
	"layout": "layouts/plot.njk",
	permalink: "/p/{{ page.fileSlug }}/",
	"numberOfLatestPostsToShow": "10",
    eleventyComputed: {
    	type: data => "Digital Garden Plot",
        // Compute the mastheadLogoUrl based on plotID
        mastheadLogoUrl: data => {
            // Check if plotID is available and corresponds to a section in the global data
            if (data.plotID && data.plotInfo && data.plotInfo[data.plotID]) {
                // Use the 'name' property from the corresponding plotInfo to construct the logo file name
                let logoName = `logo-${data.plotInfo[data.plotID].name}.svg`.replace(/\s+/g, '-').toLowerCase();

                // Return the complete URL for the logo
                return `${data.directories.imgDir}${logoName}`;
            }

            return `${data.site.mastHeadLogoPath}`;
        },
        // Compute the openGraphURL based on plotID
         openGraphURL: data => {
            // Check if plotID is available and corresponds to a section in the global data
            if (data.plotID && data.plotInfo && data.plotInfo[data.plotID]) {
                // Use the 'name' property from the corresponding plotInfo to construct the logo file name
                let ogGraph = `${data.imgPrefixes.imgPrefixOG}${data.plotInfo[data.plotID].name}.png`.replace(/\s+/g, '-').toLowerCase();

                // Return the complete URL for the logo
                return `${data.site.url}${data.directories.imgDir}${ogGraph}`;
            }

            return `${data.site.openGraphImg}`;
        },
    }
}
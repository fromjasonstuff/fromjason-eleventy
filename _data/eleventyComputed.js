// directories
const imgDirPath = "/img/";
const plotDirPath = "/p/";
const feedDirPath = "/feed/";
const meDirPath = "/me/";
const robotsDirFile ="/robots.txt";
// rss file names
const rssXmlFile = "feed.xml";
const rssJsonFile = "feed.json";
// image prefixes
const imgPrefixMasthead = "logo-";
const imgPrefixFooter = "footer-";
// global author info
const authorName = "Jason Velazquez";
const authorEmail = "inbox@jvelazquez.email";
// other
const primaryLanguage = "en";

module.exports = { 
	directories: {
		rssXmlFileName: data => `${rssXmlFile}`,
		rssJsonFileName: data => `${rssJsonFile}`,
		plotDir: "/p/",
		imgDir: data => `${imgDirPath}`,
		plotDir: data => `${plotDirPath}`,
		feedDir: "/feed/",
		meDir: data => `${meDirPath}`,
		imgPreMasthead: data => `${imgPrefixMasthead}`,
	
	},
	imgPrefixes: {
		imgPrefixOG: "opengraph-",
	},
	site: {
		name: "from jason",
		description: "Odes & Satires, and other matters of stuff & things.",
		url: "https://fromjason.xyz",
		language: data => `${primaryLanguage}`,
		version: "2.3.0",
		rssDir: "/feed/",
		versionWriteUpUrl: data => `${data.site.url}${plotDirPath}${data.plotInfo.p001.name}/from-jason-2-0-is-an-11ty-powered-digital-garden-with-multiple-plots/`,
		mastHeadLogoFile: data => `${imgPrefixMasthead}fromjason.svg`,
		mastHeadLogoPath: data => `${imgDirPath}${data.site.mastHeadLogoFile}`,
		mastHeadLogoAltText:  "illustration of a grotesk mask",
		openGraphImg: data => `${imgDirPath}opengraph.png`,
		robots: data => `${robotsDirFile}`,
		author: {
			name: data => `${authorName}`,
			email: data => `${authorEmail}`,
			url: data => `${data.site.url}${meDirPath}`,
		},
	},
	plotInfo: {
		p001: {
			name: "notebook",
			description: "Very serious stuff. Typos included. :)",
			language: data => `${primaryLanguage}`,
			rssDir: data => `${plotDirPath}${data.plotInfo.p001.name}${feedDirPath}`,
			author: {
				name: data => `${authorName}`,
				email: data => `${authorEmail}`,
				url: data => `${data.site.url}${meDirPath}`,
			
			},
		},
		p002: {
			name: "freelance",
			description: "Freelance? In this economy?",
			language: data => `${primaryLanguage}`,
			rssDir: data => `${plotDirPath}${data.plotInfo.p002.name}${feedDirPath}`,
			author: {
				name: data => `${authorName}`,
				email: data => `${authorEmail}`,
				url: data => `${data.site.url}${meDirPath}`,
			},
		},
		p003: {
			name: "stories",
			description: "Short, flash, & a secret third thing.",
			language: data => `${primaryLanguage}`,
			rssDir: data => `${plotDirPath}${data.plotInfo.p003.name}${feedDirPath}`,
			author: {
				name: data => `${authorName}`,
				email: data => `${authorEmail}`,
				url: data => `${data.site.url}${meDirPath}`,
			},
		},
		p004: {
			name: "travel",
			description: "I went to Italy once.",
			language: data => `${primaryLanguage}`,
			rssDir: data => `${plotDirPath}${data.plotInfo.p004.name}${feedDirPath}`,
			author: {
				name: data => `${authorName}`,
				email: data => `${authorEmail}`,
				url: data => `${data.site.url}${meDirPath}`,
			},
		},
		p005: {
			name: "alist",
			description: "Like playlists, but for hypertext.",
			language: data => `${primaryLanguage}`,
			rssDir: data => `${plotDirPath}${data.plotInfo.p005.name}${feedDirPath}`,
			author: {
				name: data => `${authorName}`,
				email: data => `${authorEmail}`,
				url: data => `${data.site.url}${meDirPath}`,
			},
		},
	}
}

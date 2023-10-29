// /netlify/functions/micropub.js
// Our only dependency is @octokit/rest
// We use the token/GitHub auth we've set in the ENV vars before.
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
})

exports.handler = (event, context, callback) => {
  // GET request, used by iA Writer to get the micropub config
  // we can return an empty JSON here
  if (event.httpMethod === 'GET') {
    return callback(null, {
      statusCode: 200,
      body: "{}"
    })
  }

  // Verify the token we will use in iA Writer,
  // set in Netlify Env settings on netlify.com
  if (
    !event.headers["authorization"] ||
    event.headers["authorization"] != "Bearer " + process.env.TOKEN
  ) {
    return callback(null, {
      statusCode: 401,
      body: "{}"
    })
  }

  // Parse the JSON event body from iA Writer
  const data = JSON.parse(event.body)
  console.log("Data: ", data);
  
const title = data["properties"]["name"][0]
const content = data["properties"]["content"][0]

const filename = [
    title.replace(/[W]+/g, "-") // the slug
  ]

 var fileContent = []
 

  fileContent.push(content)

  // Create a new file on GitHub with the octokit library
  // owner/repo and message/path are hardcoded here,
  // you might want to change those to your own likings.
  return octokit.repos.createOrUpdateFileContents({
    owner: "fromjasonstuff",
    repo: "fromjason-eleventy",
    message: ("Adding note: " + title),
    path: "content/blog/" + filename + ".md",
    content: Buffer.from(fileContent.join("\n")).toString("base64")
  }).then((response) => {
    // Redirect iA Writer to the notes page, where the post will show up.
    callback(null, {
      statusCode: 201,
      headers: {
        Location: "https://fromjason.xyz/notebook",
      }
    });
  }).catch((error) => {
    // Log any errors, so we can debug later.
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}


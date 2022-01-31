const ghpages = require("gh-pages")
ghpages.publish(
  "public",
  {
    branch: "main",
    repo: "https://github.com/seullrryu/seullrryu.github.io.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)

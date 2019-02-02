const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-course-page-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/templates/course-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/pages/index.js"))),
  "component---src-pages-manuscripts-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/pages/manuscripts.js"))),
  "component---src-pages-publications-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/pages/publications.js"))),
  "component---src-pages-teaching-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/pages/teaching.js"))),
  "component---src-pages-tutorials-js": hot(preferDefault(require("/Users/epacuit/Dropbox/mysite/src/pages/tutorials.js")))
}


// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-course-page-js": () => import("/Users/epacuit/Dropbox/mysite/src/templates/course-page.js" /* webpackChunkName: "component---src-templates-course-page-js" */),
  "component---src-pages-404-js": () => import("/Users/epacuit/Dropbox/mysite/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/epacuit/Dropbox/mysite/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-manuscripts-js": () => import("/Users/epacuit/Dropbox/mysite/src/pages/manuscripts.js" /* webpackChunkName: "component---src-pages-manuscripts-js" */),
  "component---src-pages-publications-js": () => import("/Users/epacuit/Dropbox/mysite/src/pages/publications.js" /* webpackChunkName: "component---src-pages-publications-js" */),
  "component---src-pages-teaching-js": () => import("/Users/epacuit/Dropbox/mysite/src/pages/teaching.js" /* webpackChunkName: "component---src-pages-teaching-js" */),
  "component---src-pages-tutorials-js": () => import("/Users/epacuit/Dropbox/mysite/src/pages/tutorials.js" /* webpackChunkName: "component---src-pages-tutorials-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/epacuit/Dropbox/mysite/.cache/data.json")


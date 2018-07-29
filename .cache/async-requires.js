// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/hijazi/reactjs/designcode-web/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/hijazi/reactjs/designcode-web/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/hijazi/reactjs/designcode-web/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/hijazi/reactjs/designcode-web/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/hijazi/reactjs/designcode-web/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/hijazi/reactjs/designcode-web/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/hijazi/reactjs/designcode-web/.cache/layouts/index.js")
}
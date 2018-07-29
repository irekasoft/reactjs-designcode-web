// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/hijazi/reactjs/designcode-web/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/hijazi/reactjs/designcode-web/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/hijazi/reactjs/designcode-web/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/hijazi/reactjs/designcode-web/.cache/json/layout-index.json"),
  "404.json": require("/Users/hijazi/reactjs/designcode-web/.cache/json/404.json"),
  "index.json": require("/Users/hijazi/reactjs/designcode-web/.cache/json/index.json"),
  "404-html.json": require("/Users/hijazi/reactjs/designcode-web/.cache/json/404-html.json")
}
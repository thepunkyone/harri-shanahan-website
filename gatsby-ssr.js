const React = require('react')

const HtmlAttributes = {
  lang: 'en',
  className: 'no-js',
}

const HeadComponents = [
  <script
    // Modernizr script for lazy loading images
    type="text/javascript"
    defer
    src="/scripts/modernizr.js"
  />,
]

exports.onRenderBody = (
  { setHtmlAttributes, setHeadComponents },
  pluginOptions
) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}

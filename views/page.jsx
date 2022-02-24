const React = require('react');
const { default: ScriptTag } = require('react-script-tag/lib/ScriptTag');

function PageWrapper (html) {
  return (
    <html>
      <head>
        <title>{html.title}</title>
        <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" media="screen" />
        <ScriptTag src="./js/main.js" />
      </head>
      <body>
        {html.children}
      </body>
    </html>
  );
}

module.exports = PageWrapper;
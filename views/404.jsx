const React = require('react');
const PageWrapper = require('./page');

function _404() {
  return (
    <PageWrapper title="Error: Not Found">
      <h1>Page not Found!</h1>
      <a href="/" className="w3-btn w3-round-xlarge">Home</a>
    </PageWrapper>
  )
}

module.exports = _404;
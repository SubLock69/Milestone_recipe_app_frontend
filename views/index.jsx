const React = require('react');
const PageWrapper = require('./page');
const SpoonCall = require('./spooncall');

function Index() {
  return(
    <PageWrapper title="Home">
      <header className="w3-container w3-center">
        <h1>Got Munchies?</h1>
        <p>We're here to help!</p>
        <p className="fineprint">If page doesn't load it's because Spoonacular has quotas on how many requests you can make in a given day, very sorry</p>
      </header>
      <main>
        <SpoonCall />
      </main>
    </PageWrapper>
  );
}

module.exports = Index;
const { React, useState } = require('react');
const axios = require('axios');

function SpoonCall () {
  const [recipes, setRecipes] = useState("Loading...");
  let randoms;
  
  return (
    <div>
      {
        (async (setRecipes) => {
          try {
            randoms = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=eb063177fa214671950ed09c9c20e134&limitLicense=true&number=25');
          } catch (e) {console.log(e);}
          setRecipes(randoms.data.recipes);
          recipes.map((recipe, index) => {
            return (
              <div className="w3-card bg-green tc-white">
                <header className="w3-container">
                  {recipe.title}
                </header>
                <div className="w3-container">
                  <img src={recipe.image} alt={recipe.title} />
                  <a href={recipe.sourceUrl} className="viewBtn">View</a>
                  <a href={`/${recipe.id}?__m="PUT"`} className="favBtn" id={`recipe${index}`}>Favorite</a>
                </div>
              </div>
            );
          })
        })(setRecipes)
      }
    </div>
  );
}

module.exports = SpoonCall;
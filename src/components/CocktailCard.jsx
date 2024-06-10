import React from "react";

const CocktailCard = ({ cocktail, searchResults }) => {
  // searchResults is data from the API, not the DB
  const getIngredients = (object) => {
    let ingredients = [];
    for (let key in object) {
      if (object[key] && key.startsWith("strIngredient")) {
        ingredients.push(object[key]);
      }
    }
    return ingredients;
  };

  return (
    <div className="cocktail-card">
      {searchResults !== undefined ? (
        <>
          <img src={cocktail.strDrinkThumb} style={{ width: "400px" }} />
          <h1>{cocktail.strDrink}</h1>
        </>
      ) : (
        <>
          <img src={cocktail.image} style={{ width: "400px" }} />
          <h1>{cocktail.name}</h1>
        </>
      )}
      <p>{getIngredients(cocktail).join(" | ")}</p>
    </div>
  );
};

export default CocktailCard;

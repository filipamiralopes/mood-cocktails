import { useLocation } from "react-router-dom";

const CocktailCard = ({ cocktail, searchResults }) => {
  const { pathname } = useLocation();
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
          <img src={cocktail.strDrinkThumb} style={{ width: "300px" }} />
          <h1>{cocktail.strDrink}</h1>
        </>
      ) : (
        <>
          <img src={cocktail.image} style={{ width: "300px" }} />
          <h1>{cocktail.name}</h1>
        </>
      )}
      {(pathname === "/cocktails" || pathname === "/your-table") ? null : (
        <p>{getIngredients(cocktail).join(" | ")}</p>
      )}
    </div>
  );
};

export default CocktailCard;

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
      <div>
        {searchResults !== undefined ? (
          <>
            <img src={cocktail.strDrinkThumb} style={{ height: '300px', width: '300px', objectFit: "cover", objectPosition: "100% 0"}} />
            <h3>{cocktail.strDrink}</h3>
          </>
        ) : (
          <>
            <img src={cocktail.image} style={{ height: '300px', width: '300px', objectFit: "cover", objectPosition: "100% 0"}} />
            <h3>{cocktail.name}</h3>
          </>
        )}
        {pathname === "/cocktails" || pathname === "/cocktails/"  || pathname === "/your-table" ? null : (
          <p>{getIngredients(cocktail).join(" | ")}</p>
        )}
      </div>
      {pathname === "/cocktails" ||
      pathname === "/cocktails/" ||
      pathname === "/your-table" ? null : (
        <div className="cocktail-description">
          {cocktail.strInstructions && <p>{cocktail.strInstructions}</p>}
          {cocktail.remarks && <p>{cocktail.remarks}</p>}
          {cocktail.isUserCreated && <h4>Curated by {cocktail.createdBy}</h4>}
        </div>
      )}
    </div>
  );
};

export default CocktailCard;

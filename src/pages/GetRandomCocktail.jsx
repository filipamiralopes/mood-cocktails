import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GetRandomCocktail = ({mood}) => {
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  const fetchRandomCocktail = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setCocktail(response.data.drinks[0]);
    } catch (error) {
      console.error("Error fetching random cocktail:", error);
    }
  };

  if (!cocktail) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="random-cocktail-page" key={cocktail.idDrink}>
      <h1>Feeling {mood}?</h1>
      <p>
        Enjoy a sip that perfectly matches your mood and let it elevate your
        spirits:
      </p>
      <h1>{cocktail.strDrink}</h1>
      <Link to={`/cocktails/${cocktail.idDrink}`}>

        <img 
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          style={{ width: "300px" }}
        />
      </Link>
      <p></p>
      <button onClick={fetchRandomCocktail}>Get Another Cocktail</button>
    </div>
  );
};

export default GetRandomCocktail;

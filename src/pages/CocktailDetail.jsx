import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CocktailDetail = () => {
  const { cocktailId } = useParams();

  const [cocktails, setCocktails] = useState([]);
  // const { cocktailId } = props;

  const allCocktails = async () => {
    try {
      const { data } = await axios("http://localhost:5005/drinks/");
      setCocktails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allCocktails();
  }, []);

  const filteredCocktail = cocktails.find((oneCocktail) => {
    if (oneCocktail.id == cocktailId) {
      return true;
    }
  });

  const getIngredients = (object) => {
    let ingredients = []
    for(let key in object) {
        if (object[key]&& key.startsWith("strIngredient")){
            ingredients.push(object[key])
        }
    }
    return ingredients
  };

  console.log(filteredCocktail);

  if (!filteredCocktail) {
    return <p>loading...</p>;
  }

  return (
    <div className="cocktail-detail">
      <img src={filteredCocktail.nameThumb} style={{ width: "400px" }} />
      <h1>{filteredCocktail.name}</h1>
      <p>{getIngredients(filteredCocktail).join(" | ")}</p>
    </div>
  );
};

export default CocktailDetail;
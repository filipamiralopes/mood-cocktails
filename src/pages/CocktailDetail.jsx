import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import CocktailCard from "../components/CocktailCard";

const CocktailDetail = ({ cocktails, handleOrder }) => {
  console.log(cocktails)
  const { cocktailId } = useParams();

  // const [cocktails, setCocktails] = useState([]);
  // const { cocktailId } = props;

  // const allCocktails = async () => { // TODO
  //   try {
  //     const { data } = await axios(`${API_URL}/drinks/`);
  //     setCocktails(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   allCocktails();
  // }, []);

  const filteredCocktail = cocktails.find((oneCocktail) => {

    if (oneCocktail.id == cocktailId) {
      return true;
    }
  });

  if (!filteredCocktail) {
    return <p>loading...</p>;
  }

  return (
    <div className="cocktail-detail">
      <CocktailCard cocktail={filteredCocktail} />
      <div className="cocktail-detail-buttons">
        <button
          onClick={() => {
            handleOrder(filteredCocktail);
          }}
        >
          Order
        </button>
        <Link to="/your-table">
          <button>Check your orders</button>
        </Link>
      </div>
    </div>
  );
};

export default CocktailDetail;

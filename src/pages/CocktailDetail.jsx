import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import CocktailCard from "../components/CocktailCard";

const CocktailDetail = ({ cocktails, handleOrder }) => {
  const { cocktailId } = useParams()
  console.log(cocktailId)



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

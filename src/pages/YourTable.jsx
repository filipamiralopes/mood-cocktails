import React from "react";
import CocktailCard from "../components/CocktailCard";
import { Link } from "react-router-dom";

const YourTable = ({ orderedCocktails }) => {
  return (
    <>
      <div className="your-table">
        {orderedCocktails.length === 0 ? (
          <h2>No orders yet</h2>
        ) : (
          <h2>Your orders:</h2>
        )}
        {orderedCocktails.map((cocktail) => {
          return (
            <Link to={`/cocktails/${cocktail.id}`} key={cocktail.id}>
              <CocktailCard cocktail={cocktail} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default YourTable;

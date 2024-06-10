import React from "react";
import CocktailCard from "../components/CocktailCard";

const YourTable = ({ orderedCocktails }) => {
  return (
    <>
      <div className="your-orders">
        <h1>Your orders</h1>
        {orderedCocktails.map((cocktail) => {
          return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
    </>
  );
};

export default YourTable;

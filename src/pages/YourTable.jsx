import React from "react";
import CocktailCard from "../components/CocktailCard";

const YourTable = ({ orderedCocktails }) => {
  return (
    <>
      <h1>Your orders</h1>
      <div className="your-orders">
        {orderedCocktails.map((cocktail) => {
          return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
    </>
  );
};

export default YourTable;

// http://localhost:5174/cocktails/17225

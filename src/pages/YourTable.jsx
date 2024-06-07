import React from "react";
import CocktailCard from "../components/CocktailCard";

const YourTable = ({ orderedCocktails }) => {
  return (
    <div>
      Your orders
      {orderedCocktails.map((cocktail) => {
        return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
      })}
    </div>
  );
};

export default YourTable;


// http://localhost:5174/cocktails/17225
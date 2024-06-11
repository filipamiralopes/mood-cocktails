import React from "react";
import CocktailCard from "../components/CocktailCard";

const YourTable = ({ orderedCocktails }) => {
  return (
    <>
      <div className="your-table">
        {orderedCocktails.length === 0 ? (<h2>No orders yet</h2>) : (<h2>Your orders:</h2>)}
        {orderedCocktails.map((cocktail) => {
          return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
    </>
  );
};

export default YourTable;

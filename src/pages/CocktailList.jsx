import React, { useState } from "react";
import CocktailCard from "../components/CocktailCard";
import axios from "axios";
import { Link } from "react-router-dom";

const CocktailList = ({ cocktails, setCocktails }) => {
  const [searchState, setSearchState] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchCocktail = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchState}`
      );
      if (!data.drinks) {
        setError("No cocktail found!");
      } else {
        setSearchResults(data.drinks);
        setError("");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cocktail-list">
      <h1>Cocktail Menu</h1>

      <form onSubmit={handleSearchCocktail} className="search-bar">
        <input
          type="text"
          value={searchState}
          onChange={(event) => {
            setSearchState(event.target.value);
          }}
          placeholder="Search for a cocktail..."
        />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="cocktail-search">
        {searchState !== "" &&
          searchResults !== null &&
          searchResults.map((oneCocktail) => (
            <Link
              to={`/cocktails/${oneCocktail.idDrink}`}
              key={oneCocktail.idDrink}
            >
              <CocktailCard
                cocktail={oneCocktail}
                searchResults={searchResults}
              />
            </Link>
          ))}
      </div>

      <div className="cocktail-list-grid">
        {cocktails.map((oneCocktail) => {
          return (
            <Link to={`/cocktails/${oneCocktail.id}`} key={oneCocktail.id}>
              <CocktailCard cocktail={oneCocktail} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;

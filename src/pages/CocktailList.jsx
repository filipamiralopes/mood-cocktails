// DELETE
// Implement search (decide if on API or on our db)
import React, { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";
import axios from "axios";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchState, setSearchState] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const { data } = await axios.get("http://localhost:5005/drinks");
        setCocktails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCocktails();
  }, []);

  const handleSearchCocktail = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchState}`
      );
      setSearchResults(data.drinks);
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
        <button type="submit">Search</button>
      </form>

      <div className="cocktail-search">
        {searchState !== "" &&
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

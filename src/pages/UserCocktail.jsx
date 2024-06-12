import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const UserCocktail = ({ currentUser }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      
      try {
        if (!currentUser || /^\d+$/.test(currentUser.username)) {
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
          setCocktails(response.data.drinks); // Use setCocktails instead of setCocktail
        } else {
          const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${currentUser.username.charAt(0)}`);
          const filteredCocktails = data.drinks.filter(cocktail => cocktail.strDrink.charAt(0).toLowerCase() === currentUser.username.charAt(0).toLowerCase());
          setCocktails(filteredCocktails.slice(0, 3)); 
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cocktails');
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="user-cocktail">
      {currentUser && (
        <h1>Here! Cocktails just for {currentUser.username}, cheers!</h1>
      )}
      {!currentUser || /^\d+$/.test(currentUser.username) ? (
        <p>Craving a cocktail that's as unique as you are? <br/> Just drop us your username in letter, and we'll serve up our special just for you! 😉</p>
      ) : (
      <div className="user-cocktail-list">
        {cocktails.map(cocktail => (
          <div key={cocktail.idDrink}>
            <Link to={`/cocktails/${cocktail.idDrink}`}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}  />
            <p>{cocktail.strDrink}</p></Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default UserCocktail;

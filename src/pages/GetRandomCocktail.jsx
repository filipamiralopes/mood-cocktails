import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetRandomCocktail = () => {
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        fetchRandomCocktail();
      }, []);
    
      const fetchRandomCocktail = async () => {
        try {
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
          setCocktail(response.data.drinks[0]); 
        } catch (error) {
          console.error('Error fetching random cocktail:', error);
        }
      };
    
      if (!cocktail) {
        return <div>Loading...</div>;
      }
    
      return (
        <div className='random-cocktail-page'>
          <h1>{cocktail.strDrink}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: "300px" }} />
          <p>{cocktail.strInstructions}</p>
          <button onClick={fetchRandomCocktail}>Get Another Random Cocktail</button>
        </div>
      );
    };
        
    export default GetRandomCocktail;
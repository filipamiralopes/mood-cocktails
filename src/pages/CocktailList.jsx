// PATCH (Edit)
// DELETE
// Implement search (decide if on API or on our db)
import React, { useEffect, useState } from 'react'
import CocktailCard from '../components/CocktailCard';

const CocktailList = () => {
    const [cocktails, setCocktails] = useState([]);
    const [searchState, setSearchState] = useState("");

    useEffect(() => {
       const fetchCocktails = async () => {
        try {
            const { data } = await axios.get("http://localhost:5005/drinks");
            setCocktails(data);
        } catch (error) {
            console.log(error);
        }
       }
       fetchCocktails();
    }, [])

    const handlesearchCocktail = async () => {
        try {
            const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
            
        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div className="cocktail-list">
        <div className="cocktail-grid">
            {cocktails.map(oneCocktail => {
                <CocktailCard key={oneCocktail.cocktailId}/>
            })}
        </div>
    </div>
  )
}

export default CocktailList
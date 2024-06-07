import React from 'react'

const CocktailCard = ({cocktail}) => {

    const getIngredients = (object) => {
        let ingredients = []
        for(let key in object) {
            if (object[key]&& key.startsWith("strIngredient")){
                ingredients.push(object[key])
            }
        }
        return ingredients
      };

  return (
    <div className="cocktail-detail">
      <img src={cocktail.nameThumb} style={{ width: "400px" }} />
      <h1>{cocktail.name}</h1>
      <p>{getIngredients(cocktail).join(" | ")}</p>
    </div>
  )
}

export default CocktailCard
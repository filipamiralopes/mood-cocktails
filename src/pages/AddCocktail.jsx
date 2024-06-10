import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddCocktail = ({ cocktails, setCocktails }) => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [strIngredient1, setIngredient1] = useState('');
  const [strIngredient2, setIngredient2] = useState('');
  const [strIngredient3, setIngredient3] = useState('');
  const [remarks, setRemarks] = useState('');
  const [existingCocktail, setExistingCocktail] = useState(null);

  useEffect(() => {
    if (name) {
      const foundCocktail = cocktails.find(cocktail => cocktail.name.toLowerCase() === name.toLowerCase());
      setExistingCocktail(foundCocktail);
    } else {
      setExistingCocktail(null);
    }
  }, [name, cocktails]);

  const handleAddCocktail = (event) => {
    event.preventDefault();

    if (existingCocktail) {
      alert('This cocktail already exists!');
      return;
    }

    const newCocktail = {
      id: name, // ID is the same as name
      name,
      image,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      remarks,
    };

    setCocktails([newCocktail, ...cocktails]);
    nav("/");
  };

  return (
    <div className='add-cocktail-form'>
      <h3>My Cocktail Bar 🍸</h3>
      <form onSubmit={handleAddCocktail}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter cocktail name"
            required
          />
        </label>
        {existingCocktail && (
          <div className="suggestion">
            <p>This cocktail already exists:</p>
            <p>Name: {existingCocktail.name}</p>
            <img src={existingCocktail.image} alt={existingCocktail.name} style={{ maxWidth: '120%', height: 'auto' }} />
          </div>
        )}
        <label>
          Image URL:
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Image URL"
            required
          />
        </label>
        {image && (
          <div>
            <img src={image} alt="Cocktail Preview" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}
        <label>
          Ingredient 1:
          <input
            type="text"
            value={strIngredient1}
            onChange={(event) => setIngredient1(event.target.value)}
            placeholder="Ingredient 1"
          />
        </label>
        <label>
          Ingredient 2:
          <input
            type="text"
            value={strIngredient2}
            onChange={(event) => setIngredient2(event.target.value)}
            placeholder="Ingredient 2"
          />
        </label>
        <label>
          Ingredient 3:
          <input
            type="text"
            value={strIngredient3}
            onChange={(event) => setIngredient3(event.target.value)}
            placeholder="Ingredient 3"
          />
        </label>
        <label>
          Remarks:
          <textarea
            value={remarks}
            onChange={(event) => setRemarks(event.target.value)}
            placeholder="Say something about your cocktail....,other ingredients, etc."
          />
        </label>
        <button type="submit">Add your cocktail!</button>
      </form>
    </div>
  );
};

export default AddCocktail;

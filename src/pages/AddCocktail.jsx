import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL } from "../config";

const AddCocktail = ({ cocktails, setCocktails }) => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [strIngredient1, setIngredient1] = useState('');
  const [strIngredient2, setIngredient2] = useState('');
  const [strIngredient3, setIngredient3] = useState('');
  const [remarks, setRemarks] = useState('');
  const [existingCocktail, setExistingCocktail] = useState(null);
  const [dbCocktail, setDbCocktail] = useState(null);


  useEffect(() => {
    if (name) {
      const foundCocktail = cocktails.find(cocktail => cocktail.name.toLowerCase() === name.toLowerCase());
      setExistingCocktail(foundCocktail);


      const checkCocktailInDatabase = async () => {
        try {
          const response = await axios.get(`${API_URL}/drinks?name=${encodeURIComponent(name)}`);
          if (response.data.length > 0) {
            setDbCocktail(response.data[0]);
          } else {
            setDbCocktail(null);
          }
        } catch (error) {
          console.log('Failed to check cocktail in db:', error);
        }
      }

      checkCocktailInDatabase();
    } else {
      setExistingCocktail(null);
    }
  }, [name, cocktails]);

  const handleAddCocktail = async (event) => {
    event.preventDefault();

    if (existingCocktail || dbCocktail) {
            //alert('This cocktail already exists!');
      return;
    }

    //const createdBy = currentUser.username;

    const newCocktail = {
      name,
      image,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      remarks,
      isUserCreated: true,
    };

    
    try { 
      const {data} = await axios.post(`${API_URL}/drinks`, newCocktail);
      console.log(data); 
      setCocktails([newCocktail, ...cocktails]);
      nav('/cocktails/');
      window.location.reload();
      } catch (error) {
        console.log('Failed to add cocktail:', error);
    }
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
        {(existingCocktail || dbCocktail) && (
          <div className="suggestion">
            <p>This cocktail already exists! Did you mean this one?</p>
            {existingCocktail && (
             <>
              <h2>{existingCocktail.name}</h2>
               <img src={existingCocktail.image} alt={existingCocktail.name} style={{ maxWidth: '120%', height: 'auto' }} />
              </>
            )}
            {dbCocktail && (
              <>
                <h2> {dbCocktail.name}</h2>
                <img src={dbCocktail.image} alt={dbCocktail.name} style={{ maxWidth: '120%', height: 'auto' }} />
              </>
            )}
          </div>
              )}        <label>
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
        <button type="submit" disabled={!!existingCocktail || !!dbCocktail}>Add your cocktail!</button>
      </form>
    </div>
  );
};

export default AddCocktail;

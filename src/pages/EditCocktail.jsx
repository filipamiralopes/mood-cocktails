import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const EditCocktail = ({ cocktails, setCocktails }) => {
  const { cocktailId } = useParams();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [strIngredient1, setIngredient1] = useState("");
  const [strIngredient2, setIngredient2] = useState("");
  const [strIngredient3, setIngredient3] = useState("");
  const [remarks, setRemarks] = useState("");

  // const cocktail = cocktails.find((drink) => drink.id === cocktailId);
  useEffect(() => {
    const fetchCocktailData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/drinks/${cocktailId}`);
        setName(data.name);
        setImage(data.image);
        setIngredient1(data.strIngredient1);
        setIngredient2(data.strIngredient2);
        setIngredient3(data.strIngredient3);
        setRemarks(data.remarks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCocktailData();
  }, [cocktailId]);

  async function handleEditCocktail(event) {
    event.preventDefault();

    const updatedCocktail = {
      name,
      image,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      remarks,
    };
    try {
      const { data } = await axios.patch(
        `${API_URL}/drinks/${cocktailId}`,
        updatedCocktail
      );
      const updatedListOfCocktails = cocktails.map((drink) => {
        if (drink.id == cocktailId) {
          return data;
        } else {
          return drink;
        }
      });
      setCocktails(updatedListOfCocktails);
      nav(`/cocktails/${cocktailId}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add-cocktail-form">
      <h2>Edit Your Cocktail</h2>
      <form onSubmit={handleEditCocktail}>
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
            <img
              src={image}
              alt="Cocktail Preview"
              style={{ maxWidth: "50%", height: "auto" }}
            />
          </div>
        )}
        <label>
          Ingredient 1:
          <input
            type="text"
            value={strIngredient1}
            onChange={(event) => setIngredient1(event.target.value)}
          />
        </label>
        <label>
          Ingredient 2:
          <input
            type="text"
            value={strIngredient2}
            onChange={(event) => setIngredient2(event.target.value)}
          />
        </label>
        <label>
          Ingredient 3:
          <input
            type="text"
            value={strIngredient3}
            onChange={(event) => setIngredient3(event.target.value)}
          />
        </label>
        <label>
          Remarks:
          <textarea
            value={remarks}
            onChange={(event) => setRemarks(event.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditCocktail;

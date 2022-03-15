import "./Recipe.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Create() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, error, isPending } = useFetch(url);
  const history = useHistory();

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>{recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
          <button onClick={() => history.push("/")}>Go Back...</button>
        </>
      )}
    </div>
  );
}

import React from "react";
import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function RecipeList({ recipes }) {
  const { color, changeColor } = useTheme();
  if (recipes.length == 0) {
    return (
      <div className="recipe-list">
        <p>No recipes found</p>
      </div>
    );
  } else {
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h2>{recipe.title}</h2>
            <p>
              <b>{recipe.cookingTime} to make</b>
            </p>
            <p>{recipe.method.substring(0, 75)}...</p>
            <Link to={`/recipes/${recipe.id}`} style={{ background: color }}>
              Cook This...
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

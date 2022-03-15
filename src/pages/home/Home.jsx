import "./Home.css";

import React from "react";
import useFetch from "../../hooks/useFetch";
// components
import RecipeList from "../../components/RecipeList";
// app key =
// bf5fb045b9e51eedaf3d9b028cbff985

// app id= 3caf4a4e
// old = http://localhost:3000/recipes

export default function Create() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

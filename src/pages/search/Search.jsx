// import "./Search.css";
// import { useLocation } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import React from "react";

// export default function Create() {
//   const queryString = useLocation();
//   const queryParams = new URLSearchParams(queryString);
//   const query = queryParams.get("q");
//   const url = "http://localhost:3000/recipes/?q=" + query;
//   const method = "GET";
//   const { data, error, isPending } = useFetch(url, method);

//   return (
//     <div>
//       <h2>Recipes Including "{query}" :</h2>
//       <div>
//         {error && <p>{error}</p>}
//         {isPending && <p>Loading...</p>}
//         {data && data.map((recipe) => <p>{recipe.name}</p>)}
//       </div>
//     </div>
//   );
// }

import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";

// styles
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

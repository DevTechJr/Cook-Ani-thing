import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Searchbar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
    history.push(`/search/?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Recipes: </label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

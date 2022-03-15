import "./Navbar.css";
import { Link } from "react-router-dom";

import React from "react";
import SearchBar from "./SearchBar";

import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          Cook Ani-thing!
        </Link>
        <SearchBar />
        {/* <Link to="/create">Create New Recipe</Link> */}
      </nav>
    </div>
  );
}

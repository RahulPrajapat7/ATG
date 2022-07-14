import React from "react";
import searchIcon from "../../Assets/searchIcon.svg";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBar">
      <img src={searchIcon} alt="search" />
      <input type="search" placeholder="Search for your favorite groups in ATG" />
    </div>
  );
}

export default SearchBar;

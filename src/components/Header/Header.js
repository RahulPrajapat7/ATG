import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import downArrow from "../../Assets/downArrow.svg";
import "./Header.css";
import Signup from "../Signup/Signup";

function Header({ logo }) {

  return (
    <nav className="header">
      <img className="logo" src={logo} alt="logo" />
      <SearchBar />
      <div className="d-flex justify-content-between" style={{width:"200px"}}>
      <h6  class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Account. It's free!
            </h6>
        <img src={downArrow} alt="Down arrow" />
      </div>
      <Signup/>
    </nav>
  );
}

export default Header;

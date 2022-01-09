import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    //BEM convetion for CSS - Block,Element,Modifier
    <div className="header">
      <IconButton>
        {" "}
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg"
        alt="tinder-logo"
      />

      <IconButton>
        {" "}
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;

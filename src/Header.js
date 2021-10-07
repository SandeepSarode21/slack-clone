import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/**Avatar  */}
        <Avatar className="header__avatar" alt="Sandeep" src=""></Avatar>

        {/**Time Icon */}
        <AccessTimeIcon></AccessTimeIcon>
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search  ..."></input>
        {/**input */}
      </div>
      <div className="header__right">
        {/**help   */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;

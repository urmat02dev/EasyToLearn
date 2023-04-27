import React from 'react';
import "./Header.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
const Header = () => {
  const nav = useNavigate()
  const getSignUp = () => {
    nav("/sign-up")
  }
  const getSignIn = () => {
    nav("/sign-in")
  }
  return (
    <div id={"header"}>
      <div className="container">
        <div className="header">
          <div className="header--title">
            <NavLink to={"/"}>
              <h1>Easy
              <span className={"To"}>To</span>
              <span className={"Learn"}>Learn</span>
            </h1>
            </NavLink>
            <select name="" id="" defaultValue={"Категории"}>
              <option value="">Front End</option>
              <option value="">Back End</option>
            </select>
            <select name="" id="" defaultValue={"Категории"}>
              <option value="">Front End</option>
              <option value="">Back End</option>
            </select>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/reviews">Отзывы</NavLink>
          </div>
          <div className="header--btn">
            <BsSearch className={"icon"}/>
            <button className={"sign-up"}
            onClick={() => getSignUp()}
            >SIGN UP</button>
            <button className={"sign-in"}
              onClick={() => getSignIn()}
            >SIGN IN</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
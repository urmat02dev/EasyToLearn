import React from 'react';
import "./Tabs.scss"
import html from "../../../assets/images/html.svg"
import css from "../../../assets/images/css.svg"
import js from "../../../assets/images/js.svg"
import java from "../../../assets/images/java.svg"
import php from "../../../assets/images/php.svg"
import python from "../../../assets/images/py.svg"
import react from "../../../assets/images/react.svg"
import ts from "../../../assets/images/ts.svg"
import other from "../../../assets/images/other.png"
import {useDispatch, useSelector} from "react-redux";
import {HOVER, HOVER_COURSE} from "../../../store/Reducer/ActionTypes";
const Tabs = () => {
  const dispatch = useDispatch()
  const getHover = () => {
    dispatch({type:HOVER,payload:false})
  }
  const getHoverCourse = () => {
    dispatch({type:HOVER_COURSE,payload:false})
  }
  const {dark} = useSelector(state => state)
  return (
    <div id="tabs" onMouseOver={() => getHover() || getHoverCourse()}>
      <div className="container">
        <div className={"tabs"}>
          <h1 className={!dark && "darkH1"}>Добро пожаловать на EasyToLearn</h1>
          <p className={!dark && "darkP"}>Ресурс видеоуроков программирования для разработчиков. Бери знания
            своего профиля у нас, ведь мы самые лучшие блеать. Серьезно.</p>
          <div className="tabs--block">
            <div className={!dark ? "tabs--block--dark html": "tabs--block--item  html"}>
              <img src={html} alt=""/>
              HTML
            </div>
            <div className={!dark ? "tabs--block--dark css": "tabs--block--item  css"}>
              <img src={css} alt=""/>
              CSS
            </div>
            <div className={!dark ? "tabs--block--dark js": "tabs--block--item  js"}>
              <img src={js} alt=""/>
              JavaScript
            </div>
            <div className={!dark ? "tabs--block--dark php": "tabs--block--item  php"}>
              <img src={php} alt=""/>
              Php
            </div>
            <div className={!dark ? "tabs--block--dark react": "tabs--block--item  react"}>
              <img src={react} alt=""/>
              React.js
            </div>
            <div className={!dark ? "tabs--block--dark py": "tabs--block--item  py"}>
              <img src={python} alt=""/>
              Python
            </div>
            <div className={!dark ? "tabs--block--dark java": "tabs--block--item  java"}>
              <img src={java} alt=""/>
              Java
            </div>
            <div className={!dark ? "tabs--block--dark ts": "tabs--block--item  ts"}>
              <img src={ts} alt=""/>
              TypeScript
            </div>
            <div className={!dark ? "tabs--block--dark other": "tabs--block--item  other"}>
              <img src={other} alt=""/>
              Другое (Frontend)
            </div>

          </div>
          <button className={"tabs--btn"}>
            Все категории
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
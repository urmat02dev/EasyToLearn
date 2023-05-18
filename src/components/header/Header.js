import React, {useState} from 'react';
import "./Header.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {BsFillSunFill, BsSearch} from "react-icons/bs";
import {CiDark} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {DARK, HOVER, HOVER_COURSE} from "../../store/Reducer/ActionTypes";
import {FaAngleDown, FaAngleRight} from "react-icons/fa";
import {TfiAngleDown} from "react-icons/tfi";
const Header = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const {dark,hoverCourse} = useSelector(state => state)
  const {hover} = useSelector(state => state)


  const getSignUp = () => {
    nav("/sign-up")
  }
  const getSignIn = () => {
    nav("/sign-in")
  }
  const getDark = () => {
    dispatch({type:DARK,payload:false})
  }
  const getLight = () => {
    dispatch({type:DARK,payload:true})
  }
  const getHover = () => {
    dispatch({type:HOVER,payload:true})
  }
  const getHoverCourse = () => {
    dispatch({type:HOVER_COURSE,payload:true})
  }
  const getCloseHover = () => {
    dispatch({type:HOVER,payload:false})
  }
  const getCloseHoverCourse = () => {
    dispatch({type:HOVER_COURSE,payload:false})
  }
  console.log(dark)
  console.log(hover)
  console.log(hoverCourse)
  return (
    <div id={"header"} style={{
      background:!dark ? "rgba(255, 255, 255, 0.98)" : ''
    }}
         >
      <div className="container">
        <div className={"header"} >
          <div className={"header--title"} >
            <NavLink to={"/"} onMouseOver={() => getCloseHover() || getCloseHoverCourse()}>
              <h1 className={!dark ? "h1 darkColor": "h1"}>Easy
              <span className={!dark ? "To darkColor" : "To"}>To</span>
              <span className={!dark ? "Learn darkColor":"Learn"}>Learn</span>
            </h1>
            </NavLink>
            <div className={"category"}>
              <div className={"category--title"}>
                <p className={!dark ? "lP" : "p"} onMouseOver={() => getHover()}
                >Категории</p>
                <TfiAngleDown className={!dark ? "lAngle" : "angle"}/>
              </div>
              {
                hover  &&
                  <div className={"category--hover"}
                               style={{
                                 position:!hover ? 'absolute' : 'absolute',
                                 left: !hover ? '-100%' : '240px',
                                 top: !hover ? '-100%' : '55px'


                               }}
                  >
                  <div className={"items"}>
                    <div>Frontend <FaAngleRight className={"icon"}/></div>
                    <div>Backend <FaAngleRight className={"icon"}/></div>
                    <div>Design <FaAngleRight className={"icon"}/></div>
                    <div>Книги <FaAngleRight className={"icon"}/></div>
                    <div>Graphic <FaAngleRight className={"icon"}/></div>
                  </div>
                </div>
              }
            </div>
            <div className={"course"}>
              <div className={"course--title"} >
                <p className={!dark ? "lP" : "p"} onMouseOver={() => getHoverCourse()}
                >Все курсы </p>
                <TfiAngleDown className={!dark ? "lAngle" : "angle"}/>
              </div>
              {
                  hoverCourse  &&
                  <div className={"course--hover"}
                       style={{
                         position:!hoverCourse ? 'absolute' : 'absolute',
                         zIndex:!hoverCourse ? "-1" : "1",
                         left: !hoverCourse ? '-100%' : '365px',
                         top: !hoverCourse ? '-100%' : '55px'


                       }}>
                    <div className={"items"}>
                      <div>Frontend <FaAngleRight className={"icon"}/></div>
                      <div>Backend <FaAngleRight className={"icon"}/></div>
                    </div>
                  </div>
              }

            </div>
            <NavLink to="/about"
                     className={!dark ? "a darkColor":"a"}
                     onMouseOver={() => getCloseHover() || getCloseHoverCourse()}
            >

              О нас</NavLink>
            <a href={"#reviews"} className={!dark ? "a darkColor":"a"} onMouseOver={() => getCloseHover() || getCloseHoverCourse()}
            >Отзывы</a>
          </div>
          <div className="header--btn" onMouseOver={() => getCloseHover() || getCloseHoverCourse()}>
            {
              dark ? <CiDark className={"dark"} onClick={getDark}/>
                  :  <BsFillSunFill className={"light"} onClick={getLight}/>
            }
            <BsSearch className={!dark ? "icon darkColor " : "icon"}/>
            <button className={!dark ? "darkUp" : "sign-up"} onClick={() => getSignUp()}>
              SIGN UP
            </button>
            <button className={!dark ? "darkBtn" : "sign-in"} onClick={() => getSignIn()}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
import React from 'react';
import "./Hero.scss"
import {useDispatch} from "react-redux";
import {HOVER, HOVER_COURSE} from "../../../store/Reducer/ActionTypes";
const Hero = () => {
    const dispatch = useDispatch()
    const getHover = () => {
        dispatch({type:HOVER,payload:false})
    }
    const getHoverCourse = () => {
        dispatch({type:HOVER_COURSE,payload:false})
    }
    return (
        <div id="hero" >
            <div className="container">
                <div className="hero" onMouseOver={() => getHover() || getHoverCourse()}>
                    <p>📌 Добро пожаловать на EasyToLearn</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
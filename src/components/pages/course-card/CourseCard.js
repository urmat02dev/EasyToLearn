import React from 'react';
import "./CourseCard.scss"
import py from "../../../assets/images/py.png"
import {BiTimeFive} from "react-icons/bi";
import {TfiWorld} from "react-icons/tfi";
import {SlNotebook} from "react-icons/sl";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
const CourseCard = ({el}) => {
    console.log(el)
    const {dark} = useSelector(state => state)
    const {description, image , title , price} = el
    return (
        <div className={!dark ? "course-card darkBg" : "course-card"}>
            <div className="course-card--img">
                <img src={image} alt=""/>
            </div>
            <div className="course-card--desc">
                <NavLink to={"/"}><h1 className={!dark ? "darkH1" :"titleH1"} >{title}</h1></NavLink>
                <h3 className={!dark ? "darkH3" : "h3"}>ИИ и для генерации видео</h3>
                <h5 className={!dark ? "dh5" : "h5"}>{description.slice(0,200)}</h5>
                <p className={!dark ? "dp" : "p"}>3-х недельный курс с конкурсом работ.</p>
                <div className="course-card--desc--btn">
                    <div className={"info"}>
                        <div className={!dark ? "darkTime" : "info--time"}>
                            <BiTimeFive className={"icon"}/> {price}
                        </div>
                        <div className={!dark ? "darkLang " : "info--lang"}>
                            <TfiWorld className={"icon"}/>  Русский
                        </div>
                        <div className={!dark ? "darkSite" : "info--site"}>
                            <SlNotebook className={"icon"}/>
                            <a href={"https://www.apple.com/kg/"} className={!dark ? "a" : ""}>productuniversity.ru</a>
                        </div>
                    </div>
                    <div className={"watch"}>
                        <button>Посмотреть</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseCard;
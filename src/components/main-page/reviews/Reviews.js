import React from 'react';
import "./Reviews.scss"
import {useSelector} from "react-redux";
import reviews from  "../../../assets/images/reviews.png"
const Reviews = () => {
    const {dark} = useSelector(state => state)
    return (
        <div id={"reviews"} >
            <div className="container">
                <div className="reviews">
                    <h1 className={!dark ? "lTitle" : "title"}>Отзывы</h1>
                    <div className={"reviews--blocks"}>
                        <div className="reviews--blocks--block" style={{
                            background:!dark ? "#201C2B" : "",
                            border:!dark &&  "1px solid #FA00FF",
                        }}>
                            <div className={"img"}>
                                <img src={reviews   } alt=""/>
                            </div>
                            <p className={!dark ? "lH1" : "h1"}>
                                Мария
                            </p>
                            <p className={!dark ? "lP" : "p"}>
                                Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех пор, пока ваши работы не достигнут желаемого уровня.
                            </p>


                        </div>
                        <div className="reviews--blocks--block" style={{
                            background:!dark ? "#201C2B" : ""
                            }}>
                            <div className={"img"}>
                                <img src={reviews   } alt=""/>
                            </div>
                            <p className={!dark ? "lH1" : "h1"}>
                                Мария
                            </p>
                            <p className={!dark ? "lP" : "p"}>
                                Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех пор, пока ваши работы не достигнут желаемого уровня.
                            </p>


                        </div>
                        <div className="reviews--blocks--block" style={{
                            background:!dark ? "#201C2B" : ""
                            }}>
                            <div className={"img"}>
                                <img src={reviews   } alt=""/>
                            </div>
                            <p className={!dark ? "lH1" : "h1"}>
                                Мария
                            </p>
                            <p className={!dark ? "lP" : "p"}>
                                Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех пор, пока ваши работы не достигнут желаемого уровня.
                            </p>


                        </div>
                        <div className="reviews--blocks--block" style={{
                            background:!dark ? "#201C2B" : ""
                            }}>
                            <div className={"img"}>
                                <img src={reviews   } alt=""/>
                            </div>
                            <p className={!dark ? "lH1" : "h1"}>
                                Мария
                            </p>
                            <p className={!dark ? "lP" : "p"}>
                                Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех пор, пока ваши работы не достигнут желаемого уровня.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
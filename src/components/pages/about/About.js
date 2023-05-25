import React from 'react';
import "./About.scss"
import Hero from "../../main-page/hero/Hero";
import {useDispatch, useSelector} from "react-redux";
import Bakay from "../../../assets/images/3.jpg"
import Urmat from "../../../assets/images/2.jpg"
import telegram from "../../../assets/images/telegram.svg"
import telegramLight from "../../../assets/images/tele.png"
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {HOVER, HOVER_COURSE} from "../../../store/Reducer/ActionTypes";
const About = () => {
    const {dark} = useSelector(state => state)
    const dispatch = useDispatch()
    const getHover = () => {
        dispatch({type:HOVER,payload:false})
    }
    const getHoverCourse = () => {
        dispatch({type:HOVER_COURSE,payload:false})
    }
    return (
        <>
          <Hero/>
            <div id="about">
                <div className="container">
                    <div className="about" onMouseOver={() => getHover() || getHoverCourse()}>
                        <div className={"about--title"}>
                            <h1 className={!dark ? "lTitle" : "title"}>Наша команда</h1>
                            <p className={!dark ? "lDesc" : "desc"}>Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех пор, пока ваши работы не достигнут желаемого уровня.Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех пор, пока ваши работы не достигнут желаемого уровня.Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и </p>

                            </div>
                        <div className="about--images">
                            <div className={"about--images--img"}>
                                <img src={Bakay} alt=""/>
                            </div>
                            <div className={"about--images--img"}>
                                <img src={Bakay} alt=""/>
                            </div>
                            <div className={"about--images--img"}>
                                <img src={Bakay} alt=""/>
                            </div>
                        </div>
                        <div className="about--blocks">
                            <div className={"about--blocks--block--one"} style={{
                                background:!dark ? "rgba(57, 46, 92, 1)" : ""
                            }}>
                                <h2 className={!dark ? "lH2" : "h2"}>Бакай Бердибеков</h2>
                                <h3 className={!dark ? "lH3" : "h3"}>Backend developer</h3>
                                <p className={!dark ?  "lDesc" : "desc"}>Уважаемые пользователи, мое имя - Бакай Бердибеков. Мне 21 год. Я являюсь автором данной платформы и занимаюсь ее управлением в качестве проектного менеджера и разработчика бэкенда.
                                    С радостью предоставляю вам возможность использовать нашу платформу. Если у вас возникнут вопросы или предложения, не стесняйтесь обращаться.
                                    С уважением, Бакай Бердибеков.
                                </p>
                                <div className={"social"}>
                                    <a href="https://www.instagram.com/aibakkay/" target="_blank" ><BsInstagram className={!dark ? "lIcon" : "icon"}/></a>
                                    <a href="https://wa.me/+996771541217" target="_blank"><BsWhatsapp className={!dark ? "lIcon" : "icon"}/></a>
                                    <a href="https://t.me/bakaybro" target="_blank">
                                        {
                                            !dark ? <img src={telegramLight} alt="" className={"lIconImg"}/>
                                                : <img src={telegram} alt="" className={"iconImg"}/>
                                        }
                                    </a>
                                </div>
                            </div>
                            <div className={"about--blocks--block--two"} style={{
                                background:!dark ? "rgba(57, 46, 92, 1)" : ""
                            }}>
                                <h2 className={!dark ? "lH2" : "h2"}>Урмат Жекшенов</h2>
                                <h3 className={!dark ? "lH3" : "h3"}>Frontend developer</h3>
                                <p className={!dark ?  "lDesc" : "desc"}>
                                    Всем привет.
                                    Меня зовут Урмат. И мне 20 лет.
                                    Сейчас я учусь в Кыргызско-Турецкий университет "Манас".
                                    Я сейчас начинающий Frontend разработчик.
                                </p>
                                <div className={"social"}>
                                    <a href="#" target="_blank" className={!dark ? "lIcon" : "icon"}><BsInstagram /></a>
                                    <a href="https://wa.me/+996505290702" target="_blank"><BsWhatsapp className={!dark ? "lIcon" : "icon"}/></a>
                                    <a href="https://t.me/Urmat_dev" target="_blank">
                                        {
                                            !dark ? <img src={telegramLight} alt="" className={"lIconImg"}/>
                                                : <img src={telegram} alt="" className={"iconImg"}/>
                                        }
                                    </a>
                                </div>
                            </div>
                            <div className={"about--blocks--block--three"} style={{
                                background:!dark ? "rgba(57, 46, 92, 1)" : ""
                            }}>
                                <h2 className={!dark ? "lH2" : "h2"}>Аксана Сатыбалдиева</h2>
                                <h3 className={!dark ? "lH3" : "h3"}>UX-UI Design</h3>
                                <p className={!dark ?  "lDesc" : "desc"}>Логомашина — известная дизайн-студия, которая сделала больше всех логотипов в России. Основное отличие курсов — большое количество практики и видеоразборы от кураторов до тех</p>
                                <div className={"social"}>
                                    <a href="#" target="_blank" ><BsInstagram className={!dark ? "lIcon" : "icon"}/></a>
                                    <a href="https://wa.me/+996778581711" target="_blank"><BsWhatsapp className={!dark ? "lIcon" : "icon"}/></a>
                                    <a href="https://t.me/+996778581711" target="_blank">
                                        {
                                            !dark ? <img src={telegramLight} alt="" className={"lIconImg"}/>
                                                : <img src={telegram} alt="" className={"iconImg"}/>
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default About;
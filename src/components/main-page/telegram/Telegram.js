import React from 'react';
import "./Telegram.scss"
import {useSelector} from "react-redux";
const Telegram = () => {
    const {dark} = useSelector(state => state)
    return (
        <div id="telegram" style={{
            background:!dark ? "rgba(151,11,183,0.91)" : ""
        }}>
            <div className="container">
                <div className="telegram">
                    <div className="telegram--title">
                        <h1 className={!dark ? "lightH1" : ""}>Присоединяйтесь к нашему telegram каналу</h1>
                        <p className={!dark ? "p" : ""}>В нашем чате вы можете общаться с другими людьми о
                            курсах, задавать вопросы и получить ответы.</p>
                    </div>
                    <button className={!dark ? "btn" : "telegram--btn"}>
                        <a href="https://t.me/+AENaIier6Do1NTUy">Посетить канал</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Telegram;
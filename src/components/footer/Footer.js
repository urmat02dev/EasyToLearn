import React from 'react';
import "./Footer.scss"
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {RiTelegramLine} from "react-icons/ri";
import {CiFacebook} from "react-icons/ci";
import {useSelector} from "react-redux";
const Footer = () => {
  const {dark} = useSelector(state => state)
  return (
    <div id="footer" style={{
      background:!dark ?  "#201C2B" : ""
    }}>
      <div className="container">
        <div className="footer">
          <div className="footer--item">
            <h1 className={!dark ? "lightTitle" : "title"}>Easy
              <span className={!dark ? "lightTitle" :"To"}>To</span>
              <span className={!dark ?  "lightTitle" : "Learn"}>Learn</span>
            </h1>
            <p className={!dark ? "lightP" : "p"}>Ресурс видеоуроков программирования для разработчиков. Бери знания
              своего профиля у нас, ведь мы самые лучшие блеать. Серьезно.</p>
          </div>
          <div className="footer--items">
            <h1 className={!dark ? "lightH1" : "" }>Категории</h1>
            <p className={!dark ? "light" : ""}>Все категории</p>
            <p className={!dark ? "light" : ""}>HTML</p>
            <p className={!dark ? "light" : ""}>CSS</p>
            <p className={!dark ? "light" : ""}>JavaScript</p>
            <p className={!dark ? "light" : ""}>React.js</p>
            <p className={!dark ? "light" : ""}>Java</p>
            <p className={!dark ? "light" : ""}>Typecript</p>
            <p className={!dark ? "light" : ""}>Другое (Frontend)</p>
          </div>
          <div className="footer--itemz">
            <h1 className={!dark ? "lightH1" : ""}>связаться с нами</h1>
            <a href="tel: +996 222 863 999" className={!dark ? "lightA" : ""}>+996 222 863 999</a>
            <a href="tel:+996505290702" className={!dark ? "lightA" : ""}>+996 505 290 702</a>
            <a href="tel: +996 222 863 999" className={!dark ? "lightA" : ""}>+996 222 863 999</a>
            <div className="footer--itemz--social">
              <a href="https://www.instagram.com/"><BsInstagram className={!dark ? "lightI" :"icon"}/></a>
              <a href="https://t.me/+AENaIier6Do1NTUy"><RiTelegramLine className={!dark ? "light" :"icons"}/></a>
              <a href="https://wa.me/996505290702/"><BsWhatsapp className={!dark ? "lightI" :"icon"}/></a>
              <a href="https://www.facebook.com/"><CiFacebook className={!dark ? "light" :"icons"}/></a>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import "./Category.scss"
import {NavLink} from "react-router-dom";
import Hero from "../../main-page/hero/Hero";
import {TfiAngleRight} from "react-icons/tfi";
import {BiSearch} from "react-icons/bi";
import all1 from "../../../assets/images/all1.png"

const Category = () => {
    return (<>
        <Hero/>
        <div id={"category"}>
            <div className="container">
                <div className="category">
                    <div className="category--href">
                        <NavLink to={"/"}> Главная страница <TfiAngleRight className={"icon"}/></NavLink>
                        <NavLink to={"/"}> Категории </NavLink>

                    </div>
                    <div className="category--title">
                        <h1>Список Категорий </h1>
                        <p>СН постоянно работает над пополнением курсов в существующих категориях и над организацией новых!</p>
                        <div className={"category--title--input"}>
                            <BiSearch className={"icon"}/>
                            <input type="search" placeholder={"Поиск по категориям"}/>
                        </div>
                    </div>
                    <h1>Все категории </h1>
                    <div className="category--all">

                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                        <div className={"category--all--block"}>
                            <img src={all1} alt=""/>
                            <p>Adobe XD</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
};

export default Category;
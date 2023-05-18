import React from 'react';
import "./BookCard.scss"
import book from "../../../assets/images/book.png"
import {useSelector} from "react-redux";
const BookCard = ({el}) => {
    const {dark} = useSelector(state => state)
    return (
        <div  className={"bookcard"} style={{
            background:!dark ? "white" :"",
            border:!dark ? "1px solid #392E5C" : ""
        }}>
            <div className={"bookcard--img"}>
                <img src={book} alt=""/>
            </div>
            <div className={"bookcard--desc"}>
                <p className={!dark ? "lPrice" : "price"}>{Math.floor(el.price)}c.</p>
                <h1 className={!dark ? "lTitle" : "title"}>{el.title.slice(0,20)}</h1>
                <h2 className={!dark ? "lAuthor" : "author"}>Джон Дакетт</h2>
            </div>
            <div className={"bookcard--btn"}>
                <button className={!dark ? "lButton" : ""}>Купить</button>
            </div>

        </div>
    );
};

export default BookCard;
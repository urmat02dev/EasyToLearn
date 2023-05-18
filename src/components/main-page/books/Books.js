import React, {useEffect, useState} from 'react';
import "./Books.scss"
import {useSelector} from "react-redux";
import axios from "axios";
import BookCard from "./BookCard";
import Slider from "react-slick";

const Books = () => {
    const {dark} = useSelector(state => state)
    const [book , setBook] = useState([])
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const getBackend = async () => {
        try {

            const res = await axios.get("https://fakestoreapi.com/products")
            const {data} = res
            await setBook(data)

        }
        catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        getBackend()
    },[])
    return (
        <div id={"books"}>
            <div className="container">
                <div className={"books"}>
                    <h1 className={!dark ? "books--dark" : "books--title"}>
                        Последние добавленные книги
                    </h1>
                    <div className={"books--slider"}>
                        <Slider {...settings}>
                            {
                                book.map(el => <BookCard el={el}/>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Books;
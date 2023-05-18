import React, {useEffect, useState} from 'react';
import CourseCard from "../../pages/course-card/CourseCard";
import axios from "axios";
import "./PopularCourse.scss"
import {useSelector} from "react-redux";

const PopularCourse = () => {
    const [course , setCourse] = useState([])
    const {dark} = useSelector(state => state)
    const getBackend = async () => {
        try {

            const res = await axios.get("https://fakestoreapi.com/products?limit=5")
            const {data} = res
            await setCourse(data)

        }
        catch (e){
            console.log(e)
        }
    }
    console.log(course)
    useEffect(() => {
        getBackend()
    },[])
    return (
        <div id={"popular-course"}>
            <div className="container">
                <div className="popular-course">
                    <h1 className={!dark ?  "h1" :"title"}>Популярные курсы</h1>
                    {
                        course.map(el => <CourseCard el={el}/>)
                    }
                    <div className="popular-course--btn">
                        <button>Все курсы</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;
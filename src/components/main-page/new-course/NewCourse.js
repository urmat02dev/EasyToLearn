import React, {useEffect, useState} from 'react';
import "./NewCourse.scss"
import CourseCard from "../../pages/course-card/CourseCard";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {HOVER, HOVER_COURSE} from "../../../store/Reducer/ActionTypes";
const NewCourse = () => {
    const [course , setCourse] = useState([])
    const [courseT , setCourseT] = useState([])
    const {dark} = useSelector(state => state)
    const dispatch = useDispatch()
    const getHover = () => {
        dispatch({type:HOVER,payload:false})
    }
    const getHoverCourse = () => {
        dispatch({type:HOVER_COURSE,payload:false})
    }
    const getBackend = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/course/get-all")
            const {data} = res
            await setCourse(data.value)
            console.log(res)

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
        <div id={"new-course"} onMouseOver={() => getHover() || getHoverCourse()}>
            <div className="container">
                <div className="new-course" >
                    <h1 className={!dark ? "darkColor" : "title"}>Последние добавленные курсы</h1>
                    {
                        course.map(el => <div>
                                <h1> {el.courseModel.id}</h1>
                            <p>{el.courseModel.courseName}</p>
                        </div>)
                    }
                    <div className="new-course--btn">
                        <button>Все курсы</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCourse;
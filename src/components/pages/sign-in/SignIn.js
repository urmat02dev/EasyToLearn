import React, {useState} from 'react';
import "./SignIn.scss"
import Hero from "../../main-page/hero/Hero";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {HOVER, HOVER_COURSE, SIGN_UP} from "../../../store/Reducer/ActionTypes";
const SignIn = () => {
    const [value,setValue] = useState({
        birthday: "",
        email: "",
        fullName: "",
        password: "",
        username: "",


    })
    let nav = useNavigate()
    const dispatch = useDispatch()
    const {signUp} = useSelector(state => state)
    const getHover = () => {
        dispatch({type:HOVER,payload:false})
    }
    const getHoverCourse = () => {
        dispatch({type:HOVER_COURSE,payload:false})
    }
    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    const getSubmit = async (e) => {
        e.preventDefault()
        const url = await axios.post("http://localhost:8080/api/user/sign-up",{
            "birthDay":value.birthday,
            "email": value.email,
            "fullName":value.fullName,
            "password": value.password,
            "username": value.username
        })
        dispatch({type:SIGN_UP,payload:url})
        console.log(url)

    }
    return (
        <>
        <Hero/>
            <div id={"sign-in"}>
                <div className="container">
                    <div className="sign-in" onMouseOver={() => getHover() || getHoverCourse()}>
                        <div className="sign-in--title">
                            <p>Пожалуйста, войдите, чтобы продолжить</p>


                        </div>
                        <form action="" className={"sign-in--form"} onSubmit={(e) => getSubmit(e)}>
                            <input type="email" placeholder={"Эл.адрес "}  name={"email"} onChange={(e) =>  handleChange(e)}/>
                            <input type="password"  placeholder={"Пароль"} name={"password"} onChange={(e) =>  handleChange(e)}/>

                            <div className={"sign-in--form--signIn"}>
                                <NavLink className={"p"} to={"/forgot"}>Забыл пароль</NavLink>
                                <NavLink className={"sign-up"} to={"/sign-up"}>Sign Up</NavLink>
                            </div>
                            <div className={"sign-in--form--btns"}>
                                <button className={"signIn"}>Sign in</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>

    );
};

export default SignIn;
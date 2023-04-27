import React from 'react';
import "./SignUp.scss"
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Hero from "../../main-page/hero/Hero";
const SignUp = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <div id={"sign-up"}>
                <div className="container">
                    <div className="sign-up">
                        <div className="sign-up--title">
                            <p>Пожалуйста, зарегистрируйтесь, чтобы продолжить</p>

                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SignUp;
import React from 'react';
import Hero from "./hero/Hero";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainPage = () => {

  fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
    </>
  );
};

export default MainPage;
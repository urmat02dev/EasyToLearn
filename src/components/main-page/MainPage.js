import React from 'react';
import Hero from "./hero/Hero";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tabs from "./tabs/Tabs";
import NewCourse from "./new-course/NewCourse";
import PopularCourse from "./popular-course/PopularCourse";
import Books from "./books/Books";
import Telegram from "./telegram/Telegram";
import Reviews from "./reviews/Reviews";

const MainPage = () => {


  return (
    <>
      <Hero/>
      <Tabs/>
      <NewCourse/>
        <Books/>
        <Telegram/>
        <PopularCourse/>
        <Reviews/>
    </>
  );
};

export default MainPage;
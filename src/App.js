import './App.scss';
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Category from "./components/pages/category/Category";
import About from "./components/pages/about/About";
import SignIn from "./components/pages/sign-in/SignIn";
import SignUp from "./components/pages/sign-up/SignUp";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/category"} element={<Category/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/sign-in"} element={<SignIn/>}/>
        <Route path={"/sign-up"} element={<SignUp/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

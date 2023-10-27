import React, {useEffect, useState} from "react";
import "./index.css"
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import styled from 'styled-components'
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import FileInfo from "./fileInfo";
import Card from "./pages/Card/Card"
import Footer from "./components/Footer/Footer";
import TelCardCom from "./components/TelCardCom/TelCardCom";
import NavbarCom from "./components/Nav/Nav";


function App() {

    return (
        <NavbarStyle>
            <NavbarCom/>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/:id" element={<FileInfo/>}/>
            </Routes>
            <TelCardCom/>
            <Footer/>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`

`
export default App;


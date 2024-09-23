import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Home from "../Contents/Home";
import About from "../Contents/About";
import Experience from "../Contents/Experience";
import Contact from "../Contents/Contact";


export const RouteComponent=()=>{

    return(
        <>
        <Routes>
            <Route path="/" name="Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Experience" element={<Experience/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
        </>
    )
}
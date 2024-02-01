import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import Panier from "./components/Panier";
import Search from "./components/Search";


function App(){
    return(
        // <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/PrductDetails/:id" element={<SingleProduct/>}/>
                <Route  path="/Panier" element={<Panier/>}/>
                <Route  path="/Search" element={<Search/>}/>
            </Routes>
        // </BrowserRouter>
    )
}
export default App
import React from "react";
import Header from "./Header";
import Products from "./Products";

function Home(){
    return (
        <div className="container-fluid">
            <Header/>
            <div className="row">
                <Products/>
            </div>
        </div>
    )
}
export default Home
import React from "react";


const Products = () => {

    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>



    </div>

    <div className="carousel">
        <div className="carousel-1"></div>
        <div className="carousel-1-info">
            <h6>Smart Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block"><a href="/Individual">View</a></button>
        <button className="stock-block">In Stock: 5</button>
        <button className="price-block">R1069.00</button>
    </div>

    </>
    )
};

export default Products;
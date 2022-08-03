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

    <div className="latest1-block">Smart Collar</div>
    <div className="latest2-block">Flat Collar</div>


    <div className="carouselpro">
        <div className="carousel-pro"></div>
        <div className="carousel-pro-info">
            <h6>Smart Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block"><a href="/Individual">View</a></button>
        <button className="stock-block">In Stock: 5</button>
        <button className="price-block">R1069.00</button>
    </div>

    <div className="carouselpro2">
        <div className="carousel-pro2"></div>
        <div className="carousel-pro2-info">
            <h6>Flat Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block"><a href="/Individual">View</a></button>
        <button className="stock-block">In Stock: 5</button>
        <button className="price-block">R1069.00</button>
    </div>

    <div className="footer"></div>


    </>
    )
};

export default Products;
import React from "react";


const Individual = () => {

    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>
    </div>

    <div className="welcome-image"></div>

    <div className="img1"></div>
    <div className="img2"></div>
    <div className="img3"></div>
    
    <div className="product-des"></div>
    <div className="size-chart"></div>


    <select className="fabric-drop" name="selecting">
        <option>Select a Fabric</option>
        <option>Cotton</option>
        <option>Leather</option>
        <option>Nylon</option>
        <option>Metal</option>
    </select>

    <select className="colour-drop" name="selecting">
        <option>Select a Colour</option>
        <option>Brown</option>
        <option>Black</option>
        <option>Blue</option>
        <option>Pink</option>
    </select>

    <select className="size-drop" name="selecting">
        <option>Select a Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
    </select>

    <select className="quantity-drop" name="selecting">
        <option>Select a Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>


    <div className="footer"></div>

    </>
    )
};

export default Individual;
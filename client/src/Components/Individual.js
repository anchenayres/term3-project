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

    <div className="welcome-image">Justin Collar | Silicone</div>
    <div className="img4"></div>


    <div className="img1"></div>
    <div className="img2"></div>
    <div className="img3"></div>
    
    <div className="product-des">Smart Collar | Multi-coloured  |  Silicone Collar | variety of colours all around the collar | playful 
                | metal buckle | comes in a variety of colours GPS Included | Total Price: R599.00<br></br>Customise your order below:<tr>Size</tr>
    <select className="size-drop" name="selecting">
        <option>Select a Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
    </select><p5>Fabric</p5>
    <select className="fabric-drop" name="selecting">
        <option>Select a Fabric</option>
        <option>Cotton</option>
        <option>Leather</option>
        <option>Nylon</option>
        <option>Metal</option>
    </select><p6>Colour</p6>
    <select className="colour-drop" name="selecting">
        <option>Select a Colour</option>
        <option>Brown</option>
        <option>Black</option>
        <option>Blue</option>
        <option>Pink</option>
    </select><p7>Quantity</p7>
    <select className="quantity-drop" name="selecting">
        <option>Select a Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    <button className="addcart-button"><a href="/Cart">Add to Cart</a></button>
    <button className="buy-button"><a href="/Checkout">Buy it now</a></button>
    </div>
    <div className="size-chart"></div>

    {/* <div className="carousel">
        <div className="carousel__item">Content 1</div>
        <div className="carousel__item carousel__item--selected">Content 2</div>
        <div className="carousel__item">Content 3</div>
        <div className="carousel__nav">
            <span className="carousel__button"></span>
            <span className="carousel__button carousel__button--selected"></span>
            <span className="carousel__button"></span>
        </div>
    </div> */}


    

    

    

    


    <div className="footer"></div>

    </>
    )
};

export default Individual;
import React from "react";



const Cart = () => {

    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>
    </div>

        <div className="list">
            <p2>Description</p2>
                <p2>Fabric</p2>
                <p2>Colour</p2>
                <p2>Size</p2>
                <p2>Quantity</p2>
                <p2>Price</p2>


            <div className="list-blocks">

                <p1>Flat Collar</p1>
                <p1>Leather</p1>
                <p1>Brown</p1>
                <p1>XL</p1>
                <p1>1</p1>
                <p1>R449.00</p1>



            <div className="list-button1">Remove</div>

            </div>
        </div>

        <div className="total-price">
                <p1>Shipping Fee: R18.99</p1>
                <p1>Total: R499.00</p1>

        <div className="list-button2"><a href="/Checkout">Checkout</a></div>
        </div>

        <div className="footer"></div>

    </>
    )
};

export default Cart;
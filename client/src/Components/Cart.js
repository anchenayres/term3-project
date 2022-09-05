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

    <div className="topwelcome">Your Cart</div>
        <div className="list">
            <p2>Description</p2>
                <p2>Fabric</p2>
                <p2>Colour</p2>
                <p2>Size</p2>
                <p2>Quantity</p2>
                <p2>Price</p2>


            <div className="list-blocks">

                <p1>Smart Collar</p1>
                <p1>Silicone</p1>
                <p1>Multi-colured</p1>
                <p1>L</p1>
                <p1>1</p1>
                <p1>R449.00</p1>



            <div className="list-button1">Remove</div>

            </div>
        </div>

        <div className="total-price">
                <p1>Subtotal: R499.00</p1>
                <p8>Tax included. Shipping calculated at checkout.</p8>
        <div className="list-button2"><a href="/Checkout">Checkout</a></div>
        <div className="list-button3"><a href="/Products">Continue Shopping</a></div>

        </div>

        <div className="footercart"></div>

    </>
    )
};

export default Cart;
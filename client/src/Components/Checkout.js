import React from "react";



const Checkout = () => {

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

                <p1>Smart Collar</p1>
                <p1>Silicone</p1>
                <p1>Multi-coloured</p1>
                <p1>L</p1>
                <p1>1</p1>
                <p1>R449.00</p1>



            <div className="list-button1">Remove</div>

            </div>
        </div>

        <div className="total-price">
                <p1>Shipping Fee: R18.99</p1>
                <p1>Total: R499.00</p1>
                <p1>Subtotal: R517.99</p1>

        <div className="list-button2"><a href="/Checkout">Checkout</a></div>
        </div>

        <p3><b>Personal Information</b></p3>
        <p3>Name and Surname: Anchen Ayres</p3>
        <p3>Cellphone: 082 659 9584</p3>
        <p3>Email: anchen@gmail.com</p3>
        <p3>Postal Code: 0159</p3>
        <p3>Country: Something</p3>
        <p3>Province: Something</p3>
        <br></br>

        <p3><b>Shipping Address</b></p3>
        <p3>Postal Code: 0159</p3>
        <p3>Country: Something</p3>
        <p3>Province: Something</p3>
        <p3>Street: Something</p3>
        <br></br>

        <p3><b>Order</b></p3>
        <p3>Order Number: 52V89C89B</p3>
        <p3>Order Date: 24 July 2022</p3>
        <p3>Delivery Date: 24 July 2022</p3>





        <div className="footercheckout"></div>

    </>
    )
};

export default Checkout;
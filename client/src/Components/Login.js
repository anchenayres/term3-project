import React from "react";



const Login = () => {

    return (
    <>

    <div className="main-block">
        <h1>Sign In</h1>
        <h2>Welcome back to Collar City! Enjoy the luxury of shopping for your pets comfort.</h2>
       <form>
            <label>
                <input className="fill1"type="text" id="productName" label="Enter Name" placeholder="Email" />
            </label>
            <label>
                <input className="fill2"type="text" id="productName" label="Enter Name" placeholder="Password" />
            </label>
        </form>
        <button className="login-button"><a href="/Home">Sign In</a></button>
    </div>
    
    <div className="login-image"></div>

    </>
    )
};

export default Login;
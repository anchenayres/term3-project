import Navigation from "./Navigation";
import Login from "./Login";
import Home from "./Home";
import Products from "./Products";
import Individual from "./Individual";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";



function App() {
  return (  

    
    <>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/Home" element = {<Home />} />
        <Route path="/Products" element = {<Products />} />
        <Route path="/Individual" element = {<Individual />} />
        <Route path="/Cart" element = {<Cart />} />
        <Route path="/Checkout" element = {<Checkout />} />
      </Routes>
    </div>







    </>



  );
}

export default App;

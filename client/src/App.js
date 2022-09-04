import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Individual from "./Components/Individual";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";



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

    <div className="App">
    
    </div>






    </>



  );
}

export default App;

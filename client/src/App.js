import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Individual from "./Components/Individual";
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
      </Routes>
    </div>
    </>
  );
}

export default App;

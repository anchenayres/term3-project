import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/Home" element = {<Home />} />

      </Routes>
    </div>
    </>
  );
}

export default App;

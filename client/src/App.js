import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element = {<Login />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

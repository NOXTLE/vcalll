import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Conference from "./pages/Conference";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/room/:id" element={<Conference />}></Route>
    </Routes>
  );
}

export default App;

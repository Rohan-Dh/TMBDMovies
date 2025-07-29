import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieList from "./collections/MovieList.jsx";
import Navbar from "./collections/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;

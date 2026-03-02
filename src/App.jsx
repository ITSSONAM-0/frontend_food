import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, NavigationBar } from "./components/navbar.jsx";
import cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
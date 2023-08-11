import React from "react";
import "./header.css";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className=" flex justify-between items-center py-2 px-20">
      <h2 className="logo">DamolaDev</h2>
      <Navbar />
    </header>
  );
};

export default Header;

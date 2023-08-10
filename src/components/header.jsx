import React from "react";
import "./header.css";
import Navbar from "./navbar";
import Headline from "./headline";
const Header = () => {
  return (
    <>
      <header className="bg-gray-100 h-screen">
        <Navbar />
        <Headline />
      </header>
    </>
  );
};

export default Header;

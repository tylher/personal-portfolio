import React from "react";
import "./header.css";
import Navbar from "./navbar";
import Headline from "./headline";
const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <Headline />
      </header>
    </>
  );
};

export default Header;

import React from "react";
import "./header.css";
import Mysvg from "./mysvg";
import Navbar from "./navbar";
const Header = () => {
  return (
    <>
      <header>
        <Navbar />

        <div>
          <Mysvg />
        </div>
      </header>
    </>
  );
};

export default Header;

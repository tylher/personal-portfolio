import React from "react";
import headshot from "../images/headshot.png";
import "./header.css";
import Mysvg from "./mysvg";
const Header = () => {
  const blobStyle = {
    width: "300px",
    height: "280px",
    overFlow: "hidden",
  };
  return (
    <>
      <header>
        <div>Header</div>

        <div style={blobStyle}>
          <Mysvg />
        </div>
      </header>
    </>
  );
};

export default Header;

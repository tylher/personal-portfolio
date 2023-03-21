import React from "react";
import headshot from "../images/headshot.png";
import "./header.css";
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

        <div style={blobStyle}></div>
      </header>
    </>
  );
};

export default Header;

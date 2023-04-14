import React, { useState } from "react";

const Navbar = () => {
  const names = ["Home", "Skills", "About", "Works"];
  const [active, setActive] = useState("Home");
  const handleClick = (value) => {
    setActive(value);
  };
  return (
    <div className="flex justify-between items-center py-2 px-20">
      <h2 className="logo">DamolaDev</h2>
      <ul className="flex w-2/3 justify-center items-center gap-6">
        {names.map((name, id) => {
          return (
            <li
              key={id}
              className={"text-md text-gray-500 font-semibold "
                .concat(
                  active == name
                    ? " rounded-md px-2 py-1 bg-gradient-to-tr from-[#00dbde] via-[#567eb7] to-[#f62ede] text-white"
                    : ""
                )
                .concat(active == name ? "" : "nav-link")}
              onClick={() => handleClick(name)}
            >
              <a className={"tracking-[0.15em]"} href="#">
                {name}
              </a>
            </li>
          );
        })}
      </ul>

      <ul>
        <li
          className={"text-md text-gray-500 font-semibold "
            .concat(
              active == "Contact"
                ? " rounded-md px-2 py-1 bg-gradient-to-tr from-[#00dbde] via-[#567eb7] to-[#f62ede] text-white"
                : ""
            )
            .concat(active == "Contact" ? "" : "nav-link")}
          onClick={() => handleClick("Contact")}
        >
          <a className="tracking-[0.15em]">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

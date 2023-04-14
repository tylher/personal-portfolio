import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-20">
      <h2 className="logo">DamolaDev</h2>
      <ul className="flex w-2/3 justify-center items-center gap-6">
        <li className="text-xl text-gray-600 font-medium tracking-wider nav-link">
          Home
        </li>
        <li className="text-xl text-gray-600 font-medium tracking-wider nav-link">
          skills
        </li>
        <li className="text-xl text-gray-600 font-medium tracking-wider nav-link">
          About
        </li>
        <li className="text-xl text-gray-600 font-medium tracking-wider nav-link">
          My works
        </li>
      </ul>

      <ul>
        <li className="text-xl text-gray-600 font-medium tracking-wider nav-link">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

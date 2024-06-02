import { useState } from "react";
import { links } from "./navLinks";
import "./styles/hamburger.css";

function MobileHanburger() {
  const [open, setopen] = useState<Boolean>(false);
  return (
    <svg
      onClick={() => setopen(!open)}
      id={open && "hamburger"}
      className="md:hidden Header__toggle-svg"
      viewBox="0 0 60 40"
    >
      <g
        stroke="#fff"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path id="top-line" d="M10,10 L50,10 Z"></path>
        <path id="middle-line" d="M10,20 L50,20 Z"></path>
        <path id="bottom-line" d="M10,30 L50,30 Z"></path>
      </g>
    </svg>
  );
}

function Nav() {
  return (
    <div className=" w-full flex items-center justify-center">
      <div className="hidden  md:flex   md:space-x-5 ">
        {links.map((link, index) => (
          <nav className="text-white text-sm hover:text-white/60" key={index}>
            {link.name}
          </nav>
        ))}
      </div>
      <MobileHanburger />
    </div>
  );
}

export default Nav;

import React, { useEffect, useState } from "react";
import Atnam_english from "../assets/Atnam_english.png";
import icon from "../assets/Atnam_icon.png";
import Atnam_hindi from "../assets/Atnam_hindi.png";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [Name, setName] = useState(true);
  const [scroll, setScroll] = useState(0);

  const NameChangeHandler = () => {
    setName(!Name);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NameChangeHandler();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [Name]);

  const scrollFunc = () => {
    setScroll(window.scrollY);
  };

  window.addEventListener("scroll", scrollFunc);

  return (
    <nav
      className={` w-screen h-[4rem]  flex justify-around items-center p-2  nav-bar`}
    >
      <div className="logo w-28 h-fit flex justify-center items-center  gap-4 ">
        <div className="image-container">
          <img className="w-10 h-10" src={icon} alt="logo" />
        </div>
        <div className="name flex items-center justify-center poppins-bold">
          <span className={Name === true ? "block" : "hidden"}>Ātman</span>
          <span className={Name === false ? "block" : "hidden"}>आत्मन् </span>
        </div>
      </div>
      <div className="nav-links ">
        <ul className="flex justify-around items-center gap-8 ">
          <li className="nav-item cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

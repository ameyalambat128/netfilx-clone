import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && "navbar-black"}`}>
      <div className="navbar-container">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="img"
          className="logo"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="img"
          className="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;

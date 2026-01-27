import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSidebar, closeSubmenu, openSubmenu } = useGlobalContext();

  const displaySubmenu: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const page = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;

    const bottom = tempBtn.bottom - 3;

    if (page) openSubmenu(page, { center, bottom });
  };

  const handleSubmenu: React.MouseEventHandler<HTMLElement> = (e) => {
    const targetElement = e.target as HTMLElement;
    if (!targetElement.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  const navLinks = ["products", "developers", "company"];

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;

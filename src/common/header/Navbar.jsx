import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBorderAll, FaTimes, FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <FaBorderAll />
            <h4>
              Categories{" "}
              <FaChevronDown
                style={{
                  marginLeft: "10px",
                }}
              />
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
            </ul>
            <buttom
              className="toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <FaTimes className="close home-btn" />
              ) : (
                <FaBars className="open" />
              )}
            </buttom>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

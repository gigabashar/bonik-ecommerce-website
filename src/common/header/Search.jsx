import React from "react";
import logo from "./assets/images/logo.svg";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const Search = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="logo" />
          </div>

          <div className="search-box f_flex">
            <BsSearch
              style={{
                width: "5%",
                textAlign: "center",
                fontSize: "20px",
                opacity: "15px 20px",
              }}
            />
            <input type="text" placeholder="Search any item you want..." />
            <span>All Catergory</span>
          </div>
          <div className="icon f_flex width">
            <FaUserAlt className="icon-circle" />
            <div className="cart">
              <Link to="/cart">
                <GiShoppingBag className="icon-circle" />
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

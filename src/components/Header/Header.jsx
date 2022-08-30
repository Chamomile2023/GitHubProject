import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = ({ data }) => {
  //Toggle Button
  const [bar, setBar] = useState(false);
  let openBar = () => {
    return setBar((e) => !e);
  };
  //Dropdown
  const [dropdown, setDropdown] = useState(false);
  let openDropdown = () => {
    return setDropdown((e) => !e);
  };

  let out = useNavigate();
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="header__hero">
            <div className="header__logo">
              <NavLink to="/main">
                <i class="fa-brands fa-github header--icon"></i>
              </NavLink>
            </div>
            <div className="header__search">
              <input
                type="text"
                placeholder="Search or jump to..."
                className="header--input"
              />
              <div className="header--span">/</div>
            </div>
            <div className="header__menu">
              <ul className="header__menu--list">
                <li className="header__menu--item">
                  <a
                    href="https://github.com/pulls"
                    className="header__menu--link"
                  >
                    Pull requests
                  </a>
                </li>
                <li className="header__menu--item">
                  <a
                    href="https://github.com/issues"
                    className="header__menu--link"
                  >
                    Issues
                  </a>
                </li>
                <li className="header__menu--item">
                  <a
                    href="https://github.com/marketplace"
                    className="header__menu--link"
                  >
                    Marketplace
                  </a>
                </li>
                <li className="header__menu--item">
                  <a
                    href="https://github.com/explore"
                    className="header__menu--link"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__avatar">
              <img
                src="https://avatars.githubusercontent.com/u/101083132?v=4"
                className="header__avatar--span"
              />
              <i
                className="fa-solid fa-caret-down header__avatar--icon"
                onClick={() => openDropdown()}
              ></i>
              <div
                className={`header__avatar__dropdown ${dropdown ? "" : "hide"}`}
              >
                <div className="header__avatar--message"></div>
                <ul className="header__avatar--list">
                  <li className="header__avatar--item one">
                    <NavLink to="/main" className="header__avatar--links">
                      Chamomile2023
                    </NavLink>
                  </li>
                  <li className="header__avatar--item">
                    <a href="#" className="header__avatar--links">
                      Dashboard
                    </a>
                  </li>
                  <li className="header__avatar--item">
                    <a href="#" className="header__avatar--links">
                      Pull request
                    </a>
                  </li>
                  <li className="header__avatar--item">
                    <a href="#" className="header__avatar--links">
                      Settings
                    </a>
                  </li>
                  <li className="header__avatar--item">
                    <a href="#" className="header__avatar--links">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header__toggle ">
            <div className="header__toggle__navbar">
              <i className="fa-solid fa-bars " onClick={() => openBar()}></i>
              <i className="fa-brands fa-github header--logo"></i>
              <i className="fa-solid fa-bell"></i>
            </div>
            <div className={`header__toggle__menuBar ${bar ? "" : "hide"}`}>
              <div className="header__toggle__menu">
                <input
                  type="text"
                  className="header__toggle--input"
                  placeholder="Search GitHub"
                />
              </div>
              <ul className="header__toggle--list">
                <li className="header__toggle--item">
                  <a href="#" className="header__toggle--link">
                    Dashboard
                  </a>
                </li>
                <li className="header__toggle--item">
                  <a href="#" className="header__toggle--link">
                    Pull request
                  </a>
                </li>
                <li className="header__toggle--item">
                  <a href="#" className="header__toggle--link">
                    Settings
                  </a>
                </li>
                <li
                  className="header__toggle--item"
                  onClick={() => {
                    return out("/login");
                  }}
                >
                  <a
                    href="#"
                    className={`header__toggle--link ${out("/login")}`}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

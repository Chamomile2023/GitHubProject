import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="header__hero">
                        <div className="header__logo">
                            <i class="fa-brands fa-github header--icon"></i>
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
                                    <a href="#" className="header__menu--link">
                                        Pull requests
                                    </a>
                                </li>
                                <li className="header__menu--item">
                                    <a href="#" className="header__menu--link">
                                        Issues
                                    </a>
                                </li>
                                <li className="header__menu--item">
                                    <a href="#" className="header__menu--link">
                                        Marketplace
                                    </a>
                                </li>
                                <li className="header__menu--item">
                                    <a href="#" className="header__menu--link">
                                        Explore
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="header__avatar">
                            <span className="header__avatar--span"></span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

import React from "react";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSIde";

const Main = () => {
    return (
        <>
            <main className="main">
                <div className="container-fluid">
                    <div className="main__hero">
                        <div className="main__navbar">
                            <ul className="main--list">
                                <li className="main--item">
                                    <a href="#" className="main--link">
                                        <i class="fa-regular fa-book-open"></i>
                                        Overview
                                    </a>
                                </li>
                                <li className="main--item">
                                    <a href="#" className="main--link">
                                        <i class="fa-regular fa-book-bookmark"></i>
                                        Repositories
                                    </a>
                                </li>
                                <li className="main--item">
                                    <a href="#" className="main--link">
                                        <i class="fa-solid fa-list-check"></i>
                                        Projects
                                    </a>
                                </li>
                                <li className="main--item">
                                    <a href="#" className="main--link"></a>
                                </li>
                            </ul>
                        </div>
                        <div className="main__sides">
                            <div className="main__sides__left">
                                <LeftSide />
                            </div>
                            <div className="main__sides__right">
                                <RightSide />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;

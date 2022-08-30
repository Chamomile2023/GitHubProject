import React from "react";
import "./Main.scss";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSIde";
import { NavLink } from "react-router-dom";

const Main = ({ data, totalPage, dataSlice, paginationPage }) => {
  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="main__hero">
            <div className="main__navbar">
              <ul className="main--list">
                <li className="main--item">
                  <NavLink to="/" className="main--link">
                    <i class="fa-solid fa-book-open"></i>
                    Overview
                  </NavLink>
                </li>
                <li className="main--item">
                  <NavLink to="/repository" className="main--link">
                    <i class="fa-solid fa-book-bookmark"></i>
                    Repositories
                    <span className="main--span">{data.length}</span>
                  </NavLink>
                </li>
                <li className="main--item">
                  <a href="#" className="main--link">
                    <i class="fa-solid fa-list-check"></i>
                    Projects
                  </a>
                </li>
                <li className="main--item">
                  <a href="#" className="main--link">
                    <i class="fa-solid fa-cube"></i>
                    Packages
                  </a>
                </li>
              </ul>
            </div>
            <div className="main__sides">
              <div className="main__sides__left">
                <LeftSide data={data} />
              </div>
              <div className="main__sides__right">
                <RightSide
                  data={data}
                  totalPage={totalPage}
                  dataSlice={dataSlice}
                  paginationPage={paginationPage}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

import React from "react";
import "./LeftSide.scss";

const LeftSide = ({ data }) => {
  return (
    <>
      <div className="left">
        <div className="container-fluid">
          <div className="left__hero">
            <div className="left__profile"><img src="https://avatars.githubusercontent.com/u/101083132?v=4" alt="" className="left__profile" /></div>
            <div className="left__nick">
              <h3 className="left--name">Sarvinoz</h3>
              <p className="left--nickname">Chamomile2023</p>
            </div>
            <div className="left__btn">
              <button className="left--btn">Edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;

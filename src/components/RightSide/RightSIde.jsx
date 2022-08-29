import React from "react";
import "./RightSide.scss";

const RightSIde = () => {
  return (
    <>
      <div className="right">
        <div className="container-fluid">
          <div className="right__hero">
            <div className="right__top">
              <h4 className="right--title">Popular repositories</h4>
              <p className="right--parag">Customize your pins</p>
            </div>
            <div className="right__cards">
              <div className="right__card">
                <div className="right__card__name">
                  <h6 className="right__card--title">Country</h6>
                  <span className="right__card--span">Public</span>
                </div>
                <div className="right__language">
                  <div className="right__language--circle">JavaScript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSIde;

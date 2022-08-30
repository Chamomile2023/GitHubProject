import React from "react";
import "./RightSide.scss";
import Pagination from "../Pagination/Pagination"

const RightSIde = ({ data, totalPage, dataSlice, paginationPage }) => {
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
              {data.map((item) => {
                return (
                  <div className="right__card">
                    <div className="right__card__name">
                      <h6 className="right__card--title">
                        <a href={item.html_url} className="right__card--link">
                          {item.name}
                        </a>
                      </h6>
                      <span className="right__card--span">Public</span>
                    </div>
                    <div className="right__language">
                      <div className="right__language--circle circle"></div>
                      <div className="right__language--lan">
                        {item.language}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="right__pagination">
              {/* <Pagination data={data} totalPage={totalPage} dataSlice={dataSlice} paginationPage={paginationPage} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSIde;

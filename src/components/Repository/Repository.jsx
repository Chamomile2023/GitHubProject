import React from "react";
import "./Repository.scss";

const Repository = ({ data }) => {
    return <>
        <div className="repo">
            <div className="container-fluid">
                <div className="repo__hero">
                    <div className="repo__cards">
                        {data.map((item) => {
                            return <div className="repo__card">
                                <div className="repo__card__title">
                                    <a href={item.html_url} className="repo__card--link">{item.name}</a>
                                    <span className="right__card--span">Public</span>
                                </div>
                                <div className="right__language repo--lan">
                                    <div className="right__language--circle circle"></div>
                                    <div className="right__language--lan ">
                                        {item.language}
                                    </div>
                                    <div className="repo__card__date">Update <span className="repo__card--span">{item.updated_at}</span>days ago</div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Repository;

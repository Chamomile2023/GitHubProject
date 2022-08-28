import React from "react";
import "./LoginPage.scss";

const LoginPage = () => {
    return (
        <>
            <div className="login">
                <div className="container-fluid">
                    <div className="login__hero">
                        <div className="login__logo">
                            <i class="fa-brands fa-github login--github"></i>
                        </div>
                        <div className="login__sign">
                            <p className="login--title">Sign in to GitHub</p>
                        </div>
                        <div className="login__basic">
                            <div className="login__user">
                                <p className="login__basic--text">Username or email address</p>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="login__password">
                                <p className="login__basic--text">Password</p>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="login__btn">
                                <button className="btn btn-success">Sign in</button>
                            </div>
                        </div>
                        <div className="login__account">
                            <p className="login__basic--text">
                                New to GitHub?{" "}
                                <span className="login__account--span">Create an account</span> .
                            </p>
                        </div>
                        <div className="login__footer">
                            <ul className="login--list">
                                <li className="login--item">
                                    <a href="#" className="login--link">
                                        Terms
                                    </a>
                                </li>
                                <li className="login--item">
                                    <a href="#" className="login--link">
                                        Privacy
                                    </a>
                                </li>
                                <li className="login--item">
                                    <a href="#" className="login--link">
                                        Security
                                    </a>
                                </li>
                                <li className="login--item">
                                    <a href="#" className="login--link">
                                        Contact
                                    </a>
                                </li>
                                <li className="login--item">
                                    <a href="#" className="login--link">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;

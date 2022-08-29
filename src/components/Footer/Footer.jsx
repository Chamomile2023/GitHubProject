import React from "react";
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="footer__hero">
                        <div className="footer__logo">
                            <i class="fa-brands fa-github footer__logo--logo"></i>
                            <p className="footer--parag">© 2022 GitHub, Inc.</p>
                        </div>
                        <ul className="footer--item">
                            <li className="footer--list">
                                <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" className="footer--link">Terms</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="footer--link">Privacy</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://github.com/security" className="footer--link">Security</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://www.githubstatus.com/" className="footer--link">Status</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://docs.github.com/en" className="footer--link">Docs</a>
                            </li>
                            <li className="footer--list">
                                <a href="#" className="footer--link">Contact GitHub</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://github.com/pricing" className="footer--link">Pricing</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://docs.github.com/en" className="footer--link">API</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://services.github.com/" className="footer--link">Training</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://github.blog/" className="footer--link">Blog</a>
                            </li>
                            <li className="footer--list">
                                <a href="https://github.com/about" className="footer--link">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

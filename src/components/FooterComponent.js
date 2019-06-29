import React from 'react';

export const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <a className="hover-link" href="#">
                            <img className="img-fluid" src="https://www.cutterspoint.com/media/static/images/cp-small-white.png" alt="footer"/>
                        </a>

                    </div>
                    <div className="footer-group justify-content-end col-12 col-md-9 d-flex">
                        <ul className="footer-list align-items-center">
                            <li className="footer-item">
                                <a className="footer-link" href="#">Locations</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">Wholesale</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">Shopping</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">About</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">Employment</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">News</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <span className="col-12 small-footer-text d-flex justify-content-end">©2019 Cutters Point Coffee Co.&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Site by&nbsp;<a href="#" target="_blank" className="white-link designer">Myking Web</a></span>

                </div>
            </div>
        </footer>
    );
}
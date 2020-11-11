import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="d-flex justify-content-between py-3">
                <ul className="d-flex ml-5 my-0">
                    <h6 className="mr-2">Other Countries</h6>
                    <li><a href="#">India - </a></li>
                    <li><a href="#">South Africa - </a></li>
                    <li><a href="#">Indonesia</a></li>
                </ul>
                <div className="d-flex mr-5">
                    <h6 className="mr-2">Free Classifieds in Pakistan</h6>
                    <span>. © 2006-2020 OLX</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import './bottomList.css';

const BottomList = () => {
    return (
        <div className="bottom-list pt-3 pb-4">
            <div className="d-flex justify-content-around">
                <ul>
                    <h6>POPULAR CATEGORIES</h6>
                    <li><a href="#">Cars </a></li>
                    <li><a href="#">Flats for rent </a></li>
                    <li><a href="#">Jobs </a></li>
                    <li><a href="#">Mobile Phones </a></li>
                </ul>
                <ul>
                    <h6>TRENDING SEARCHES</h6>
                    <li><a href="#">Bikes </a></li>
                    <li><a href="#">Watches </a></li>
                    <li><a href="#">Books </a></li>
                    <li><a href="#">Dogs </a></li>
                </ul>
                <ul>
                    <h6>ABOUT US</h6>
                    <li><a href="#">About OLX Group </a></li>
                    <li><a href="#">OLX Blog </a></li>
                    <li><a href="#">Contact Us </a></li>
                    <li><a href="#">OLX for Businesses </a></li>
                </ul>
                <ul>
                    <h6>OLX</h6>
                    <li><a href="#">Help </a></li>
                    <li><a href="#">Sitemap </a></li>
                    <li><a href="#">Legal & Privacy information </a></li>
                </ul>
                <ul>
                    <h6>Follow Us</h6>
                    <div className="icons">
                        <a href="#" className="mr-2 pb-1"><i class="fa fa-facebook-f"></i></a>
                        <a href="#" className="mr-2 px-2 pb-1"><i class="fa fa-twitter"></i></a>
                        <a href="#" className="mr-2 px-2 pb-1"><i class="fa fa-play"></i></a>
                        <a href="#" className="px-2 pb-1"><i class="fa fa-instagram"></i></a>
                    </div>
                    <div className="mt-4 get-from-here">
                        <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" alt="" className="mr-3" />
                        <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" alt=""/>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default BottomList;

import React from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import './navbarContainer.css';

const SlickSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    }
    return (
        <>
        <div className="slick-container">
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <style>{cssstyle}</style>
            <Slider {...settings}>
                <div className="slick-slider-img">
                    <div className="slick-slider-text">
                        <h4>ALL PROJECTS</h4>
                        <span>184 Projects</span>
                    </div>
                    <img src="https://statics.olx.com.pk/olxpk/vyom/carousel/v1/all_projects.png" alt=""/>
                </div>
                <div className="slick-slider-img">
                    <div className="slick-slider-text">
                        <h4>READY FOR POSSESSION</h4>
                        <span>40 Projects</span>
                    </div>
                    <img src="https://statics.olx.com.pk/olxpk/vyom/carousel/v1/ready_to_move.png" alt=""/>
                </div>
                <div className="slick-slider-img">
                    <div className="slick-slider-text">
                        <h4>UNDER CONSTRUCTION</h4>
                        <span>121 Projects</span>
                    </div>
                    <img src="https://statics.olx.com.pk/olxpk/vyom/carousel/v1/under_construction.png" alt=""/>
                </div>
                <div className="slick-slider-img">
                    <div className="slick-slider-text">
                        <h4>NEW PROJECTS</h4>
                        <span>23 Projects</span>
                    </div>
                    <img src="https://statics.olx.com.pk/olxpk/vyom/carousel/v1/new_projects.png" alt=""/>
                </div>
            </Slider>
        </div>
        </>
    );
}

const cssstyle = `
.slick-container{
    background-color: gray;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .3s ease;
}
`
export default SlickSlider;
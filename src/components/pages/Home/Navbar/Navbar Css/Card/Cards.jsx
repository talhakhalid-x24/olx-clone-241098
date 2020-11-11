import React from 'react';
import './card.css';
import '../Data/MobileData';
import '../Data/HouseData';
import '../Data/CarData';
import '../Data/LandPlotData';
import '../Data/MotorData';
import '../Data/TabletData';
import '../Data/TVData';
import { FavoriteBorder } from '@material-ui/icons';

const Cards = (props) => {
    return (
        <div className="main-card card my-3 px-0 col-lg-4">
            <div className="d-flex justify-content-around">
                <div className="mt-2">
                    <span className="card-features p-1">FEATURED</span>
                </div>
                <img src={props.src} className="card-img-top mt-2" alt="..." />
                <div className="mt-2">
                    <FavoriteBorder />
                </div>
            </div>
            <div className="card-body">
                <h6 className="card-text">Rs. {props.price}</h6>
                <p className="card-title">{props.title}</p>
                <div className="d-flex justify-content-between">
                    <span>Location</span>
                    <span className="card-time">{props.time}</span>
                </div>
            </div>
        </div>
    );
}

export default Cards;

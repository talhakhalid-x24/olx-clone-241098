import React from 'react';
import './getApp.css';

const GetApp = () => {
    return (
        <div className="mt-5 getApp-main">
            <div className="d-flex">
                <div>
                    <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt=""/>
                </div>
                <div className="py-4">
                    <h1>TRY THE OLX APP</h1>
                    <h3>Buy, sell and find just about anything using the app on your mobile.</h3>
                </div>
                <div className="mx-5 py-4">
                    <div className="getApp-border"> </div>
                </div>
                <div className="py-4">
                    <p>GET YOUR APP TODAY</p>
                    <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" alt=""/>
                    <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default GetApp;

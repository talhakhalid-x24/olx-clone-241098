import React from 'react';
import './header.css';
import Logo from '../../../images/logo.png';
import { Search, ExpandMore, Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Login from '../../Login/Login';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MyLocationIcon from '@material-ui/icons/MyLocation';


const Header = () => {
    return (
        <div className="header px-0">
            <div className="position-header py-1">
                <div className="header-container d-flex">
                    <div className="header-logo my-auto ml-4">
                        <a href="#"><img src={Logo} alt=""/></a> 
                    </div>
                    <div className="header-input mx-4 my-auto">
                        <div className="input-group">
                            <div className="input-group-append">
                                <div className="input-area d-flex py-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    <Search className="my-1 ml-2" />
                                    <input type="text" className="form-control" placeholder="Pakistan" />
                                    <ExpandMore className="mt-1 mr-2"  />
                                </div>
                                <div className="dropdown-menu py-0">
                                    <div className="dropdown-border">
                                        <div className="d-flex m-3 location">
                                            <MyLocationIcon />
                                            <div>
                                                <h6 className="m-0">Use current location</h6>
                                                <p className="m-0">Location blocked. Check browser/phone settings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 py-3 popular-location">
                                        <span>POPULAR LOCATIONS</span>
                                    </div>
                                    <a className="dropdown-item py-2" href="#">
                                        <LocationOnOutlinedIcon />
                                        Punjab
                                    </a>
                                    <a className="dropdown-item py-2" href="#">
                                        <LocationOnOutlinedIcon />
                                        Islamabd Capital Territory
                                    </a>
                                    <a className="dropdown-item py-2" href="#">
                                        <LocationOnOutlinedIcon />
                                        Sindh
                                    </a>
                                    <a className="dropdown-item py-2" href="#">
                                        <LocationOnOutlinedIcon />
                                        Khyber Pakhtunkhwa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-area d-flex my-auto">
                        <input placeholder="Find Cars, Mobile Phones and more..." className="pl-3" />
                        <span className="pt-2">
                            <Search className="mx-2" />
                        </span>
                    </div>
                    <div className="btn login-button my-auto ml-3">
                        <a>
                            <Link component={Login} />
                        </a>
                    </div>
                    <div className="btn sell-button pl-0 my-auto">
                        <button className="py-2 pl-3 pr-4 d-flex">
                            <Add />
                            SELL
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;

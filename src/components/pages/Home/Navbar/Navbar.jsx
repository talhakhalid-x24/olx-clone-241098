import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown/DropDown';
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="main-nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="nav-link navbar-brand my-auto" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ALL CATEGORIES <ExpandMore />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <DropDown />
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/mobiles" className="nav-link">Mobiles</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cars" className="nav-link">Cars</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/motor-cycles" className="nav-link">Motorcycles</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/houses" className="nav-link">Houses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tv" className="nav-link">TV - Video - Audio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tablets" className="nav-link">Tablets</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/landplots" className="nav-link">Land & Plots</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;

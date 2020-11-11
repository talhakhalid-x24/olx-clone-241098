import React from 'react';
import '../Navbar Css/navbarContainer.css';
import Header from '../../Header/Header';
import Navbar from '../Navbar';
import Lists from './List/List';
import BottomList from '../../Bottom List/BottomList';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ArrowForwardIos } from '@material-ui/icons';
import HouseData from '../Navbar Css/Data/HouseData';
import Cards from '../Navbar Css/Card/Cards';
import { Button } from '@material-ui/core';
import SlickSlider from '../Navbar Css/SlickSlider';
import ScrollArrow from '../../Bottom to Top/ScrollArrow';

const ncard = (val) => {
    return(
        <Cards 
            src = {val.src}
            title = {val.title}
            sq = {val.sq}
            price = {val.price}
            time = {val.time}
        />
    )
}

const Houses = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Header />
            <Navbar />
            <Lists />
            <div className="container-main-selected">
                <div className="selected">
                    <div className="link-main">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/houses" className="link">Property for Sale</Link>
                    </div>
                    <div className="heading">
                        <h4>Houses</h4>
                    </div>
                    <div className="card-menu-main d-flex">
                        <div className="filter-menu">
                            <h5>Filters</h5>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </a>
                                <a class="dropdown-item" href="#">Houses</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div>
                                        <a class="dropdown-item" href="#">All Categories</a>
                                    </div>
                                    <div className="ml-2">
                                        <a class="dropdown-item" href="#">Property for Sale</a>
                                    </div>
                                    <div className="ml-4">
                                        <Link to="/landplots" className="dropdown-item">Land & Plots</Link>
                                        <Link to="/houses" className="dropdown-item">Houses</Link>
                                        <Link to="/appartments" className="dropdown-item">Appartments & Flats</Link>
                                        <Link to="/offices" className="dropdown-item">Shops - Offices - Commercial Space</Link>
                                        <Link to="/portions" className="dropdown-item">Portions & Floors</Link>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Locations
                                </a>
                                <a class="dropdown-item" href="#">Pakistan</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="ml-2">
                                        <a class="dropdown-item" href="#">Punjab</a>
                                        <a class="dropdown-item" href="#">Sindh</a>
                                        <a class="dropdown-item" href="#">Khyber Pakhtunkhwa</a>
                                        <a class="dropdown-item" href="#">Islamabad Capital Territory</a>
                                        <a class="dropdown-item" href="#">Balochistan</a>
                                        <a class="dropdown-item" href="#">View more</a>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Price
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="d-flex justify-content-between">
                                        <input type="text" placeholder="Min" />
                                        <input type="text" placeholder="Max" />
                                        <button> <ArrowForwardIos /> </button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    bedrooms
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="d-flex justify-content-between">
                                        <input type="text" placeholder="Min" />
                                        <input type="text" placeholder="Max" />
                                        <button> <ArrowForwardIos /> </button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Area unit
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="ml-2">
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkOne" /><span className="my-auto">Kanal</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkOne" /><span className="my-auto">Marla</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkOne" /><span className="my-auto">Square Feet</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkOne" /><span className="my-auto">Square Meter</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkOne" /><span className="my-auto">Square Yards</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Area
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="d-flex justify-content-between">
                                        <input type="text" placeholder="Min" />
                                        <input type="text" placeholder="Max" />
                                        <button> <ArrowForwardIos /> </button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    feul
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="ml-2">
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkTwo" /><span className="my-auto">No</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="radio" name="checkTwo" /><span className="my-auto">Yes</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Bathrooms
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="d-flex justify-content-between">
                                        <input type="text" placeholder="Min" />
                                        <input type="text" placeholder="Max" />
                                        <button> <ArrowForwardIos /> </button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card-menu">
                            <div className="slick-slider">
                                <div className="d-flex slick-slider-top-text">
                                    <h4>PROJECTS IN PAKISTAN</h4>
                                    <p>NEW ON OLX</p>
                                </div>
                                <span>Explore a wide range of residential apartments to choose from.</span>
                                <SlickSlider />
                            </div>
                            <div className="d-flex">
                                <div className="card-text">
                                    <span>57,018 ads in <strong>Pakistan</strong> </span>
                                </div>
                                <div className="card-icons d-flex justify-content-between">
                                    <h6>VIEW</h6>
                                    <DehazeIcon />
                                    <ViewModuleIcon />
                                    <ViewDayIcon />
                                    <div className="sorted-dropdown">
                                        <div class="sorted-dropdown">
                                            <List>
                                                <ListItem button onClick={handleClick}>
                                                    <ListItemText primary={<><strong>SORTED BY </strong><span>: Newly listed</span></>} />
                                                    {open ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <List disablePadding>
                                                    <ListItem button>
                                                        <ListItemText primary="Newly listed" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Most relevant" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lowest price" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Highest price" />
                                                    </ListItem>
                                                    </List>
                                                </Collapse>
                                            </List>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="container">
                                <div className="row">
                                    {HouseData.map(ncard)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                    <Button variant="contained" color="primary" href="#contained-buttons" className="load-more-button">
                        Load More
                    </Button>
                    </footer>
                </div>
            </div>
            <ScrollArrow />
            <BottomList />
            <Footer />
        </>
    );
}

export default Houses;

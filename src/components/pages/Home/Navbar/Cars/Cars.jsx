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
import CarData from '../Navbar Css/Data/CarData';
import Cards from '../Navbar Css/Card/Cards';
import { Button } from '@material-ui/core';
import ScrollArrow from '../../Bottom to Top/ScrollArrow';

const ncard = (val) => {
    return(
        <Cards 
            src = {val.src}
            title = {val.title}
            km = {val.km}
            price = {val.price}
            time = {val.time}
        />
    )
}

const Cars = () => {
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
                        <Link to="/cars" className="link">Vechicles</Link>
                    </div>
                    <div className="heading">
                        <h4>Cars</h4>
                    </div>
                    <div className="card-menu-main d-flex">
                        <div className="filter-menu">
                            <h5>Filters</h5>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </a>
                                <a class="dropdown-item" href="#">Cars</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div>
                                        <a class="dropdown-item" href="#">All Categories</a>
                                    </div>
                                    <div className="ml-2">
                                        <a class="dropdown-item" href="#">Vechicles</a>
                                    </div>
                                    <div className="ml-4">
                                        <a class="dropdown-item" href="#">Cars</a>
                                        <a class="dropdown-item" href="#">Cars on Installment</a>
                                        <a class="dropdown-item" href="#">Cars Accesories</a>
                                        <a class="dropdown-item" href="#">Spare Parts</a>
                                        <a class="dropdown-item" href="#">Buses, Vans & Trucks</a>
                                        <a class="dropdown-item" href="#">Rickshaw & Chingchi</a>
                                        <a class="dropdown-item" href="#">Other Vechicles</a>
                                        <a class="dropdown-item" href="#">Boats</a>
                                        <a class="dropdown-item" href="#">Tractor & Trailers</a>
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
                                    Make And model
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="ml-2">
                                        <a class="dropdown-item" href="#">Suzuki</a>
                                        <a class="dropdown-item" href="#">Toyota</a>
                                        <a class="dropdown-item" href="#">Honda</a>
                                        <a class="dropdown-item" href="#">Daihatsu</a>
                                        <a class="dropdown-item" href="#">Nissan</a>
                                        <a class="dropdown-item" href="#">View all</a>
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
                                    Year
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
                                    Registered in
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="ml-2">
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Lahore</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Karachi</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Islamabad</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Unregistered</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Multan</span></a>
                                        </div>
                                        <a class="dropdown-item" href="#">View all</a>
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
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Petrol</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">CNG</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Hybrid</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Diesel</span></a>
                                        </div>
                                        <div>
                                            <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">LPG</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    kms driven
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
                                    Condition
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div>
                                        <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">Used</span></a>
                                    </div>
                                    <div>
                                        <a href="#" className="d-flex"><input type="checkbox" name="checkOne" /><span className="my-auto">New</span></a>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card-menu">
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
                                    {CarData.map(ncard)}
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

export default Cars;
